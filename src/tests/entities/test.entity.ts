// src/articles/entities/article.entity.ts

import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { 
  IsDate
 } from 'class-validator';

export class Test implements Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}