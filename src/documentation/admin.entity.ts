import { ApiProperty } from '@nestjs/swagger';

export class SignIn {
  @ApiProperty({ example:"admin@admin.com", description: 'Email to login as admin' })
  email: string;

  @ApiProperty({
    example: 'admin@123',
    description: 'Password ',
  })
  password: string;
}

export class CreateCategoryD {
  @ApiProperty({ example:"Action", description: 'Create a category.Give category name' })
  name: string;

}
export class UpdateCategoryD {
  @ApiProperty({ example:"Category 2", description: 'To update categoryName' })
  name: string;

  @ApiProperty({
    example: '',
    description: 'Provide categoryId ',
  })
  categoryId: string;
}
export class DeleteCategoryD {
  @ApiProperty({ example:"", description: 'To delete a category' })
  categoryId: string;
}


