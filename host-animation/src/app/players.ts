export interface Player {
  name: string;
  games: number;
  points: number;
  fieldGoalPercentage: number;
  threePointPercentage: number;
  imageName: string;
}

export const players = [
  {
    name: 'LeBron James',
    games: 1421,
    points: 38652,
    fieldGoalPercentage: 0.505,
    threePointPercentage: 0.345,
    imageName: 'lebron-james'
  },
  {
    name: 'Kareem Abdul-Jabbar',
    games: 1560,
    points: 38387,
    fieldGoalPercentage: 0.559,
    threePointPercentage: 0.056,
    imageName: 'kareem-abdul-jabbar'
  },
  {
    name: 'Karl Malone',
    games: 1476,
    points: 36928,
    fieldGoalPercentage: 0.516,
    threePointPercentage: 0.274,
    imageName: 'karl-malone'
  },
  {
    name: 'Kobe Bryant',
    games: 1346,
    points: 33643,
    fieldGoalPercentage: 0.447,
    threePointPercentage: 0.329,
    imageName: 'kobe-bryant'
  },
  {
    name: 'Michael Jordan',
    games: 1072,
    points: 32292,
    fieldGoalPercentage: 0.497,
    threePointPercentage: 0.327,
    imageName: 'michael-jordan'
  },
  {
    name: 'Dirk Nowitzki',
    games: 1522,
    points: 31560,
    fieldGoalPercentage: 0.471,
    threePointPercentage: 0.38,
    imageName: 'dirk-nowitzki'
  },
  {
    name: 'Wilt Chamberlain',
    games: 1045,
    points: 31419,
    fieldGoalPercentage: 0.54,
    threePointPercentage: 0,
    imageName: 'wilt-chamberlain'
  },
  {
    name: 'Shaquille O\'Neal',
    games: 1207,
    points: 28596,
    fieldGoalPercentage: 0.582,
    threePointPercentage: 0.045,
    imageName: 'shaquille-oneal'
  },
  {
    name: 'Carmelo Anthony',
    games: 1260,
    points: 28289,
    fieldGoalPercentage: 0.447,
    threePointPercentage: 0.355,
    imageName: 'carmelo-anthony'
  },
  {
    name: 'Moses Malone',
    games: 1329,
    points: 27409,
    fieldGoalPercentage: 0.491,
    threePointPercentage: 0.10,
    imageName: 'moses-malone'
  },
  {
    name: 'Elvin Hayes',
    games: 1303,
    points: 27313,
    fieldGoalPercentage: 0.452,
    threePointPercentage: 0.147,
    imageName: 'elvin-hayes'
  }
]
