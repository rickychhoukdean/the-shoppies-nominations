## The Shoppies Nomination
SPA react application using the oMDB API to allow users to select their top five favourite movies and rank them.

You can visit the deployed site at https://shoppies-ricky.netlify.app/

## Setup Guide

In terminal type

1. `git clone https://github.com/rickychhoukdean/the-shoppies-nominations`
2. `cd the-shoppies-nominations`
3. `npm i`
4. `npm start`
5. The website should be now running on http://localhost:3000/ or whichever port is open
6. You can also check the components by running `npm run storybook`

## Extra features

It was recommended to add one or two extra features so I decided on the following:

1. Have the user be able to rank their nominations with drag and drop functionality via react-dnd
2. Save nomination lists if the user leaves the page by using local storage
3. It is responsive (it was easy to do this using SCSS variables and css grid system)

I found these two to be very important in terms of functionality for the app to see which movie deserve to be awarded. With these two features we can easily push the nomination data to a database and create a simple ranking system.

## Things to add

1. Submit the nominated movies to a database and complete a ranking system
2. The API only queries page 1 by default so add Pagination to the search results
3. Unit testing
