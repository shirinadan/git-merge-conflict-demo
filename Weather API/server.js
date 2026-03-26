// Import Express (framework to build servers)
// npm install express
const express = require("express");

// Create the app (your server)
const app = express();

// Import CORS (allows frontend to talk to backend)
// npm install cors
const cors = require("cors");

// Enable CORS so your frontend can communicate with this backend
app.use(cors());

// Allow server to read JSON from requests (like POST/PUT)
app.use(express.json());

// ============================================================
// WEATHER API ROUTE
// This route listens for GET requests at /weather/<cityName>
// Example: http://localhost:3000/weather/London
// ============================================================
app.get("/weather/:city", async (req, res) => {

    // -------------------------------------------------------
    // STEP 1: Get the city name from the URL
    // -------------------------------------------------------
    // HINT: The city name is stored in req.params
    // HINT: If the route is /weather/:city, then the city value
    //       is accessed with req.params.city
    // YOUR CODE HERE:
    const city = // ??? How do you get the city from the URL?


    // -------------------------------------------------------
    // STEP 2: Fetch latitude & longitude from the city name
    // -------------------------------------------------------
    // HINT: We use the Open-Meteo Geocoding API to convert a
    //       city name into coordinates (latitude & longitude)
    // HINT: Use fetch() to make a GET request to the API URL below
    // HINT: The city variable should be added at the end of the URL
    //
    // API URL: "https://geocoding-api.open-meteo.com/v1/search?name="
    //
    // YOUR CODE HERE:
    const geoRes = await fetch(
        // ??? Build the full URL by adding the city name to the end
    );

    // HINT: Use .json() to convert the response into a JavaScript object
    // YOUR CODE HERE:
    const geoData = // ??? How do you convert the response to JSON?


    // -------------------------------------------------------
    // STEP 3: Check if the city was found
    // -------------------------------------------------------
    // HINT: If the API finds no results, geoData.results will
    //       be undefined or an empty array []
    // HINT: Use an if statement to check if results are missing
    // HINT: If not found, send a 404 response with a message like:
    //       { message: "City not found" }
    //
    // YOUR CODE HERE:
    if(/* ??? When would there be no results? */){
        return res.status(404).json({ message: // ??? });
    }


    // -------------------------------------------------------
    // STEP 4: Extract latitude and longitude from the results
    // -------------------------------------------------------
    // HINT: The first result is at geoData.results[0]
    // HINT: Latitude is stored in .latitude, longitude in .longitude
    //
    // YOUR CODE HERE:
    const lat = // ??? Get latitude from the first result
    const lon = // ??? Get longitude from the first result


    // -------------------------------------------------------
    // STEP 5: Fetch the weather using the coordinates
    // -------------------------------------------------------
    // HINT: Now we use the Open-Meteo Weather API
    // HINT: You need to pass lat and lon into the URL
    // HINT: current_weather=true tells the API to return live weather
    // HINT: temperature_unit=fahrenheit sets the unit to °F
    //
    // API URL structure:
    // "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true&temperature_unit=fahrenheit"
    //
    // YOUR CODE HERE:
    const weatherRes = await fetch(
        // ??? Build the full URL using lat and lon
    );

    // HINT: Convert the weather response to JSON just like you did in STEP 2
    // YOUR CODE HERE:
    const weatherData = // ??? How do you convert the response to JSON?


    // -------------------------------------------------------
    // STEP 6: Send the weather data back to the frontend
    // -------------------------------------------------------
    // HINT: Use res.json() to send the response
    // HINT: The current weather info is inside weatherData.current_weather
    //
    // YOUR CODE HERE:
    res.json(// ??? What part of weatherData should you send back?);

});

// ============================================================
// START THE SERVER
// This tells your server to listen for requests on port 3000
// Run: node server.js
// Then visit: http://localhost:3000/weather/London
// ============================================================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});