"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const where = {
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
            }
            else {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException('Product with id ' + id + ' not found');
        }
        return this.mapProductResponse(product);
    }
    mapProductResponse(product) {
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
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map