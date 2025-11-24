// src/domain/entities/user.entity.ts
export class User {
  constructor(
    public readonly id: number | null,
    public name: string,
    public email: string,
    public password: string, // hashed
    public role: string = 'CLIENT',
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
