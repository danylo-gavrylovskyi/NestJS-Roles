import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'user@gmail.com', description: 'E-mail'})
    @IsString({message: 'E-mail needs to be a string'})
    @IsEmail({}, {message: 'Incorrect e-mail format'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @IsString({message: 'Password needs to be a string'})
    @Length(4, 16, {message: 'Password must be at least 4 symbols long'})
    readonly password: string;
}