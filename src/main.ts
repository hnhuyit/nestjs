import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
// import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    // {logger: new MyLogger()},
    new FastifyAdapter(),
  );

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.useStaticAssets(join(__dirname, '..', 'node_modules'));

  // app.useStaticAssets({
  //   root: join(__dirname, '..', 'public'),
  //   prefix: '/static/',
  // });
  
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
  
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);


}
bootstrap();
