/*
Ideas:
- property expansions require x staff each to gain their benefit.


*/
// prettier-ignore
let upgradeList = [
  /* Staff upgrades */
  {
    name: "Child Laborers",
    type: "staff",
    lockedDescription: "Your business model has proven successful enough to buy your friends drinks once in a while. But to expand you're going to need some extra hands, attached to people. Preferably cheap ones. What's your stance on child labor?",
    unlockedDescription: "You have recruited the neighborhood kids to work on your dirt farm for a mere pittance. You're immoral but don't let anyone tell you you're ineffective.",
    available: false,
    owned: false,
    aquisitionCost: 20,
    acquisitionCurrency: "goodDirt",
    intervalCost: 1,
    count: 0,
    capacity: 4,
    value: 2,
    repurchaseable: true,
    condition: function (state) {
      // state is undefined for some reason
      return state.goodDirt >= 10 ? true : false;
    },
    morality: -5
  },
  {
    name: "Smelly Teenagers",
    type: "staff",
    lockedDescription: "They smell bad, but you pay them minimum wage.",
    unlockedDescription: "They won't be able to put themselves through college on their paychecks, but they might be able to put themselves through a shower once in a while.",
    available: false,
    owned: false,
    aquisitionCost: 0,
    acquisitionCurrency: "money",
    intervalCost: 8,
    count: 0,
    capacity: 6,
    value: 9,
    repurchaseable: true,
    condition: (state) => {
      return state.money >= 2000 ? true : false;
    },
    morality: 0
  },

  /* Containers */
  {
    name: "Small Box.",
    type: "shippingContainer",
    lockedDescription: "Small Po- err BOX. Small Box. That's what I said.",
    unlockedDescription: "A rusty iron swor- wait a second...",
    available: false,
    owned: true,
    aquisitionCost: 0,
    acquisitionCurrency: "You found this on a dead guard.",
    intervalCost: 1,
    count: 0,
    capacity: 10,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.goodDirt >= 20 ? true : false;
    },
    morality: 0
  },
  {
    name: "Bucket",
    type: "shippingContainer",
    lockedDescription: "In order to sell dirt effectively you need to be able to transport it. Arrange for a bucket supplier.",
    unlockedDescription: "Buckets can hold 20 liters of dirt",
    available: false,
    owned: false,
    aquisitionCost: 50,
    acquisitionCurrency: "money",
    intervalCost: 2,
    count: 0,
    capacity: 25,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.maxGoodDirt >= 100 ? true : false;
    },
    morality: 0
  },
  {
    name: "Coffin",
    type: "shippingContainer",
    lockedDescription: "Need to spice up your dirt shipping business? Consider shipping in converted luxury coffins, you freaky thing.",
    unlockedDescription: "For your fabulously wealthy and financially irresponsible customers",
    available: false,
    owned: false,
    aquisitionCost: 10000,
    acquisitionCurrency: "money",
    intervalCost: 50,
    count: 0,
    capacity: 800,
    value: 1000,
    repurchaseable: false,
    condition: (state) => {
      return state.goodDirt >= 200 ? true : false;
    },
    morality: -25
  },
  {
    name: "Quite A Large Box",
    type: "shippingContainer",
    lockedDescription: "",
    unlockedDescription: "",
    available: false,
    owned: false,
    aquisitionCost: 5000,
    acquisitionCurrency: "money",
    intervalCost: 75,
    count: 0,
    capacity: 1000,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.goodDirt >= 500 ? true : false;
    },
    morality: 0
  },
  {
    name: "Shipping Crate",
    type: "shippingContainer",
    lockedDescription: "",
    unlockedDescription: "",
    available: false,
    owned: false,
    aquisitionCost: 30000,
    acquisitionCurrency: "money",
    intervalCost: 150,
    count: 0,
    capacity: 7500,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.goodDirt >= 10000 ? true : false;
    },
    morality: 0
  },
  {
    name: "20ft Ventilated Shipping Container",
    type: "shippingContainer",
    lockedDescription: "Set up a large scale shipping contract. You'll be using the big kid stuff now. Good on ye, m8.",
    unlockedDescription: "",
    available: false,
    owned: false,
    aquisitionCost: 90000,
    acquisitionCurrency: "money",
    intervalCost: 2300,
    count: 0,
    capacity: 33200,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.goodDirt >= 50000 ? true : false;
    },
    morality: 0
  },

  /* Property Expansions */
  {
    name: "The Vacant Lot Behind Your House",
    type: "propertyExpansion",
    lockedDescription: "Time to expand. Westard! Kindly leave your smallpox at home, though.",
    unlockedDescription: "You now own the grubby lot behind your house. You can make more dirt!",
    available: false,
    owned: false,
    aquisitionCost: 500,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 100,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.money >= 200 ? true : false;
    },
    morality: 5
  },
  {
    name: "Your Jerk Neighbor's House",
    type: "propertyExpansion",
    lockedDescription: "Reginald was always rubbing his success in your face. Exploit eminent domain law by working with the government so you can buy that pompous twit's house out from under him.",
    unlockedDescription: "You payed well below market value to force a neighbor you don't like to move his family into a motel for a few months. I call that a win.",
    available: false,
    owned: false,
    aquisitionCost: 2000,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 300,
    value: 0,
    repurchaseable: false,
    condition: (state) => {
      return state.money >= 10000 ? true : false;
    },
    morality: -10
  },
  {
    name: "Miscellaneous Lots",
    type: "propertyExpansion",
    lockedDescription: "Nobody is using these for anything productive. This seems a golden opportunity for an enterprising dirt farmer!",
    unlockedDescription: "More dirt!",
    available: false,
    owned: false,
    aquisitionCost: 3000,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 200,
    value: 0,
    repurchaseable: true,
    condition: (state) => {
      return state.money >= 5000 ? true : false;
    },
    morality: 5
  },
  {
    name: "Great Big Tract of Land",
    type: "propertyExpansion",
    lockedDescription: "Previously a family owned farm, now a totally purchaseable property.",
    unlockedDescription: "Land reclaimed by nature has now been reclaimed by you. Good job, Dirt Farmer.",
    available: false,
    owned: false,
    aquisitionCost: 3000,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 750,
    value: 0,
    repurchaseable: true,
    condition: (state) => {
      return state.dirt >= 5000 ? true : false;
    },
    morality: 35
  },
  {
    name: "Regional Supplier Facility",
    type: "propertyExpansion",
    lockedDescription: "Set up shop in a new area, ship dirt smaller distances, think about the ramifications later!",
    unlockedDescription: "Your shipping costs have been reduced, but your rent has become substantial.",
    available: false,
    owned: false,
    aquisitionCost: 300000,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 10000,
    value: 0,
    repurchaseable: true,
    condition: (state) => {
      return state.dirt >= 20000 ? true : false;
    },
    morality: -20
  },

  /* Dirt Quality Upgrades */
  {
    name: "Neighborhood Compost Initiative",
    type: "dirtQuality",
    lockedDescription: "Convince your neighbors to throw their rotten food on your lawn.",
    unlockedDescription: "Either your neighbors aren't fond of you or they got sick of dumping rotten food on their own lawns.",
    available: false,
    owned: false,
    aquisitionCost: 0,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 0,
    value: 1,
    repurchaseable: false,
    condition: (state) => {
      return state.morality < 0 ? true : false;
    },
    morality: 0
  },
  {
    name: "Cadaviar",
    type: "dirtQuality",
    lockedDescription: "Social norms haven't shifted on the subject of recycling dead bodies, but you won't let that stop you.",
    unlockedDescription: "It wasn't your friend in the wood chipper, but it was probably somebody's friend.",
    available: false,
    owned: false,
    aquisitionCost: 0,
    acquisitionCurrency: "money",
    intervalCost: 0,
    count: 0,
    capacity: 0,
    value: 2,
    repurchaseable: false,
    condition: (state) => {
      return state.morality < 0 ? true : false;
    },
    morality: 50
  }
];
/* This is the object template. Obey and ye shall be rewarded in the pirate afterlife. Yarr.
{
  name: "",
  type: "",
  lockedDescription: "",
  unlockedDescription: "",
  available: false,
  owned: false,
  aquisitionCost: ,
  acquisitionCurrency: "",
  intervalCost: ,
  count: ,
  capacity: ,
  value: ,
  repurchaseable: ,
  condition: (state) => {
    return state. >= 0 ? true : false;
  },
  morality: 0
}
*/
export default upgradeList;
