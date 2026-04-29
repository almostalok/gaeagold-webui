export class ProductCategoryDto {
  id!: number;
  name!: string;
}

export class ProductSpecificationsDto {
  weight!: string | null;
  origin!: string | null;
  type!: string | null;
}

export class ProductResponseDto {
  id!: number;
  name!: string;
  price!: number;
  currency!: string;
  category!: ProductCategoryDto;
  images!: string[];
  specifications!: ProductSpecificationsDto;
}

export class ProductListResponseDto {
  data!: ProductResponseDto[];
  meta!: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}