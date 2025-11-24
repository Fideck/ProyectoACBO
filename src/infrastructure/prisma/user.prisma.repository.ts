// src/infrastructure/prisma/user.prisma.repository.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user.entity";

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const rec = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
      }
    });
    return new User(rec.id, rec.name, rec.email, rec.password, rec.role, rec.createdAt, rec.updatedAt);
  }

  async findByEmail(email: string): Promise<User | null> {
    const rec = await this.prisma.user.findUnique({ where: { email } });
    if (!rec) return null;
    return new User(rec.id, rec.name, rec.email, rec.password, rec.role, rec.createdAt, rec.updatedAt);
  }

  async findById(id: number): Promise<User | null> {
    const rec = await this.prisma.user.findUnique({ where: { id } });
    if (!rec) return null;
    return new User(rec.id, rec.name, rec.email, rec.password, rec.role, rec.createdAt, rec.updatedAt);
  }

  async findAll(): Promise<User[]> {
    const recs = await this.prisma.user.findMany();
    return recs.map(r => new User(r.id, r.name, r.email, r.password, r.role, r.createdAt, r.updatedAt));
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
