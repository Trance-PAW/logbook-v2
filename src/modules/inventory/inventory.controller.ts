import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';
import { InventoryItem } from './interfaces/inventory-item.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll(): Promise<InventoryItem[]> {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<InventoryItem> {
      return this.inventoryService.find(id);
  }

  @Post()
  create(@Body() createInventoryItemDto: CreateInventoryItemDto): Promise<InventoryItem> {
    return this.inventoryService.create(createInventoryItemDto);
  }

  @Post('/file-upload')
  async uploadFile(@Body() body: { products: any[] }) {
    return this.inventoryService.createMany(body.products);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryItemDto: UpdateInventoryItemDto) {
    return this.inventoryService.update(id, updateInventoryItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<InventoryItem> {
    return this.inventoryService.delete(id);
  }
}
