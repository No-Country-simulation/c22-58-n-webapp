import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, IsUUID, Min } from 'class-validator';

export class CreateDishDto {
  @IsString()
  name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @IsPositive()
  @Min(0)
  @Type(() => Number)
  price: number;

  @IsString()
  description: string;

  @IsUUID()
  category_id: string;
}
