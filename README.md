Scenario - Weathermap api client
---------------------------

Your app should be a client for the [Open Weather Map API](http://openweathermap.org/API#weather) JSON api

Features that should work:

* Display the weather at random geographic coordinates
* A form with city and country that fetches and displays the weather in this city
  - optional: cache the fetched weather data
* Gracefully handle the case where the city could not be found (display the information to the user)