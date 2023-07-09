import { Injectable } from '@nestjs/common';
import { Model, SortOrder } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { FilterProductDTO } from './dto/filter-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<{ products: Product[]; totalCount: number }> {
    const products = await this.getProductsBySort(filterProductDTO);

    const totalCount = await this.productModel.countDocuments().exec();
    return { products, totalCount };
  }

  async getProductsBySort(filterProductDTO): Promise<Product[]> {
    const { category, name, sort, order, limit, page } = filterProductDTO;

    const orderOptions = order.toLowerCase() as SortOrder;
    const sortOption: { [key: string]: SortOrder } = {
      [sort]: orderOptions,
    };

    const query = name ? { name: new RegExp(name, 'i') } : {};
    const queryCategory = category
      ? { ...query, category: new RegExp(category, 'i') }
      : { ...query };

    const products = await this.productModel
      .find(queryCategory)
      .sort(sortOption)
      .skip(limit * (page - 1))
      .limit(limit)
      .exec();
    return products;
  }

  async getAllProducts(): Promise<{ products: Product[]; totalCount: number }> {
    const totalCount = await this.productModel.countDocuments().exec();
    const products = await this.productModel.find().exec();
    return { products, totalCount };
  }

  async getProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await this.productModel.create(createProductDTO);
    return newProduct.save();
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(id);
    return deletedProduct;
  }
}
