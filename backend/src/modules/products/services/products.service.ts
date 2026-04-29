import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetProductsQueryDto } from '../dto/get-products-query.dto';
import { ProductListResponseDto, ProductResponseDto } from '../dto/product-response.dto';

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    category: {
      select: {
        id: true;
        name: true;
      };
    };
    images: {
      select: {
        url: true;
      };
    };
    specifications: true;
  };
}>;

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: GetProductsQueryDto): Promise<ProductListResponseDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      isActive: true,
    };

    if (query.search) {
      where.name = {
        contains: query.search,
        mode: 'insensitive',
      };
    }

    if (query.category) {
      if (/^\d+$/.test(query.category)) {
        where.category = {
          is: {
            id: Number(query.category),
          },
        };
      } else {
        where.category = {
          is: {
            name: {
              equals: query.category,
              mode: 'insensitive',
            },
          },
        };
      }
    }

    const [total, products] = await this.prisma.$transaction([
      this.prisma.product.count({ where }),
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          images: {
            select: {
              url: true,
            },
          },
          specifications: true,
        },
      }),
    ]);

    return {
      data: products.map((product) => this.mapProductResponse(product)),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    };
  }

  async findOne(id: number): Promise<ProductResponseDto> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        images: {
          select: {
            url: true,
          },
        },
        specifications: true,
      },
    });

    if (!product || !product.isActive) {
      throw new NotFoundException('Product with id ' + id + ' not found');
    }

    return this.mapProductResponse(product);
  }

  private mapProductResponse(product: ProductWithRelations): ProductResponseDto {
    return {
      id: product.id,
      name: product.name,
      price: Number(product.price),
      currency: product.currency,
      category: {
        id: product.category.id,
        name: product.category.name,
      },
      images: product.images.map((image) => image.url),
      specifications: {
        weight: product.specifications?.weight ?? null,
        origin: product.specifications?.origin ?? null,
        type: product.specifications?.type ?? null,
      },
    };
  }
}