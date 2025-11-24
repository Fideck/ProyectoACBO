// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserController } from '../presentation/controllers/user.controller';
import { PrismaService } from '../infrastructure/prisma/prisma.service';
import { UserPrismaRepository } from '../infrastructure/prisma/user.prisma.repository';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserPrismaRepository],
  exports: [UserPrismaRepository]
})
export class UsersModule {}
