import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import 'dotenv/config';
@Module({
  imports: [MongooseModule.forRoot(process.env.DB_HOST), ProductModule, UsersModule, AuthModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
