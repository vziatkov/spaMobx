import * as React from "react";
import { render } from "react-dom";
import { AddMainBetComponent, AddSideBetComponent } from "./components/AddBet";
import { BalanceComponent } from "./components/Balance";
import { TotalBetComponent } from "./components/TotalBet";
import { BjStore, BetType } from "./types/types";
import { BetModel } from "./state/BetModel";
import { TotalBetModel } from "./state/TotalBetModel";
import { BalanceModel } from "./state/BalanceModel";
import { SocketService } from "./services/remote/SocketService";
import { PlaySoundService } from "./services/local/PlaySoundService";

import { SoundPlayer } from "../evo-ui-components/SoundPlayer";

import "./styles.css";

export const RootStoreContext = React.createContext<BjStore | null>(null);
export const useBJStore = () => {
  const store = React.useContext(RootStoreContext);
  if (!store) {
    throw new Error("Game root store should be provided into RootStoreContext");
  }
  return store;
};

class App extends React.PureComponent<{}> {
  private bjState: BjStore = {
    mainBet: new BetModel(BetType.MainBet),
    sideBet: new BetModel(BetType.PerfectPair),
    balance: new BalanceModel(10),
    totalBet: new TotalBetModel(0),
    playSoundService: new PlaySoundService(new SoundPlayer()),
    socketService: new SocketService()
  };

  public render() {
    return (
      <RootStoreContext.Provider value={this.bjState}>
        <div className="App">
          <AddMainBetComponent />
          <AddSideBetComponent />
          <BalanceComponent />
          <TotalBetComponent />
        </div>
      </RootStoreContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
