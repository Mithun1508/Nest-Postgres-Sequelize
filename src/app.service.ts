/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    console.log("something else");
    return ['Alice Johnson','Bob smaith'];
  }
}
