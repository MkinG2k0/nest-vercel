import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: { name: '1', books: { create: [] } },
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({ where });
  }

  update(
    where: Prisma.AuthorWhereUniqueInput,
    updateAuthorDto: Prisma.AuthorUpdateInput,
  ) {
    return this.prisma.author.update({ where, data: updateAuthorDto });
  }

  remove(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({ where });
  }
}
