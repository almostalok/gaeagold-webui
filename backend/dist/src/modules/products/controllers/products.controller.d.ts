import { GetProductsQueryDto } from '../dto/get-products-query.dto';
import { ProductsService } from '../services/products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(query: GetProductsQueryDto): Promise<import("../dto/product-response.dto").ProductListResponseDto>;
    findOne(id: number): Promise<import("../dto/product-response.dto").ProductResponseDto>;
}
