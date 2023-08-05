import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AddRole } from './dto/addRole.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @ApiOperation({summary: 'Role creation'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: AddRole){
        return this.roleService.addRole(dto)
    }

    @ApiOperation({summary: 'Get role by values'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }
}
