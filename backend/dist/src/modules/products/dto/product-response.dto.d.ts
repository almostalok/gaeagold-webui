export declare class ProductCategoryDto {
    id: number;
    name: string;
}
export declare class ProductSpecificationsDto {
    weight: string | null;
    origin: string | null;
    type: string | null;
}
export declare class ProductResponseDto {
    id: number;
    name: string;
    price: number;
    currency: string;
    category: ProductCategoryDto;
    images: string[];
    specifications: ProductSpecificationsDto;
}
export declare class ProductListResponseDto {
    data: ProductResponseDto[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
