<h1>FlixB</h1> 
FlixB is an app i've made for those suffering from choice paralysis on from the gigantic offer of all the streaming services of what to watch. The app with a similar layout to one of the populair services offers highly rated series filtered on category on the main page for those looking for inspiration, a detail page accessible anywhere through the app with a lot of information about the series of their choosing and a search function with optional minimum rating for those looking for something specific.

<h2>Architectural decisions</h2>
I've chosen to use the framework React for this application. At this point in time it is the framework i know best and considering i've made this app with a deadline in mind it serves as the best way to show off my capabilities.

Vue is the framework i plan to make a hobby project in this month ( october ) to familiarize myself with it a bit. 

Here are the modules i've used that are neccesary to run the app as developer:

* "axios": "1.5.1",
* "react-router-dom": "6.16.0",

Axios is included purely for the GET requests to retrieve the required information from the API ( https://www.tvmaze.com/api#show-single-search ), react -router-dom is for navigation in the app. 

<h2>Deployment</h2>
Cloning this repo > running npm install > running npm run build should suffice to get this application running.
If you run into issues ensure you have the versions of the modules listen here installed in your package.json under dependencies.

If you wish to purely see the app running i have it here on Netifly: https://bflixapp.netlify.app// 

![src](/src/assets/pictures/Example%20FlixB.PNG)

<h2>Testing instructions</h2>
TBA


<h2>Wishlist</h2>
There were a couple of features i would have liked to add to the application ( especially 1 and 2 ). However time is a limited resource, the deadline is 4th of october and i have chosen to prioritize 100% coverage from unit tests and gathering and implementing feedback ( when appropriate ) from end users with non-technical backgrounds.  

1. Actors listed on the detail screen
2. Search and/or filter function based on actors ( api supports this )
3. Weekly changing homepage content. A date function should be the trigger for the page number API endpoint.
4. Genre page with minimum rating slider. For those who purely want a 'curated' selection of their favorite genre.
5. Dropdown menu on the detail page for the seasons & summary to declutter the page ( especially on mobile )
6. Recommendations for series to watch based on the series the detail page is opened for.
7. A where can i watch button linking directly to the respective page of the current streaming service that hosts a show. API currently does not support this but theoretically if there was an API or another webapp that specifically supports this it could be included.