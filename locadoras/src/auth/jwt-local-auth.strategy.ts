import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {  Strategy } from 'passport-local';

@Injectable()
export class JwtLocalStrategyService extends PassportStrategy(Strategy, 'jwt-local') {
  constructor(configService: ConfigService) {
    super();
    console.log("validate")
    console.log(configService.get('JWT_PUBLIC_ENV'))
    
  }

  async validate(username: string, pass: string): Promise<any> {
    console.log("validate")
    return {
      userId: 1,
      username: 'john',
      password: 'changeme',
    }
  }

}