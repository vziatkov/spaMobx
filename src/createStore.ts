import { BjCommands, BjState, BjModels, BjServices } from "./types/types";

import { BetState } from "./state/BetState";
import { TotalBetState } from "./state/TotalBetState";
import { BalanceState } from "./state/BalanceState";
import { PlaceBetCommand } from "./commands/PlaceBetCommand";
import { PlaceSideBetCommand } from "./commands/PlaceSideBetCommand";
import { BettingModel } from "./models/BettingModel";
import { TotalBetModel } from "./models/TotalBetModel";
import { BalanceModel } from "./models/BalanceModel";

import { SocketService } from "./services/remote/SocketService";
import { PlaySoundService } from "./services/local/PlaySoundService";


export const bjState: BjState = {
    mainBet: new BetState("mainBet"),
    sideBet: new BetState("perfectPair"),
    balance: new BalanceState(10),
    totalBet: new TotalBetState(0)
};

export const services = createServices();

export function createCommands(
    state: BjState,
  ): BjCommands {
    return {
      placeMainBet: new PlaceBetCommand(
          state.mainBet,
          state.totalBet,
          state.balance,
          { betValue: 1 },
          services.playSoundService
        ),
      placeSideBet: new PlaceSideBetCommand(
        new PlaceBetCommand(
          state.sideBet,
          state.totalBet,
          state.balance,
          { betValue: 1 },
          services.playSoundService
        )
      )
    };
  }
  
  export function createModels(
    state: BjState,
  ): BjModels {
    return {
      mainBet: new BettingModel(state.mainBet, state.balance, state.totalBet, {
        maxBet: 100
      }),
      sideBet: new BettingModel(state.sideBet, state.balance, state.totalBet, {
        maxBet: 5
      }),
      totalBet: new TotalBetModel(state.totalBet),
      balance: new BalanceModel(state.balance)
    };
  }

  export function createServices(): BjServices {
    return {
        playSoundService: new PlaySoundService({playSound: () => console.log("play sound")}),
        socketService: new SocketService()
      };
  }
  