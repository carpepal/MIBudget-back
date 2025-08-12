import { UUID, randomUUID } from "node:crypto";

export class Category {
  public readonly id: CategoryId;
  public name: string;

  private constructor(id: CategoryId, name: string) {
    this.id = id;
    this.name = name;
  }

  public static create(name: string): Category {
    const id = randomUUID() as CategoryId; // Generate a unique ID
    return new Category(id, name);
  }
}

export type CategoryId = UUID;
