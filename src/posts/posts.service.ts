import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postsRepository: typeof Post, private fileService: FilesService){}

    async create(dto: CreatePostDto, image: any) {
        try {
            const fileName = await this.fileService.createFile(image)
        const post = await this.postsRepository.create({...dto, image: fileName})
        return post
        } catch (error) {
            console.log(error)
        }
    }
}
