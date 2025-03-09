import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { InventoryUsage } from './interfaces/inventoryusage.interface';
import { CreateInventoryUsageDto } from './dto/create-inventoryusage.dto';

@Injectable()
export class InventoryusageService {
    constructor(@InjectModel('InventoryUsage') private inventoryUsageModel: Model<InventoryUsage>) {}

    async create(createInventoryUsageDto: CreateInventoryUsageDto): Promise<InventoryUsage> {
        const createdUsage = new this.inventoryUsageModel(createInventoryUsageDto);
        return createdUsage.save()
    }

    async find(): Promise<InventoryUsage> {
        const item = await this.inventoryUsageModel.find().exec();
        if(!item) throw new HttpException('Page not found', 404);
        return 
    }
}
