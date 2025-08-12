import { UUID, randomUUID } from "node:crypto";
import { BoardId } from "./board";
import { CategoryId } from "./category";

export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export class Transaction {
  public readonly id: TransactionId;
  public amount: number;
  public description: string;
  public date: Date;
  public type: TransactionType;
  public boardId: BoardId;
  public categoryId?: CategoryId;

  private constructor(
    id: TransactionId,
    amount: number,
    description: string,
    date: Date,
    type: TransactionType,
    boardId: BoardId,
    categoryId?: CategoryId,
  ) {
    this.id = id;
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.type = type;
    this.boardId = boardId;
    this.categoryId = categoryId;
  }

  public static create(
    amount: number,
    description: string,
    date: Date,
    type: TransactionType,
    boardId: BoardId,
    categoryId?: CategoryId,
  ): Transaction {
    const id = randomUUID() as TransactionId;
    return new Transaction(
      id,
      amount,
      description,
      date,
      type,
      boardId,
      categoryId,
    );
  }
}

export type TransactionId = UUID;
