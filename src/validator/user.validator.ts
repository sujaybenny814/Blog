import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSignIn {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserSignUp {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;
  
}

export class CreateBlog {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
  
  @IsNotEmpty()
  categoryId: string;
}

export class DeleteBlog {
  @IsNotEmpty()
  blogId: string;
}

export class UpdateBlog {
  @IsNotEmpty()
  blogId: string;
}






