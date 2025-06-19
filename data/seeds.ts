const seeds = {
  "Couch Potatoes": {
    name: "Couch Potatoes",
    modifiers: {
      "Tropical Garden Gnome": 25,
      Pixie: 20,
      "Sandwich Station": 20,
      "Red Barn Farm": 15,
      "King Parsley": 10,
      Litter: 10,
    },
    seedlingToYoungTime: { hours: 13, minutes: 0 },
    youngToMatureTime: { hours: 29, minutes: 0 },
    matureToElderTime: { hours: 216, minutes: 0 },
  },
  "Evil Magma Peas": {
    name: "Evil Magma Peas",
    modifiers: {
      "Djembe Drum": 25,
      "Tropical Garden Gnome": 25,
      "Boom Shroom": 20,
      "Egg Basket": 20,
      Pixie: 20,
      "Red Barn Farm": 15,
    },
    seedlingToYoungTime: { hours: 15, minutes: 0 },
    youngToMatureTime: { hours: 32, minutes: 15 },
    matureToElderTime: { hours: 240, minutes: 0 },
  },
};

export default seeds;
