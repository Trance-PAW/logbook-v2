import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryusageController } from './inventoryusage.controller';
import { InventoryusageService } from './inventoryusage.service';
import { InventoryUsageSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'InventoryUsage', schema: InventoryUsageSchema}])
  ],
  controllers: [InventoryusageController],
  providers: [InventoryusageService]
})
export class InventoryusageModule {}
