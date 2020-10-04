import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'node_modules'),
    }),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
