# Weather app

## Project Description

We built a weather forecasting app using the API. The data service takes in the zipcode and uses the geocoding API to return the latitude/longitude coordinates, which are then piped as parameters into the one-call API. Anyone can enter their zipcode in the search bar and get the location name, historical 5 day data, 7 day forecast, alerts, and hourly trends. There is also the option to create an account with and permanently assign a zipcode to the user. Once logged in, the user can change their zipcode and it will update in the database. The navbar uses an ng-template to display a log out or login depending on the session. All the data is stored locally on the client’s browser. 

## Technologies Used

* Angular - version 10
* Bootstrap - 4.6
* SpringBoot
* MySQL
* HTML
* JS
* CSS

## Features

List of features ready and TODOs for future development
* Can input a zip code and see the data for any location
* View past weather information as well as future anywhere
* Can create an account and have access permanently
* Can view emergency alerts and hourly forecast
* The app takes into account time and shows the weather at night or day depending on when the website is accessed

To-do list:
* Some zipcodes do not exist- maybe find a way to filter those
* Currently the app is for US only. Maybe make it global in the future
* Add more weather related information and an option to include more APIs to improve accuracy

## Getting Started
   
(include git clone command)
(include all environment setup steps)

> Be sure to include BOTH Windows and Unix command  
> Be sure to mention if the commands only work on a specific platform (eg. AWS, GCP)

* After cloning, be sure to add the required node modules and install boostrap 4.6
* For the spring boot part of it, set up your application properties configuration file according to your local system/database

## Usage

* To find weather forecasts and information for any location in the U.S.
* To view any emergency alerts in your area

## Contributors

Antonio Lewis & Nikhil Pradeep

## License

This project uses the following license: [MIT license](LICENSE).
