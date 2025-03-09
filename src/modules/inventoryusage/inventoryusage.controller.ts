import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { InventoryUsage } from './interfaces/inventoryusage.interface';
import { CreateInventoryUsageDto } from './dto/create-inventoryusage.dto';
import { InventoryusageService } from './inventoryusage.service';

@Controller('inventoryusage')
export class InventoryusageController {
    constructor(private readonly inventoryUsageService: InventoryusageService) {}

    @Get()
    find(): Promise<InventoryUsage> {
        return this.inventoryUsageService.find();
    }

    @Post()
    create(@Body() createInventoryUsageDto: CreateInventoryUsageDto): Promise<InventoryUsage> {
        console.log(createInventoryUsageDto);
        return this.inventoryUsageService.create(createInventoryUsageDto);
    }
}
