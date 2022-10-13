require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars');
const axios = require('axios');

// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');







app.get('/', async (req, res) => {
    res.render('home');
});


// ************************** //
// Location search endpoint  //
// Params: location           //
// ************************** //
app.post('/api/search', async (req, res) => {
    try{
        const weatherRes = await axios.get(`${process.env.ACCUWEATHER_URL}/locations/v1/cities/autocomplete?apikey=${process.env.ACCUWEATHER_KEY}&q=${req.body.location}`)
        res.json({message: 'success', data: weatherRes.data});
    }catch(err){
        res.status(400).json({message: err.response.data.Message});
    }
})
// ************************** //
// Weather Forecast endpoint  //
// Params: location           //
//         locationName       //
//         locationCountry    //
// ************************** //
app.post('/api/forecast', async (req, res) => {
    try{
        const weatherRes = await axios.get(`${process.env.ACCUWEATHER_URL}/forecasts/v1/daily/5day/${req.body.location}?apikey=${process.env.ACCUWEATHER_KEY}&details=true`)
        var newResult = weatherRes.data.DailyForecasts.splice(0, 3).map(item => {
            const day = new Date(item.Date).toLocaleString('en-us', {weekday: 'long'});
            const month = new Date(item.Date).toLocaleString('en-us', {month: 'long'});
            const dateNum = new Date(item.Date).getDate();
    
            const DayIconURL = `https://developer.accuweather.com/sites/default/files/${item.Day.Icon.toString().padStart(2, '0')}-s.png`;
            const NightIconURL = `https://developer.accuweather.com/sites/default/files/${item.Night.Icon.toString().padStart(2, '0')}-s.png`;
            return {
                ...item,
                "Country": req.body.locationCountry,
                "Location": req.body.locationName,
                "ParsedDate": {
                    "Day": day,
                    "Month": month,
                    "Date": dateNum
                },
                "Day": {
                    ...item.Day,
                    "IconURL": DayIconURL
                },
                "Night": {
                    ...item.Night,
                    "IconURL": NightIconURL
                }
    
            }
        });
        res.json({message: 'success', data: newResult});
    }catch(err){
        console.log(err)
        res.status(400).json({message: err.response.data.Message});
    }
})



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port: 3000');
})