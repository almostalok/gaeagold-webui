import axiosInstance from '@/utils/axiosConfig';

export interface ProductSpecifications {
  weight?: string;
  origin?: string;
  type?: string;
}

export interface ProductImage {
  id: string;
  url: string;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface BackendProduct {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: ProductCategory;
  images: ProductImage[];
  specifications: ProductSpecifications;
  isActive: boolean;
  createdAt: string;
  modifiedAt: string;
}

export interface ProductListResponse {
  data: BackendProduct[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const productService = {
  /**
   * Fetch all products with optional pagination and filters
   */
  async getProducts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
  }): Promise<ProductListResponse> {
    try {
      const response = await axiosInstance.get<ProductListResponse>('/products', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  /**
   * Fetch a single product by ID
   */
  async getProductById(id: string): Promise<BackendProduct> {
    try {
      const response = await axiosInstance.get<BackendProduct>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  /**
   * Search products by name
   */
  async searchProducts(query: string, page = 1, limit = 10) {
    return this.getProducts({
      search: query,
      page,
      limit,
    });
  },

  /**
   * Filter products by category
   */
  async getProductsByCategory(category: string, page = 1, limit = 10) {
    return this.getProducts({
      category,
      page,
      limit,
    });
  },
};
