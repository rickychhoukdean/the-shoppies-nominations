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

## Extra features

It was recommended to add one or two extra features so I decided on the following:

1. Have the user be able to rank their nominations with drag and drop functionality
2. Save nomination lists if the user leaves the page by using local storage

I found these two to be very important in terms of functionality for the app to see which movie deserve to be awarded. With these two features we can easily push the nomination data to a database and create a simple ranking system

## Things to add

1. Responsive design.
2. Submit the nominated movies to a database and complete a ranking system
3. The API only queries page 1 by default so add Pagination to the search results
