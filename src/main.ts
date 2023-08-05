import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
.setTitle('NestJS-Roles')
.setDescription('Backend project with nestjs framework and postgresql where you can control users and their roles')
.setVersion('1.0.0')
.build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start();
