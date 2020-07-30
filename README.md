# Project-6

Cocktail-API

## Cocktail API

This cocktail API will allow you to search by specific ingredients and show cocktails containing those ingredients.

## Prerequisites

- API
- Express
- Mongoose
- Models
- Restful routing
- Node

## API Routes

USE CRUD

- Create: create a new drink
- Read: find an existing drink
- Update: update the name of a drink
- Delete: deleting an unwanted drink

- Check all CRUD methods using Postman (www.postman.com OR download at https://www.postman.com/downloads/)

Define routes here:

- drinks: ('/drinks') will show all drinks in the database
- id: ('/drinks/:id') will find a drink based on its id
- glass: ('/drinks/glass/:glass') will show a certain type of glass that is searched
- ingredient: ('/drinks/ingredient/:ingredient') will show an ingredient

## Installations

- Express
- Mongoose
- Body-parser
- Node

## Issues

- I had an issue trying to use Axios and decided to switch to Fetch
- I had an issue with seeding the data using the .map function. The data
  was in an array and needed to add 'data[0].item.map' in order for the seeding to work correctly.
