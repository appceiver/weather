import { dirname, join } from 'path'; // to work with file and directory paths
import { fileURLToPath } from 'url'; // to convert module URL to file path
import express from 'express'; // to create an Express application
import axios from 'axios'; // to make HTTP requests
import 'dotenv/config'; // to load environment variables from the .env file


const app = express(); // create an Express application
const PORT = process.env.PORT || 10000; // use the port from environment variable or default to 10000
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'; // current weather data
const API_KEY = process.env.OPENWEATHER_API_KEY; // the API key is saved in the .env file


const __filename = fileURLToPath(import.meta.url); // get the current file's URL and convert it to a path
const __dirname = dirname(__filename); // get the directory name from the file path

// specify the location of the template files
app.set('view engine', 'ejs'); // set 'ejs' as the 'view engine'
app.set('views', join(__dirname, 'views')); // this tells Express where the 'views' directory is located

// specify the location of the static files
app.use(express.static(join(__dirname, 'public'))); // this makes files in 'public' accessible to the browser

// to parse URL-encoded bodies sent by HTML forms
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
	res.render('index.ejs', { weather: null, error: null });
});


app.post('/weather', async (req, res) => {

	const city = req.body.city.replace(/\s+/g, ' ').trim(); // get the city name from the form submission and trim whitespace

	try {
		const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // make a GET request to the API
		const result = response.data; // extract the 'data' object from the 'response' object
		
		const weather = {
			city: result.name,
			country: result.sys.country,
			temp: Math.round(result.main.temp),
			feels: Math.round(result.main.feels_like),
			icon: result.weather[0].icon,
			description: result.weather[0].main,
			high: Math.round(result.main.temp_max),
			low: Math.round(result.main.temp_min),
			humidity: result.main.humidity,
			pressure: result.main.pressure,
			wind: Math.round(result.wind.speed)
		}
		
		res.render('index.ejs', { weather, error: null }); // { weather } is shorthand for { weather: weather }
	}

	catch (error) {
		res.render('index.ejs', { weather: null, error: 'City not found, please try again.', city });
	}

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});