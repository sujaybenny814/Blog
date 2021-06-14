import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constant/auth';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}