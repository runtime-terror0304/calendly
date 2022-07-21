const express = require('express');
const app = express();
const path = require('path');
const axios = require("axios").default;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/user', async (req, res) => {
    

    const  options = {
        method: 'GET',
        url: 'https://calendly.com/api/v1/users/me',
        headers: {
          'Content-Type': 'application/json',
          'X-TOKEN': 'NTSIEPDMPPFW4SNYD2YEOPHEPCBVW7JO'
        }
    };

    const response = await axios.request(options);

    const dat = response.data.data;

    console.log(dat);

    res.render('user', {dat});
})

app.listen(3000, () => {
    console.log('listening to port 3000...');
})


