import { LoggerModule, WinstonAdapter } from '@hikestack/logger';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { AdminModule } from './admin';
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
    }),
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
    ]),
  ],
})
export class AppModule { }
