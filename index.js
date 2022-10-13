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
    // const testweatherres = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/49785?apikey=3KwVF8mqk9F7QZevuaCU7f4eWiNsiDWD&details=true&metric=true')
    // console.log(testweatherres.data)
    const date = "2022-10-15T07:00:00+07:00";
    // get Day Word of the date
    const day = new Date(date).toLocaleString('en-us', {weekday: 'long'});
    // const day = new Date(date).getDay();
    // get Month Word of the date
    const month = new Date(date).toLocaleString('en-us', {month: 'long'});
    // const month = new Date(date).getMonth();
    // get Date of the date
    const dateNum = new Date(date).getDate();

    const newtestdata = {
        "Date": "2022-10-13T07:00:00+07:00",
        "ParsedDate": {
            "Day": day,
            "Month": month,
            "Date": dateNum
        },
        "EpochDate": 1665619200,
        "Sun": {
          "Rise": "2022-10-13T05:50:00+07:00",
          "EpochRise": 1665615000,
          "Set": "2022-10-13T17:44:00+07:00",
          "EpochSet": 1665657840
        },
        "Moon": {
          "Rise": "2022-10-13T20:20:00+07:00",
          "EpochRise": 1665667200,
          "Set": "2022-10-14T09:27:00+07:00",
          "EpochSet": 1665714420,
          "Phase": "WaningGibbous",
          "Age": 17
        },
        "Temperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Pleasant"
          },
          "Maximum": {
            "Value": 97,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Hot"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Pleasant"
          },
          "Maximum": {
            "Value": 93,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Hot"
          }
        },
        "HoursOfSun": 4,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 16,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 9,
            "Category": "Very High",
            "CategoryValue": 4
          }
        ],
        "Day": {
          "Icon": 16,
          "IconUrl": "https://developer.accuweather.com/sites/default/files/16-s.png",
          "IconPhrase": "Mostly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "A thunderstorm or two",
          "LongPhrase": "Some sun, then turning cloudy with a thunderstorm or two",
          "PrecipitationProbability": 70,
          "ThunderstormProbability": 42,
          "RainProbability": 70,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 8.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 6,
              "Localized": "N",
              "English": "N"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.4,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 10,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0.06,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.06,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 1.5,
          "HoursOfRain": 1.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 72,
          "Evapotranspiration": {
            "Value": 0.12,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 3715.6,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 15,
          "IconUrl": "https://developer.accuweather.com/sites/default/files/15-s.png",
          "IconPhrase": "Thunderstorms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "A t-storm around this evening",
          "LongPhrase": "A thunderstorm in spots this evening; otherwise, plenty of clouds",
          "PrecipitationProbability": 40,
          "ThunderstormProbability": 24,
          "RainProbability": 40,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 333,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 15,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 359,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 100,
          "Evapotranspiration": {
            "Value": 0.01,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 14.5,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/kh/phnom-penh/49785/daily-weather-forecast/49785?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/kh/phnom-penh/49785/daily-weather-forecast/49785?day=1&lang=en-us"
      }
    res.render('home', newtestdata);
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
        // console.log(weatherRes.data.DailyForecasts)
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