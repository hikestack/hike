import constants from '@/constants';
import clusterize from '@hikestack/clusterize';
import { LoggerService } from '@hikestack/logger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  const config = app.get(ConfigService);
  const logger = app.get(LoggerService);

  app.useLogger(logger);

  app.enableCors();
  app.setGlobalPrefix(config.get('prefix'));
  app.useGlobalPipes(new ValidationPipe(config.get('validation')));

  await app.listen(config.get('port'), config.get('host'), async () => {
    logger.log(`
      Server is running at:
      - ENV:                ${process.env.NODE_ENV}      
      - URL:                http://${config.get('host')}:${config.get('port')}      
    `);
  });
}

constants.isDev ? main() : clusterize(main);
