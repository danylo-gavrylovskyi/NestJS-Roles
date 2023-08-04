import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.usersService.createUser(dto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }
}
