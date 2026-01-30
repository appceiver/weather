# Weather

A simple web application that displays current weather information for a given city.

**Demo:** [GIF](./public/images/weather.gif) | [Live Site](https://appceiver-weather.onrender.com) 
(Please allow ~60s for the free-tier server to start.)

<br>

## 🚀 Features

* **Search Option:** Search for weather information by city.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
* **Secure environment variable handling:** API keys are stored securely using environment variables.

<br>

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express, Axios, EJS
* **API:** OpenWeatherMap API
* **Icons:** Google Material Symbols

<br>

## 📦 Installation & Setup

1. **Clone the repository:**

  ```bash
  git clone https://github.com/appceiver/weather.git
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```

3. **Configure environment variables:** 

* This application requires an API key from OpenWeatherMap. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key.

* Create a `.env` file in the root directory of the project and add the following line, replacing `insert_key_here` with your actual API key:

  ```env
  OPENWEATHER_API_KEY=insert_key_here
  ```  

4. **Run the app:**

  ```bash
  node index.js
  ```
<br>

## 📈 Future Improvements

* [ ] Add an hourly forecast.
* [ ] Add a 10-day forecast.
* [ ] Implement location-based weather detection.
* [ ] Add background images based on weather conditions.
* [ ] Implement theme mode toggle.

<br>

## 📜 License & Credits

* **Code License:** This project is licensed under the [MIT License](https://opensource.org/license/mit).
* **Assets:** Icons and third-party assets are credited in [CREDITS.md](CREDITS.md).

<br>

## ✉️ Contact

Marcin Mirski<br>
Email: [mrcn.mrsk@gmail.com](mailto:mrcn.mrsk@gmail.com)<br>
LinkedIn: [Marcin Mirski](https://www.linkedin.com/in/marcin-mirski)