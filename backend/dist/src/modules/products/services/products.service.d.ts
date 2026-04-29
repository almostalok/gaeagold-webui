import { PrismaService } from '../../../prisma/prisma.service';
import { GetProductsQueryDto } from '../dto/get-products-query.dto';
import { ProductListResponseDto, ProductResponseDto } from '../dto/product-response.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: GetProductsQueryDto): Promise<ProductListResponseDto>;
    findOne(id: number): Promise<ProductResponseDto>;
    private mapProductResponse;
}
