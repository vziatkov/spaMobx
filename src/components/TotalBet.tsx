import * as React from "react";
import { observer } from "mobx-react-lite";
import { useBJStore } from "..";
interface TotalBetProps {
  value: number;
}

export class TotalBetComponentView extends React.PureComponent<TotalBetProps> {
  public render() {
    return <div> {`Total bet $${this.props.value}`} </div>;
  }
}

export const TotalBetComponent = observer(() => {
  const store = useBJStore();
  return <TotalBetComponentView value={store.totalBet.totalBetValue} />;
});
