import { BetType, IBetModel } from "../types/types";
import { action, computed, observable } from "mobx";

/*
 Model it is class with data, actions over this data and computed values based on this data;
 Only one rule - 
  actions and computed are operating over class members 
  and dont have dependencies on other files
  all needed information is coming in constructor
 */
export class BetModel implements IBetModel {
  public betType: BetType;
  @observable
  public betValue = 0;

  constructor(betType: BetType) {
    this.betType = betType;
    this.betValue = 0;
  }

  @action
  public addBet(value: number) {
    this.betValue += value;
  }
  @computed
  public get totalBetValue(): number {
    return this.betValue;
  }
}
