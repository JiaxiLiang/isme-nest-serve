/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/07 20:30:13
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用 session 中间件
  app.use(
    session({
      secret: 'isme',
      name: 'isme.session',
      rolling: true,
      cookie: { maxAge: null },
      resave: false,
      saveUninitialized: true,
    }),
  );

  /**************************************************
   * 🔥【关键新增】在此处添加 CORS 配置（3行核心代码）
   * 位置必须在 app.use(session) 之后、app.listen() 之前
   **************************************************/
  app.enableCors({
    origin: 'http://localhost:3000', // vue-naive-admin 的默认开发地址
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 必须为 true！否则前端无法传递登录凭证
  });
  /**************************************************/
  await app.listen(process.env.APP_PORT || 8085);

  console.log(`🚀 启动成功: http://localhost:${process.env.APP_PORT}`);
}
bootstrap();
