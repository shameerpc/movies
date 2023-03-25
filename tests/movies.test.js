const movies=require("../models/moviesModel");
const mongoose = require('mongoose');
const request = require('request');
const app=require("../app");



describe('POST /movies', () => {
    test('should create a new movie', async () => {
      const res = await request(app)
        .post('api/v1/movies')
        .send({
          title: 'The Matrix',
          release_date: '2022-04-07',
          director: 'Lana Wachowski',
          rating: "7",
        })
      expect(res.statusCode).toBe(201)
      expect(res.body.title).toBe('The Matrix')
      // Add additional assertions as needed
    })
  })

  describe('GET /movies', () => {
    test('should retrieve all movies', async () => {
      const res = await request(app).get('api/v1/movies')
      expect(res.statusCode).toBe(200)
      expect(res.body.length).toBeGreaterThan(0)
      // Add additional assertions as needed
    })
  })