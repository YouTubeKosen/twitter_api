require('dotenv').config()
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

function Tweet(content) {
    client.post('statuses/update', {status: content}, function(error, tweet, response) {
      if (!error) {
        console.log(`\"${content}\" tweeted.`);
      } else {
        console.log(error);
      }
    });
};

Tweet("Tweet test5 from Ubuntu.");