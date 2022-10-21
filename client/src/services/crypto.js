import Bitcoin from '../assets/images/bitcoin.png';
import Ethereum from '../assets/images/ethereum.png';
import Chainlink from '../assets/images/chainlink.png';

export const getCurrencyIcon = (symbol) => {
  switch (symbol) {
    case 'bitcoin':
      return Bitcoin;
    case 'ethereum':
      return Ethereum;
    case 'chainlink':
      return Chainlink;
    default:
      return Bitcoin;
  }
};
