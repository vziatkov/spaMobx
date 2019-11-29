import { IBalanceState } from "../types/types";
import { observable } from "mobx";

export class BalanceState implements IBalanceState {
  @observable
  private _balance: number = 0;
  constructor(value: number) {
    this._balance = value;
  }

  public set balance(value: number): void {
    this._balance = value;
  }

  public get balance(): number {
    return this._balance;
  }
}
