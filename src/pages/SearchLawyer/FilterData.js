export const filters = [
  {
    id: "ability",
    name: "Ability",
    options: [
      { value: "online_now", label: "Online Now" },
      { value: "available_in_next_2h", label: "Available in next 2 hours" },
      { value: "available_today", label: "Available today" },
      { value: "female_lawyers", label: "Female lawyers only" },
    ],
  },
];

export const singleFilter = [
  {
    id: "sort",
    name: "Sort by",
    options: [
      { value: "relevance", label: "Relevance" },
      { value: "popularity", label: "Popularity" },
      { value: "low_to_high", label: "Fees: low to high" },
      { value: "high_to_low", label: "Fees: high to low" },
      { value: "rating", label: "Rating" },
      { value: "experience", label: "Experience" },
      { value: "specialist_first", label: "Specialist First" },
      { value: "ranking", label: "Ranking" },
    ],
  },
];
