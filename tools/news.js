const request = require("request");

const news = (callback) => {

    const newUrl = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=58e4d227704442b09374b6f78de780af'

    request({ url: newUrl, json: true }, (error, response) => {

        if (error) {
            callback("error occurred", undefined);
        }
        else if (response.body.message) {
            callback(response.body.message, undefined);
        }
        else {
            callback(undefined, (response.body.articles))
        }

    })
}

module.exports = news;