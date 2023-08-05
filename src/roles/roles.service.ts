import { Injectable } from '@nestjs/common';
import { AddRole } from './dto/addRole.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role ){}

    async getRoleByValue(value: string){
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }

    async addRole(dto: AddRole){
        const role = await this.roleRepository.create(dto);
        return role;
    }
}
