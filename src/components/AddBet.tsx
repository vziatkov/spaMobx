import * as React from "react";
import { placeBet } from "../commands/PlaceBet";
import { observer } from "mobx-react";
import {
  selectCanPlaceMainBet,
  selectPlaceMainBetValue,
  selectCanPlaceSideBet,
  selectPlaceSideBetValue
} from "../selectors/Betting";
import { useBJStore } from "..";

interface AddBetProps {
  label: string;
  enable: boolean;
  clickHandler: () => void;
}

class AddBetComponentView extends React.PureComponent<AddBetProps> {
  public render() {
    const { label, enable, clickHandler } = this.props;
    return (
      <button onClick={clickHandler} disabled={!enable}>
        {label}
      </button>
    );
  }
}

export const AddMainBetComponent = observer((...args) => {
  //const label = state.localizationService.translate("addBet");
  const state = useBJStore();
  const canPlaceMainBet = selectCanPlaceMainBet(state)();
  const clickHandler = () =>
    placeBet({
      betModel: state.mainBet,
      balanceModel: state.balance,
      betValue: selectPlaceMainBetValue(state),
      socketService: state.socketService,
      canPlaceBet: canPlaceMainBet,
      totalBetModel: state.totalBet,
      playSoundService: state.playSoundService,
      soundPath: "asd"
    });
  return (
    <AddBetComponentView
      clickHandler={clickHandler}
      enable={canPlaceMainBet}
      label={"add mainBet"}
    />
  );
});

export const AddSideBetComponent = observer((...args) => {
  //const label = state.localizationService.translate("addBet");
  const state = useBJStore();
  const canPlaceSideBet = selectCanPlaceSideBet(state)();
  const clickHandler = () =>
    placeBet({
      betModel: state.mainBet,
      balanceModel: state.balance,
      betValue: selectPlaceSideBetValue(state),
      socketService: state.socketService,
      canPlaceBet: canPlaceSideBet,
      totalBetModel: state.totalBet,
      playSoundService: state.playSoundService,
      soundPath: "asd"
    });
  return (
    <AddBetComponentView
      clickHandler={clickHandler}
      enable={canPlaceSideBet}
      label={"add sidebet"}
    />
  );
});
