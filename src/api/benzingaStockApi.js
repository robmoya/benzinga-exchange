import request from 'superagent';

const BENZINGA_STOCK_URL = 'http://careers-data.benzinga.com/';


let Api = {
    getStock: function (stock){
        let encodedStock = encodeURIComponent(stock);
        let requestUrl = `${BENZINGA_STOCK_URL}rest/richquoteDelayed?symbols=${encodedStock}`;

        return request.get(requestUrl)
        .set('Access-Control-Allow-Origin', '*')
        .type('json')
        .accept('json')
        .then((data) => {
            console.log(data);
            return data.body[stock];
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default Api
