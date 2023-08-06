import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsTo, ForeignKey} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttributes{
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttributes>{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    content: string

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    image: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: false})
    userId: number

    @BelongsTo(() => User)
    author: User
}