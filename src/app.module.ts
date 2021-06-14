import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {AuthenticationModule} from "./module/authentication.module"
import { AdminModule } from './module/admin.module';
import { JwtMiddleware } from './jwt.check.middleware';
import { AuthModule } from './module/auth.module';
import { UserModule } from './module/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),AuthenticationModule,AdminModule,AuthModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: 'admin/signIn', method: RequestMethod.PUT },
      )
      .forRoutes("admin","user");
  }
}
