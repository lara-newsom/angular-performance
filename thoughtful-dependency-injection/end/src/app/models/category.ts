export enum Category {
  GLASSES = 'glasses',
  HATS = 'hats',
  CLOTHES = 'clothes',
  HORSES = 'horses',
  PIGS = 'pigs',
  BATS = 'bats',
  FISH = 'fish',
  Food = 'Food',
  Toys = 'Toys',
  Accessories = 'Accessories',
  Grooming = 'Grooming',
  HAMSTERS = 'hamsters',
  RANDOM = 'random',
  FURNITURE = 'furniture',
  PANTS = 'pants',
  FRUIT = 'fruit',
  OTHER = 'other',
  JUNK = 'junk',
  ALL_OF_THE_ABOVE = 'all of the above',
  TACOS = 'tacos',
  HOME_GOODS = 'home goods',
  SOMETHING_ELSE_HERE = 'something else here',
  UNKNOWN_NOT_VERY_COOL = 'unknown not very cool',
  UNKNOWN_BUT_SUPER_COOL = 'unknown but super cool',
  VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_ENTRY = 'very very very very very very very long entry',
  VERY_VERY_VERY_VERY_VERY_VERY_LONG_ENTRY = 'very very very very very very long entry',
  VERY_VERY_VERY_VERY_VERY_LONG_ENTRY = 'very very very very very long entry',
  VERY_VERY_VERY_VERY_LONG_ENTRY = 'very very very very long entry',
  VERY_VERY_VERY_LONG_ENTRY = 'very very very long entry',
  VERY_VERY_LONG_ENTRY = 'very very long entry',
  VERY_LONG_ENTRY = 'very long entry',
  LONG_ENTRY = 'long entry',
  ALL = 'all'
}

export interface CategoryLink {
  category: Category;
  description: string;
  firstProduct?: string;
}

export const LINKS: CategoryLink[] = [
  {
    category: Category.HATS,
    description: 'Animals in Hats',
    firstProduct: 'bird-in-straw-hat'
  },
  {
    category: Category.GLASSES,
    description: 'Animals in Glasses',
    firstProduct: 'cat-glasses-1'
  },
  {
    category: Category.CLOTHES,
    description: 'Animals in Clothes',
    firstProduct: 'banana-puppy'
  },
  {
    category: Category.OTHER,
    description: 'Animals Accessorizing',
    firstProduct: 'bowtie-dog'
  },
  {
    category: Category.FURNITURE,
    description: 'Animals Lounging',
    firstProduct: 'ACC011'
  },
  {
    category: Category.Toys,
    description: 'Animals Playing',
    firstProduct: 'ACC002'
  },
  {
    category: Category.Accessories,
    description: 'Animals Living Large',
    firstProduct: 'ACC001'
  },
  {
    category: Category.Food,
    description: 'Animals Eating NomNoms',
    firstProduct: 'ACC026'
  },
  {
    category: Category.Grooming,
    description: 'Animals Getting Pretty',
    firstProduct: 'ACC016'
  },
  {
    category: Category.ALL,
    description: 'Animals Doing it All',
    firstProduct: 'banana-puppy'
  },
]
