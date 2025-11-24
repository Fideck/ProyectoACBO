// src/presentation/controllers/user.controller.ts
import { Controller, Post, Body, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserUseCase } from '../../application/use-cases/create-user.usecase';
import { UserPrismaRepository } from '../../infrastructure/prisma/user.prisma.repository';

@Controller('users')
export class UserController {
  constructor(private readonly repo: UserPrismaRepository) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateUserDto) {
    const usecase = new CreateUserUseCase(this.repo);
    const result = await usecase.execute(dto);
    // Quitar password del response por seguridad
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...safe } = result as any;
    return safe;
  }

  @Get()
  async findAll() {
    return this.repo.findAll().then(list => list.map(u => {
      // ocultar password en cada usuario
      const { password, ...rest } = u as any;
      return rest;
    }));
  }
}
