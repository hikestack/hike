import { LoggerModule, WinstonAdapter } from '@hikestack/logger';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configs } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: [`env/${process.env.NODE_ENV}.env`],
      load: configs,
    }),
    LoggerModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        adapter: new WinstonAdapter(configService.get("logger")),
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
