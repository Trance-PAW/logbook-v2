import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventorySchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'InventoryItem', schema: InventorySchema }])
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}