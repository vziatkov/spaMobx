import * as React from "react";
import { observer } from "mobx-react-lite";
import { useBJStore } from "..";
interface BalanceProps {
  value: number;
}

export class BalanceComponentView extends React.PureComponent<BalanceProps> {
  public render() {
    return <div> {`Balance $${this.props.value}`} </div>;
  }
}

export const BalanceComponent = observer(() => {
  const store = useBJStore();
  return <BalanceComponentView value={store.balance.balanceValue} />;
});
