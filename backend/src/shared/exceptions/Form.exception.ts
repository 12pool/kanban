import { BadRequestException } from '@nestjs/common';

type FormExceptionErrors = {
  field: string;
  message: string;
};

export class FormException extends BadRequestException {
  constructor(errors: FormExceptionErrors[]) {
    super({
      type: 'form',
      errors,
    });
  }
}
