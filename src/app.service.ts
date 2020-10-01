import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getIndex():string {
  	return 'fdsffd'
  }
  getTest():string {
  	return 'tst'
  }
}
