import * as React from "react";
import { observer } from "mobx-react";
import { useBjCommands, useBjModels } from "..";

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
  const commands = useBjCommands();
  const model = useBjModels();
  const canPlaceMainBet = model.mainBet.canPlaceBet;
  const clickHandler = () => {
    commands.placeMainBet.execute({ soundName: "clickMainBet" });
  };
  return (
    <AddBetComponentView
      clickHandler={clickHandler}
      enable={canPlaceMainBet}
      label={"add mainBet"}
    />
  );
});

export const AddSideBetComponent = observer((...args) => {
  const commands = useBjCommands();
  const model = useBjModels();
  const canPlaceSideBet = model.sideBet.canPlaceBet;
  const clickHandler = () => {
    commands.placeSideBet.execute({ soundName: "clickSidebet" });
  };
  return (
    <AddBetComponentView
      clickHandler={clickHandler}
      enable={canPlaceSideBet}
      label={"add sidebet"}
    />
  );
});
