import { ITotalBetState } from "../types/types";
import { observable } from "mobx";

export class TotalBetState implements ITotalBetState {
  @observable
  private _totalBet: number = 0;
  constructor(value: number) {
    this.totalBet = value;
  }

  public set totalBet(value: number): void {
    this._totalBet = value;
  }

  public get totalBet(): number {
    return this._totalBet;
  }
}
