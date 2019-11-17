import { BjStore } from "../types/types";

export const selectBalance = (state: BjStore): number =>
  state.balance.balanceValue;
export const selectPlaceMainBetValue = (state: BjStore): number => 1;
export const selectPlaceSideBetValue = (state: BjStore): number => 2;
export const selectCountMySeats = (state: BjStore): number => 3;
export const selectMaxLimits = (state: BjStore): number => 50;
export const selectSideBet = (state: BjStore) => state.sideBet.totalBetValue;

const selectMainBet = (state: BjStore) => state.mainBet.totalBetValue;

export const selectCanPlaceMainBet = (
  state: BjStore,
  customParam: boolean = false
) => (
  mainBet: number = selectMainBet(state),
  balance: number = selectBalance(state),
  betValue: number = selectPlaceMainBetValue(state),
  countMySeats: number = selectCountMySeats(state),
  maxLimit: number = selectMaxLimits(state)
) => {
  return mainBet + betValue < maxLimit && betValue <= balance;
};

export const selectCanPlaceSideBet = (
  state: BjStore,
  customParam: boolean = false
) => (
  sideBet: number = selectSideBet(state),
  balance: number = selectBalance(state),
  betValue: number = selectPlaceSideBetValue(state),
  countMySeats: number = selectCountMySeats(state),
  maxLimit: number = selectMaxLimits(state)
) => {
  return sideBet + betValue < maxLimit && betValue <= balance;
};
