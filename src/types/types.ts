export interface BjStore {
  mainBet: IBetModel;
  sideBet: IBetModel;
  balance: IBalanceModel;
  totalBet: ITotalBetModel;
  socketService: ISocketService;
  playSoundService: IPlaySoundService;
}
export enum BetType {
  MainBet = "mainBet",
  PerfectPair = "perfectPair"
}

export interface IBetModel {
  addBet: (value: number) => void;
  totalBetValue: number;
}

export interface IBalanceModel {
  reduceBalance(value: number): void;
  balanceValue: number;
}

export interface ITotalBetModel {
  addTotalBet(value: number): void;
  totalBetValue: number;
}

export interface ISocketService {
  send: (data: any) => boolean;
}

export interface IPlaySoundService {
  playSound(path: string): boolean;
}
