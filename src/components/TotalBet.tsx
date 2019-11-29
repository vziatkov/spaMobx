import * as React from "react";
import { observer } from "mobx-react-lite";
import { useBjModels } from "..";
interface TotalBetProps {
  value: string;
}

export class TotalBetComponentView extends React.PureComponent<TotalBetProps> {
  public render() {
    return <div> {`Total bet ${this.props.value}`} </div>;
  }
}

export const TotalBetComponent = observer(() => {
  const model = useBjModels();
  return <TotalBetComponentView value={model.totalBet.totalBetWithCurrency} />;
});
