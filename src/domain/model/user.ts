import { UUID, randomUUID } from "node:crypto";
import bcrypt from "@node-rs/bcrypt";

export class User {
  public readonly id: UserId;
  public email: string;
  public password: string;
  public name: string;

  private constructor(
    id: UserId,
    email: string,
    password: string,
    name: string,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
  }

  public updatePassword(password: string): void {
    this.password = bcrypt.hashSync(password, 10);
  }

  public validatePassword(password: string): boolean {
    return this.password ? bcrypt.compareSync(password, this.password) : false;
  }

  public static async create(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const id = randomUUID() as UserId;
    const hashedPassword = await bcrypt.hash(password, 10);
    return new User(id, email, hashedPassword, name);
  }
}

export type UserId = UUID;
