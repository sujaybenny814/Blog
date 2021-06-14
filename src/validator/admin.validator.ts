import { IsNotEmpty } from 'class-validator';

export class CreateCategory {
  @IsNotEmpty()
  name: string;
}

export class UpdateCategory {
  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  name: string;
  
}
export class DeleteCategory {
    @IsNotEmpty()
    categoryId: string;    
  }


