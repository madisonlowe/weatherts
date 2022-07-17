# Weather App

This is an application built using TypeScript in React.

The user types into the input field the city for which they wish to know the weather. The app then calls on a geolocating API, which returns all possible matches for the provided city name. The user can then click the specific location to which they were referring, and the app will then call on a weather API, using the geolocation details, and return the upcoming forecast for that area.

## Installation & Running

Start by forking or cloning the repo down from GitHub onto your local machine.

Once you have the repo copied onto your local machine, change directory into the correct folder.

Once you are in the correct folder, please run `npm i` in the terminal in order to install any dependencies.

Once all packages and dependencies have been installed, make sure to add a `.env` file at root level.

Make sure this `.env` file is listed in your `.gitignore`.

Then, add the following to your `.env` where `loremipsum` is your API key to call on the weather API.

```
REACT_APP_API_CALL="loremipsum"
```

The API we used for our hackathon can be found at: https://openweathermap.org and there should be a free tier available for use.

Finally, run `npm start` in the terminal in order to see the application in action.

You should be able to see the application at http://localhost:3000 once it's live.

## Project Journey & Future Goals

The first iteration of this app was built during a day-long hackathon at the [School of Code](https://github.com/SchoolOfCode), working in a team with [@multivit](https://github.com/multi-vit), [@Leigh-Eastell](https://github.com/Leigh-Eastell), and [@simran-toor](https://github.com/simran-toor).

The intention and learning goal in building this app was to get more practice using Typescript, which we had first started looking at two days prior to the hackathon.

Future improvements: including CSS, further separating functionality in some areas, testing.
