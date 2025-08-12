import { UUID } from "node:crypto";
import { UserId } from "./user";
import { randomUUID } from "node:crypto";
import { UUID, randomUUID } from "node:crypto";
import { UserId } from "./user";
export class Board {
  public readonly id: BoardId;
  public name: string;
  public userId: UserId;

  private constructor(id: BoardId, name: string, userId: UserId) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }

  public static create(name: string, userId: UserId): Board {
    const id = randomUUID() as BoardId;
    return new Board(id, name, userId);
  }
}

export type BoardId = UUID;
