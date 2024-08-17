export const frequencyMapper = {
  "1m": 12,
  "1q": 4,
  "6m": 2,
  "1y": 1,
};

export const investmentCalculator = ({
  frequency,
  amount,
  years,
  annualReturn,
}) => {
  //TODO: Do the calculations here
  return 100;
};

export const sipCalculator = ({ frequency, amount, years, annualReturn }) => {
  //TODO: Do the calculations here
  const totalNumberOfPeriods = years * frequencyMapper[frequency];
  const returnRate = Number(annualReturn) / 100 / frequencyMapper[frequency];
  console.log("CALC:", typeof annualReturn);
  const futureValue =
    (Number(amount) *
      (((1 + returnRate) ** totalNumberOfPeriods - 1) * (1 + returnRate))) /
    returnRate;

  if (futureValue) {
    return Math.ceil(futureValue);
  }
  return null;
};
