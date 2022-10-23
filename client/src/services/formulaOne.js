import Bahrain from '../assets/images/bahrain.png';
import Baku from '../assets/images/baku.png';
import Brazil from '../assets/images/brazil.png';
import Canada from '../assets/images/canada.png';
import Catalunya from '../assets/images/catalunya.png';
import China from '../assets/images/china.png';
import Cota from '../assets/images/cota.png';
import Ferrari from '../assets/images/ferrari.png';
import MarinaBay from '../assets/images/marina-bay.png';
import Melbourne from '../assets/images/melbourne.png';
import Mexico from '../assets/images/mexico.png';
import Miami from '../assets/images/miami.png';
import Monaco from '../assets/images/monaco.png';
import Monza from '../assets/images/monza.png';
import Qatar from '../assets/images/qatar.png';
import RedBullRing from '../assets/images/red-bull-ring.png';
import Saudi from '../assets/images/saudi.png';
import Silverstone from '../assets/images/silverstone.png';
import Spa from '../assets/images/spa.png';
import Suzuka from '../assets/images/suzuka.png';
import YasMarina from '../assets/images/yas-marina.png';
import Zandvoort from '../assets/images/zandvoort.png';

export const races = [
  {
    id: 1,
    season: 2022,
    round: 1,
    track: 'Bahrain International Circuit',
    country: 'Bahrain',
    circuitDiagram: Bahrain,
    flag: '🇧🇭',
    date: '20220320T230000+0800'
  },
  {
    id: 2,
    season: 2022,
    round: 2,
    track: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    circuitDiagram: Saudi,
    flag: '🇸🇦',
    date: '20220328T010000+0800'
  },
  {
    id: 3,
    season: 2022,
    round: 3,
    track: 'Melbourne Grand Prix Circuit',
    country: 'Australia',
    circuitDiagram: Melbourne,
    flag: '🇦🇺',
    date: '20220410T130000+0800'
  },
  {
    id: 4,
    season: 2022,
    round: 4,
    track: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    circuitDiagram: Ferrari,
    flag: '🇮🇹',
    date: '20220424T210000+0800'
  },
  {
    id: 5,
    season: 2022,
    round: 5,
    track: 'Miami International Autodrome',
    country: 'USA',
    circuitDiagram: Miami,
    flag: '🇺🇸',
    date: '20220509T033000+0800'
  },
  {
    id: 6,
    season: 2022,
    round: 6,
    track: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    circuitDiagram: Catalunya,
    flag: '🇪🇸',
    date: '20220522T210000+0800'
  },
  {
    id: 7,
    season: 2022,
    round: 7,
    track: 'Circuit de Monaco',
    country: 'Monaco',
    circuitDiagram: Monaco,
    flag: '🇲🇨',
    date: '20220529T210000+0800'
  },
  {
    id: 8,
    season: 2022,
    round: 8,
    track: 'Baku City Circuit',
    country: 'Azerbaijan',
    circuitDiagram: Baku,
    flag: '🇦🇿',
    date: '20220612T190000+0800'
  },
  {
    id: 9,
    season: 2022,
    round: 9,
    track: 'Circuit Gilles Villeneuve',
    country: 'Canada',
    circuitDiagram: Canada,
    flag: '🇨🇦',
    date: '20220620T020000+0800'
  },
  {
    id: 10,
    season: 2022,
    round: 10,
    track: 'Silverstone Circuit',
    country: 'Great Britain',
    circuitDiagram: Silverstone,
    flag: '🇬🇧',
    date: '20220703T220000+0800'
  },
  {
    id: 11,
    season: 2022,
    round: 11,
    track: 'Red Bull Ring',
    country: 'Austria',
    circuitDiagram: RedBullRing,
    flag: '🇦🇹',
    date: '20220710T210000+0800'
  },
  {
    id: 12,
    season: 2022,
    round: 12,
    track: 'Circuit Paul Ricard',
    country: 'France',
    flag: '🇫🇷',
    date: '20220724T210000+0800'
  },
  {
    id: 13,
    season: 2022,
    round: 13,
    track: 'Hungaroring',
    country: 'Hungary',
    flag: '🇭🇺',
    date: '20220731T210000+0800'
  },
  {
    id: 14,
    season: 2022,
    round: 14,
    track: 'Spa-Francorchamps',
    country: 'Belgium',
    circuitDiagram: Spa,
    flag: '🇧🇪',
    date: '20220828T210000+0800'
  },
  {
    id: 15,
    season: 2022,
    round: 15,
    track: 'Circuit Zandvoort',
    country: 'Netherlands',
    circuitDiagram: Zandvoort,
    flag: '🇳🇱',
    date: '20220904T210000+0800'
  },
  {
    id: 16,
    season: 2022,
    round: 16,
    track: 'Autodromo Nazionale Monza',
    country: 'Italy',
    circuitDiagram: Monza,
    flag: '🇮🇹',
    date: '20220911T210000+0800'
  },
  {
    id: 17,
    season: 2022,
    round: 17,
    track: 'Marina Bay Street Circuit',
    country: 'Singapore',
    circuitDiagram: MarinaBay,
    flag: '🇸🇬',
    date: '20221002T200000+0800'
  },
  {
    id: 18,
    season: 2022,
    round: 18,
    track: 'Suzuka Circuit',
    country: 'Japan',
    circuitDiagram: Suzuka,
    flag: '🇯🇵',
    date: '20221009T130000+0800'
  },
  {
    id: 19,
    season: 2022,
    round: 19,
    track: 'Circuit of the Americas',
    country: 'USA',
    circuitDiagram: Cota,
    flag: '🇺🇸',
    date: '20221024T030000+0800'
  },
  {
    id: 20,
    season: 2022,
    round: 20,
    track: 'Autódromo Hermanos Rodríguez',
    country: 'Mexico',
    circuitDiagram: Mexico,
    flag: '🇲🇽',
    date: '20221031T040000+0800'
  },
  {
    id: 21,
    season: 2022,
    round: 21,
    track: 'Autódromo José Carlos Pace',
    country: 'Brazil',
    circuitDiagram: Brazil,
    flag: '🇧🇷',
    date: '20221114T020000+0800'
  },
  {
    id: 22,
    season: 2022,
    round: 22,
    track: 'Yas Marina Circuit',
    country: 'Abu Dhabi',
    circuitDiagram: YasMarina,
    flag: '🇦🇪',
    date: '20221120T210000+0800'
  },
  {
    id: 23,
    season: 2023,
    round: 1,
    track: 'Bahrain International Circuit',
    country: 'Bahrain',
    circuitDiagram: Bahrain,
    flag: '🇧🇭',
    date: '20230305T230000+0800'
  },
  {
    id: 24,
    season: 2023,
    round: 2,
    track: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    circuitDiagram: Saudi,
    flag: '🇸🇦',
    date: '20230319T010000+0800'
  },
  {
    id: 25,
    season: 2023,
    round: 3,
    track: 'Melbourne Grand Prix Circuit',
    country: 'Australia',
    circuitDiagram: Melbourne,
    flag: '🇦🇺',
    date: '20230402T130000+0800'
  },
  {
    id: 26,
    season: 2023,
    round: 4,
    track: 'Shanghai International Circuit',
    country: 'China',
    circuitDiagram: China,
    flag: '🇨🇳',
    date: '20230416T130000+0800'
  },
  {
    id: 27,
    season: 2023,
    round: 5,
    track: 'Baku City Circuit',
    country: 'Azerbaijan',
    circuitDiagram: Baku,
    flag: '🇦🇿',
    date: '20230430T190000+0800'
  },
  {
    id: 28,
    season: 2023,
    round: 6,
    track: 'Miami International Autodrome',
    country: 'USA',
    circuitDiagram: Miami,
    flag: '🇺🇸',
    date: '20230507T033000+0800'
  },
  {
    id: 29,
    season: 2023,
    round: 7,
    track: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    circuitDiagram: Ferrari,
    flag: '🇮🇹',
    date: '20230421T210000+0800'
  },
  {
    id: 30,
    season: 2023,
    round: 8,
    track: 'Circuit de Monaco',
    country: 'Monaco',
    circuitDiagram: Monaco,
    flag: '🇲🇨',
    date: '20230528T210000+0800'
  },
  {
    id: 31,
    season: 2023,
    round: 9,
    track: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    circuitDiagram: Catalunya,
    flag: '🇪🇸',
    date: '20230604T210000+0800'
  },
  {
    id: 32,
    season: 2023,
    round: 10,
    track: 'Circuit Gilles Villeneuve',
    country: 'Canada',
    circuitDiagram: Canada,
    flag: '🇨🇦',
    date: '20230618T020000+0800'
  },
  {
    id: 33,
    season: 2023,
    round: 11,
    track: 'Red Bull Ring',
    country: 'Austria',
    circuitDiagram: RedBullRing,
    flag: '🇦🇹',
    date: '20230702T210000+0800'
  },
  {
    id: 34,
    season: 2023,
    round: 12,
    track: 'Silverstone Circuit',
    country: 'Great Britain',
    circuitDiagram: Silverstone,
    flag: '🇬🇧',
    date: '20230709T220000+0800'
  },
  {
    id: 35,
    season: 2023,
    round: 13,
    track: 'Hungaroring',
    country: 'Hungary',
    flag: '🇭🇺',
    date: '20230723T210000+0800'
  },
  {
    id: 36,
    season: 2023,
    round: 14,
    track: 'Spa-Francorchamps',
    country: 'Belgium',
    circuitDiagram: Spa,
    flag: '🇧🇪',
    date: '20230730T210000+0800'
  },
  {
    id: 37,
    season: 2023,
    round: 15,
    track: 'Circuit Zandvoort',
    country: 'Netherlands',
    circuitDiagram: Zandvoort,
    flag: '🇳🇱',
    date: '20230827T210000+0800'
  },
  {
    id: 38,
    season: 2023,
    round: 16,
    track: 'Autodromo Nazionale Monza',
    country: 'Italy',
    circuitDiagram: Monza,
    flag: '🇮🇹',
    date: '20230903T210000+0800'
  },
  {
    id: 39,
    season: 2023,
    round: 17,
    track: 'Marina Bay Street Circuit',
    country: 'Singapore',
    circuitDiagram: MarinaBay,
    flag: '🇸🇬',
    date: '20230917T200000+0800'
  },
  {
    id: 40,
    season: 2023,
    round: 18,
    track: 'Suzuka Circuit',
    country: 'Japan',
    circuitDiagram: Suzuka,
    flag: '🇯🇵',
    date: '20230924T130000+0800'
  },
  {
    id: 41,
    season: 2023,
    round: 19,
    track: 'Lusail Circuit',
    country: 'Qatar',
    circuitDiagram: Qatar,
    flag: '🇶🇦',
    date: '20231008T130000+0800'
  },
  {
    id: 42,
    season: 2023,
    round: 20,
    track: 'Circuit of the Americas',
    country: 'USA',
    circuitDiagram: Cota,
    flag: '🇺🇸',
    date: '20231022T030000+0800'
  },
  {
    id: 43,
    season: 2023,
    round: 21,
    track: 'Autódromo Hermanos Rodríguez',
    country: 'Mexico',
    circuitDiagram: Mexico,
    flag: '🇲🇽',
    date: '20231029T040000+0800'
  },
  {
    id: 44,
    season: 2023,
    round: 22,
    track: 'Autódromo José Carlos Pace',
    country: 'Brazil',
    circuitDiagram: Brazil,
    flag: '🇧🇷',
    date: '20231105T020000+0800'
  },
  {
    id: 45,
    season: 2023,
    round: 23,
    track: 'Las Vegas Street Circuit',
    country: 'USA',
    circuitDiagram: Cota,
    flag: '🇺🇸',
    date: '20231118T020000+0800'
  },
  {
    id: 45,
    season: 2023,
    round: 24,
    track: 'Yas Marina Circuit',
    country: 'Abu Dhabi',
    circuitDiagram: YasMarina,
    flag: '🇦🇪',
    date: '20231126T210000+0800'
  }
];
