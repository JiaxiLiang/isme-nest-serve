/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/07 20:30:08
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // 引入 ConfigService
import { TypeOrmModule } from '@nestjs/typeorm'; // 引入 TypeORM
import { SharedModule } from './shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    /* 配置文件模块 */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    /* 2. 新增：MySQL 数据库连接配置 */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 导入 ConfigModule 以便读取 .env
      inject: [ConfigService], // 注入 ConfigService
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'), // 读取 DB_HOST
        port: +configService.get<number>('DB_PORT'), // 读取端口并转为数字
        username: configService.get('DB_USER'),
        password: configService.get('DB_PWD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // 自动扫描所有实体文件
        synchronize: configService.get('DB_SYNC') === 'true', // 开发环境开启同步
      }),
    }),
    //业务模块
    UserModule,
    PermissionModule,
    RoleModule,
    AuthModule,
    //共享模块 redis一般在里面初始化
    SharedModule,
  ],
})
export class AppModule {}
