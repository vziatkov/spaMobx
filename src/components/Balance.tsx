import * as React from "react";
import { observer } from "mobx-react-lite";
import { useBjModels } from "..";
interface BalanceProps {
  value: string;
}

export class BalanceComponentView extends React.PureComponent<BalanceProps> {
  public render() {
    return <div> {`Balance ${this.props.value}`} </div>;
  }
}

export const BalanceComponent = observer(() => {
  const model = useBjModels();
  return <BalanceComponentView value={model.balance.balanceWithCurrency} />;
});
