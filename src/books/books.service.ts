import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: Prisma.BooksUncheckedCreateInput) {
    return this.prisma.books.create({
      data: { ...createBookDto, authorId: +createBookDto.authorId },
    });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: { author: { select: { name: true } } },
    });
  }
  findBooks(booksWhereUniqueInput: Prisma.AuthorWhereInput) {
    return this.prisma.books.findMany({
      where: { author: booksWhereUniqueInput },
    });
  }

  update(
    where: Prisma.BooksWhereUniqueInput,
    booksUpdateInput: Prisma.BooksUpdateInput,
  ) {
    return this.prisma.books.update({
      where,
      data: booksUpdateInput,
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where,
    });
  }
}
