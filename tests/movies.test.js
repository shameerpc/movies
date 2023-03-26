const movies=require("../models/moviesModel");
const mongoose = require('mongoose');
const request = require('request');
const app=require("../app");


describe('Movie model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/movies', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  it('should create a new movie', async () => {
    // Arrange
    const movieData = {
      title: 'irutte',
      release_date: '2022-01-09',
      director: 'damu',
      rating: '3',
    };
    
    // Act
    const movie = await movies.create(movieData);
  
    // Assert
    const foundMovie = await movies.findOne({ title: 'irutte' });
    expect(foundMovie).not.toBeNull();
    expect(foundMovie.title).toEqual(movieData.title);
    expect(foundMovie.release_date.toISOString()).toEqual(new Date(movieData.release_date).toISOString());
    expect(foundMovie.director).toEqual(movieData.director);
  });



  it('should update an existing movie', async () => {
    const movie = await movies.findOne({ title: 'irutte' });
    movie.director = 'krish';
    await movie.save();
  
    const foundMovie = await movies.findOne({ title: 'irutte' });
    expect(foundMovie.director).toEqual('krish');
  });
 
  // it('should delete a movie', async () => {
  //   const movie = await movies.findOne({ title: 'The Matrix' });
  //   await movie.remove();
    it('should delete a movie', async () => {
      const movie = await movies.findOne({ title: 'irutte' });
      await movie.deleteOne({ _id: movie._id }); 

    const foundMovie = await movies.findOne({ title: 'irutte' });
    expect(foundMovie).toBeNull();
  });
});
// describe('POST /movies', () => {
//     test('should create a new movie', async () => {
//       const res = await request(app)
//         .post('api/v1/movies')
//         .send({
//           title: 'The Matrix',
//           release_date: '2022-04-07',
//           director: 'Lana Wachowski',
//           rating: "7",
//         })
//       expect(res.statusCode).toBe(201)
//       expect(res.body.title).toBe('The Matrix')
//       // Add additional assertions as needed
//     })
//   })

//   describe('GET /movies', () => {
//     test('should retrieve all movies', async () => {
//       const res = await request(app).get('api/v1/movies')
//       expect(res.statusCode).toBe(200)
//       expect(res.body.length).toBeGreaterThan(0)
//       // Add additional assertions as needed
//     })
//   })