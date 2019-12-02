import * as React from "react";
import { render } from "react-dom";
import { AddMainBetComponent, AddSideBetComponent } from "./components/AddBet";
import { BalanceComponent } from "./components/Balance";
import { TotalBetComponent } from "./components/TotalBet";
import { BjCommands, BjModels } from "./types/types";
import { createModels, createCommands, bjState } from "./createStore";

import "./styles.css";

export const RootModels = React.createContext<BjModels | null>(null);
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

export interface AppProps {
  models: BjModels;
  commands: BjCommands;
}

class App extends React.PureComponent<AppProps> {
  public render() {
    return (
      <RootModels.Provider value={this.props.models}>
        <RootCommands.Provider value={this.props.commands}>
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
render(<App models={createModels(bjState)} commands={createCommands(bjState)}/>, rootElement);