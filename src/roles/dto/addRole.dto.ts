import { ApiProperty } from "@nestjs/swagger";

export class AddRole{
    @ApiProperty({example: 'ADMIN', description: 'Role'})
    readonly value: string;

    @ApiProperty({example: 'Can do everything', description: 'Role description'})
    readonly description: string;
}