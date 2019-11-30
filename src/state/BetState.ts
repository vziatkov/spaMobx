import { BetType, IBetState } from "../types/types";
import { observable } from "mobx";

/*
 Model it is class with data, actions over this data and computed values based on this data;
 Only one rule - 
  actions and computed are operating over class members 
  and dont have dependencies on other files
  all needed information is coming in constructor
 */
export class BetState implements IBetState {
  @observable
  private _bet = 0;

  constructor(private betType: BetType) {
    this._bet = 0;
  }

  public set bet(value: number) {
    this._bet = value;
  }

  public get bet(): number {
    return this._bet;
  }
}
