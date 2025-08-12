import { UUID, randomUUID } from "node:crypto";
import { BoardId } from "./board";

export class Goal {
  public readonly id: GoalId;
  public name: string;
  public targetAmount: number;
  public deadline?: Date;
  public boardId: BoardId;
  public completed: boolean;
  private constructor(
    id: GoalId,
    name: string,
    targetAmount: number,
    boardId: BoardId,
    deadline?: Date,
    completed?: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.targetAmount = targetAmount;
    this.boardId = boardId;
    this.deadline = deadline;
    this.completed = completed || false;
  }

  public static create(
    name: string,
    targetAmount: number,
    boardId: BoardId,
    deadline?: Date,
  ): Goal {
    const id = randomUUID() as GoalId;
    return new Goal(id, name, targetAmount, boardId, deadline);
  }
}
export type GoalId = UUID;
