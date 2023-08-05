import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'user@gmail.com', description: 'E-mail'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    readonly password: string;
}