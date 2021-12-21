
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthLocalGuard extends AuthGuard('jwt-local') {}

