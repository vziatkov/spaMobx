/**
 * Files commands is buisnees ligic of this app.
 * Rule - it should be clean function with all needed info via function signature.
 * Should have 100% covered unit test
 */
import {
  IBetModel,
  ISocketService,
  IPlaySoundService,
  IBalanceModel,
  ITotalBetModel
} from "../types/types";
interface PlaceBetParams {
  betModel: IBetModel;
  balanceModel: IBalanceModel;
  totalBetModel: ITotalBetModel;
  canPlaceBet: boolean;
  betValue: number;
  soundPath?: string;
  socketService: ISocketService;
  playSoundService?: IPlaySoundService;
}

export function placeBet<T extends PlaceBetParams>(args: T): void {
  const {
    betModel,
    betValue,
    socketService,
    playSoundService,
    soundPath,
    canPlaceBet,
    balanceModel,
    totalBetModel
  } = args;
  if (canPlaceBet) {
    betModel.addBet(betValue);
    balanceModel.reduceBalance(betValue);
    socketService.send(betValue);
    totalBetModel.addTotalBet(betValue);
    if (playSoundService && soundPath) {
      playSoundService.playSound(soundPath);
    }
  }
}
