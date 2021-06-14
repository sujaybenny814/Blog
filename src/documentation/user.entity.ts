import { ApiProperty } from '@nestjs/swagger';

export class SignInD {
  @ApiProperty({ example:"email address", description: 'Email to login as user' })
  email: string;

  @ApiProperty({
    example: 'admin@123',
    description: 'Password ',
  })
  password: string;
  
}

export class SignUpD {
  @ApiProperty({ example:"email address", description: 'Email to login as user' })
  email: string;

  @ApiProperty({
    example: 'admin@123',
    description: 'Password ',
  })
  password: string;

  @ApiProperty({
    example: 'John mathew',
    description: 'name of the user ',
  })
  name: string; 
}

export class CreateBlogD {
  @ApiProperty({ example:"Action", description: 'Create a Blog.Give Blog title' })
  title: string;

  @ApiProperty({ example:"It is a Action", description: 'Give description for the blog' })
  description: string;

  @ApiProperty({ example:"", description: 'Give categoryId for creating blog' })
  categoryId: string;

}
export class UpdateBlogD {
  @ApiProperty({ example:"", description: 'BlogId to update blog' })
  blogId: string;

  @ApiProperty({
    example: 'new blog name',
    description: 'update blog name ',
  })
  title: string;

  @ApiProperty({
    example: 'new blog description',
    description: 'update blog description ',
  })
  description: string;
}
export class DeleteBlogD {
  @ApiProperty({ example:"", description: 'To delete a blog' })
  blogId: string;
}


