import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async login(userDto: CreateUserDto){
        
    }

    async registration(userDto: CreateUserDto){
        const user = await this.userService.createUser(userDto)
    }
}