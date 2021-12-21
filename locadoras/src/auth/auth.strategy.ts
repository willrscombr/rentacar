import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_PUBLIC_ENV'),
      algorithms: ["RS256"],
    });

   
  }

  async validate(payload: any) {
    console.log('payload',payload);
    return {
      userId: 1,
      username: 'john',
      password: 'changeme',
    }
  }

}