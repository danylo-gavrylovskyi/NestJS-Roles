import { IsString } from "class-validator"

export class AddRoleDto{
    @IsString({message: 'Role value must be a string'})
    readonly value: string
    
    readonly userId: number
}