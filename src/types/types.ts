export interface BjState {
  mainBet: IBetState;
  sideBet: IBetState;
  balance: IBalanceState;
  totalBet: ITotalBetState;
}

export interface IBetState {
  bet: number;
}

export interface IBalanceState {
  balance: number;
}

export interface ITotalBetState {
  totalBet: number;
}

export interface BjModels {
  mainBet: IBettingModel;
  sideBet: IBettingModel;
  balance: IBalanceModel;
  totalBet: ITotalBetModel;
}
export interface IBettingModel {
  readonly canPlaceBet: boolean;
}

export interface ITotalBetModel {
  readonly totalBetWithCurrency: string;
}

export interface IBalanceModel {
  readonly balanceWithCurrency: string;
}

export interface BjServices {
  socketService: ISocketService;
  playSoundService: IPlaySoundService;
}

/*export type commandsConstructor = Partial<BjStore> &
  Partial<BjServices> &
  Partial<BjModelsPresenter>;
*/
export interface ICommand<params, result> {
  //new (args: constructorParams): ICommand;
  execute(params: params): result;
}

export interface BjCommands {
  placeMainBet: ICommand<{ soundName: string }, void>;
  placeSideBet: ICommand<{ soundName: string }, void>;
}

export type BetType = "mainBet" | "perfectPair";

export interface ISocketService {
  send: (data: any) => boolean;
}

export interface IPlaySoundService {
  playSound(path: string): boolean;
}
