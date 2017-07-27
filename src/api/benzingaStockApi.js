import axios from 'axios';

const BENZINGA_STOCK_URL = 'http://careers-data.benzinga.com/';


let Api = {
    getStock: function (stock){
        let encodedStock = encodeURIComponent(stock);
        let requestUrl = `${BENZINGA_STOCK_URL}rest/richquoteDelayed?symbols=${encodedStock}`;

        return axios.get(requestUrl).then((data) => {
            return data.data[stock]
        }).catch((error) => {
            console.log("Api call error");
            alert(error.message);
        });
    }
}

export default Api
