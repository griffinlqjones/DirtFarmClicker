// prettier-ignore
let initializer = {
  morality: 0,
  timer: null,
  timerRunning: false,
  /* property size represents total square meters */
  maxGoodDirt: 30,
  /* dirt rate represents amount of dirt per square meter in cubed meters. passiveDirtRate of 0.1 represents 0.1m^3 per m^2 of property size.*/
  passiveDirtRate: 0,
  clickedDirtRate: 1,
  laborCost: 0,
  dirtUnitPrice: 1,
  money: 100,
  goodDirt: 0,
}

export default initializer;
