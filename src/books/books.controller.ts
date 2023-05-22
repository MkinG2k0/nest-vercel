import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BooksCreateInput } from 'src/@generated/books/books-create.input';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: any) {
    console.log(createBookDto);
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':name')
  findBooks(@Param('name') name: string) {
    return this.booksService.findBooks({ name });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookDto: Prisma.BooksUpdateInput,
  ) {
    return this.booksService.update({ id: +id }, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove({ id: +id });
  }
}
