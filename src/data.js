const sales = [
  { day: "01-01", value: 5500 },
  { day: "01-02", value: 7955 },
  { day: "01-03", value: 23565 },
  { day: "01-04", value: 4544 },
  { day: "01-05", value: 600 },
  { day: "01-06", value: 3000 },
  { day: "01-07", value: 8000 }
];

const categories = [
  { category: "Tents", value: 30 },
  { category: "Sleeping Bags", value: 20 },
  { category: "Kitchen & Hydration", value: 15 },
  { category: "Clothing", value: 15 },
  { category: "Footwear", value: 10 },
  { category: "Tools & Lighting", value: 10 }
];

const reviews = [
  {
    id: "111",
    product: "Tent",
    text:
      "Amazing tent... we were right beside a lake, it was windy, but it was one of the most peaceful nights of my life.",
    stars: 4
  },
  {
    id: "222",
    product: "Hiking Shoes",
    text:
      "Not great... leaked a ton. I stepped in a very small puddle and for the rest of my trip my socks were soaked!",
    stars: 2
  },
  {
    id: "333",
    product: "Stove",
    text:
      "Made coffee in the morning. You would not beleive how great it is to drink a coffee while camping.",
    stars: 4
  }
];

const customers = [
  { id: "111", name: "Amy Alpine" },
  { id: "222", name: "Billy Bob" },
  { id: "333", name: "Carly Crew" },
  { id: "444", name: "Dan Deckers" },
  { id: "555", name: "Egbert Egg" }
];

const deliveries = [
  { id: "111", name: "Water Purifier" },
  { id: "222", name: "Winter Gloves" },
  { id: "333", name: "Flashlight" },
  { id: "444", name: "Propane Tank" },
  { id: "555", name: "Sleeping Bag" }
];

const supports = [
  { id: "111", name: "Flanders Finster" },
  { id: "222", name: "Greg Golf" },
  { id: "333", name: "Hailey Hello" },
  { id: "444", name: "Iggers Island" },
  { id: "555", name: "Jack Jimbo" }
];

const states = [
  ["US-CA", 3557],
  ["US-NY", 3061],
  ["US-PA", 2644],
  ["US-IL", 1803],
  ["US-FL", 1590],
  ["US-NJ", 1714],
  ["US-CO", 1159]
];

const colors = [
  "#E57373",
  "#9575CD",
  "#64B5F6",
  "#4DB6AC",
  "#FFF176",
  "#FF8A65",
  "#90A4AE"
];

export {
  sales,
  categories,
  reviews,
  customers,
  deliveries,
  supports,
  states,
  colors
};
