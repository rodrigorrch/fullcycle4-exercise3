import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponse {
    @ApiProperty()
    id: number;

    @ApiProperty({
        type: String,
        description: 'name of category'
    })
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    created_at:Date

    @ApiProperty()
    uptated_at:Date
}