Instructions
---------------------------

1. Read the task
2. Create a project
3. Please implement the project according to your own best standards, possibly
   - Tests, tdd
   - Code guidelines
   - Structure / architecture
   - Refactoring
   - Conventions
4. For the layout bootstrap or plain design is enough.
5. Make sure to commit frequently and feel free to stop working on it after 1-2 hours
6. Provide an overview which points you would improve if you had more time to work on the project

Scenario - Weathermap api client
---------------------------

Your app should be a client for the [Open Weather Map API](http://openweathermap.org/API#weather) JSON api

Features that should work:

* Display the weather at random geographic coordinates
* A form with city and country that fetches and displays the weather in this city
  - optional: cache the fetched weather data
* Gracefully handle the case where the city could not be found (display the information to the user)


Points would Improve on Real project
-------------------------------------
1. Ember Cli Mirage and Ember Try Add on can be used for Development and Test versions. It will give better execution on all states. To make presentational - Local Dev version also connecting to Actual API.
2. Loading navigation can be animated.
3. Search will be enhanced to support - Auto Search based on Country and City
4. W3C standards and SEO will be done.
5. Sinon Stubs will be introduced to check all functions in Routes, Adapters, Serializer.
6. Enhanced weather report will be added.