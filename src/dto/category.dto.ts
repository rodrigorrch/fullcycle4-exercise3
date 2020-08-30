import { ApiProperty } from "@nestjs/swagger";
import {IsString, IsNotEmpty} from 'class-validator';

// Como se fosse o response mais focado no request
export class CategoryDto{

    @ApiProperty({
        type: String,
        description: 'name of caegory'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    type: string;
}