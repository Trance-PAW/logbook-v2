import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';
import { InventoryItem } from './interfaces/inventory-item.interface';

@Injectable()
export class InventoryService {
  constructor(@InjectModel('InventoryItem') private inventoryItemModel: Model<InventoryItem>) {}

  async findAll(): Promise<InventoryItem[]> {
    return this.inventoryItemModel.find().exec();
  }

  async create(createInventoryItemDto: CreateInventoryItemDto): Promise<InventoryItem> {
    const createdItem = new this.inventoryItemModel(createInventoryItemDto);
    return createdItem.save();
  }

  async update(id: string, updateInventoryItemDto: UpdateInventoryItemDto): Promise<InventoryItem> {
    return this.inventoryItemModel.findByIdAndUpdate(id, updateInventoryItemDto, { new: true }).exec();
  }

  async delete(id: string): Promise<InventoryItem> {
    return this.inventoryItemModel.findByIdAndDelete(id).exec();
  }

  async createMany(createInventoryItemDtos: CreateInventoryItemDto[]): Promise<InventoryItem[]> {
    return this.inventoryItemModel.insertMany(createInventoryItemDtos);
  }
}
