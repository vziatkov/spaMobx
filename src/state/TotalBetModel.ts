import { ITotalBetModel } from "../types/types";
import { action, observable, computed } from "mobx";

export class TotalBetModel implements ITotalBetModel {
  @observable
  private totalBet: number = 0;
  constructor(value: number) {
    this.totalBet = value;
  }

  @action
  public addTotalBet(value: number): void {
    this.totalBet += value;
  }

  @computed
  public get totalBetValue(): number {
    return this.totalBet;
  }
}
