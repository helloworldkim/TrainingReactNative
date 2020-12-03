/* eslint-disable prettier/prettier */
/**
 * 해당주소의 아이콘들을 가져와서 사용함
  Icons from: https://github.com/cjdowner/cryptocurrency-icons/tree/master/32%402x/icon
*/

// export const getCoinIconUri = (coinName) => {
export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':     //BTC
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';

        case 'Ethereum':    //ETH
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';

        case 'XRP': //XRP
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

        case 'EOS': //EOS
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';

        case 'Bitcoin Cash':    //BCH
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';

        case 'Litecoin':    //LTC
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

        case 'Tether':  //USDT
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/usdt@2x.png?raw=true';
        case 'Chainlink':   //LINK
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/link@2x.png?raw=true';
        case 'Cardano': //ADA
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ada@2x.png?raw=true';
        case 'Polkadot':    //DOT
            return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/dot@2x.png?raw=true';
        default:    //나머지
            return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    }

}
