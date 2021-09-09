import axios from "axios";

export const getCrypto = (crypto, currency) => {
    return axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`)
        .then(result => {
            switch (currency) {
                case "ars":
                    return result.data.market_data.current_price.ars
                case "usd":
                    return result.data.market_data.current_price.usd
                default:
                    return result.data.market_data.current_price.usd
            }
        })
        .catch(err => { console.error(err) })
}