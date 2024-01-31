import { BadRequestException } from '@nestjs/common';

export class SimpleException extends BadRequestException {
  constructor(message: string) {
    super({
      type: 'manual',
      message,
    });
  }
}
