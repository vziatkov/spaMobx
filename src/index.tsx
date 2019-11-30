import * as React from "react";
import { render } from "react-dom";
import { AddMainBetComponent, AddSideBetComponent } from "./components/AddBet";
import { BalanceComponent } from "./components/Balance";
import { TotalBetComponent } from "./components/TotalBet";
import { BjState, BjServices, BjCommands, BjModels } from "./types/types";
import { BetState } from "./state/BetState";
import { TotalBetState } from "./state/TotalBetState";
import { BalanceState } from "./state/BalanceState";
import { SocketService } from "./services/remote/SocketService";
import { PlaySoundService } from "./services/local/PlaySoundService";

import { PlaceBetCommand } from "./commands/PlaceBetCommand";
import { PlaceSideBetCommand } from "./commands/wrappers/PlaceSideBetCommand";
import { LogCommand } from "./commands/LogCommand";
import { BettingModel } from "./models/BettingModel";
import { TotalBetModel } from "./models/TotalBetModel";
import { BalanceModel } from "./models/BalanceModel";

//import { SoundPlayer } from "../evo-ui-components/SoundPlayer";

import "./styles.css";

export const RootModels = React.createContext<BjModels | null>(null);
export const RootServices = React.createContext<BjServices | null>(null);
export const RootCommands = React.createContext<BjCommands | null>(null);

export const useBjCommands = () => {
  const commands = React.useContext(RootCommands);
  if (!commands) {
    throw new Error("Game root store should be provided into RootCommands");
  }
  return commands;
};

export const useBjModels = () => {
  const models = React.useContext(RootModels);
  if (!models) {
    throw new Error("Game root store should be provided into RootPresenter");
  }
  return models;
};

class App extends React.PureComponent<{}> {
  private bjState: BjState = {
    mainBet: new BetState("mainBet"),
    sideBet: new BetState("perfectPair"),
    balance: new BalanceState(10),
    totalBet: new TotalBetState(0)
  };

  private bjModels: BjModels;

  private bjServices: BjServices;

  private bjCommands: BjCommands;

  constructor(props: {}) {
    super(props);
    this.bjServices = {
      playSoundService: new PlaySoundService({playSound: () => console.log("play sound")}),
      socketService: new SocketService()
    };
    this.bjModels = createModelsFactory(this.bjState);
    this.bjCommands = createCommandsFactory(this.bjState, this.bjServices);
  }

  public render() {
    return (
      <RootModels.Provider value={this.bjModels}>
        <RootCommands.Provider value={this.bjCommands}>
          <div className="App">
            <AddMainBetComponent />
            <AddSideBetComponent />
            <BalanceComponent />
            <TotalBetComponent />
          </div>
        </RootCommands.Provider>
      </RootModels.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

function createCommandsFactory(
  state: BjState,
  services: BjServices
): BjCommands {
  return {
    placeMainBet: new LogCommand(
      new PlaceBetCommand(
        state.mainBet,
        state.totalBet,
        state.balance,
        { betValue: 1 },
        services.playSoundService
      ),
      "mainBet",
      services.socketService
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

function createModelsFactory(
  models: BjState,
  classicVariation: boolean = true
): BjModels {
  return {
    mainBet: new BettingModel(models.mainBet, models.balance, models.totalBet, {
      maxBet: 100
    }),
    sideBet: new BettingModel(models.sideBet, models.balance, models.totalBet, {
      maxBet: 5
    }),
    totalBet: new TotalBetModel(models.totalBet),
    balance: new BalanceModel(models.balance)
  };
}
