// src/application/use-cases/create-user.usecase.ts
import { IUserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user.entity";
import * as bcrypt from "bcrypt";

export class CreateUserUseCase {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(input: { name: string; email: string; password: string; role?: string }) {
    // Validaciones básicas se pueden agregar aquí o en DTOs
    const hashed = await bcrypt.hash(input.password, 10);
    const user = new User(null, input.name, input.email, hashed, input.role || "CLIENT");
    const created = await this.userRepo.create(user);
    // ocultar password al retornar (opcional)
    created.password = undefined as unknown as string;
    return created;
  }
}
