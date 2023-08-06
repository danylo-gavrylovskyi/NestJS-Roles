import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto);
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate){
            throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
        }
        const passwordHash = await bcrypt.hash(userDto.password, 10)
        const user = await this.userService.createUser({...userDto, password: passwordHash})
        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {token: this.jwtService.sign(payload)}
    }

    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        const arePasswordsEqual = await bcrypt.compare(userDto.password, user.password)
        if (user && arePasswordsEqual){
            return user;
        }
        throw new UnauthorizedException({message: 'Incorrect login or password'})
    }
}
