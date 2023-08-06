import { IsNumber, IsString } from "class-validator"

export class BanUserDto{
    @IsNumber({}, {message: 'UserID must be a number'})
    readonly userId: number
    @IsString({message: 'Ban reason must be a string'})
    readonly banReason: string
}