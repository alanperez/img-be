import axios from "axios";

const db = require('../data/dbConig')

async function getImageURL(imageId) {
    try {
      const image = await db.query('SELECT image_url FROM images WHERE id = ?', [imageId]);
      return image.url;
    } catch (error) {
      throw new Error('Failed to retrieve image URL from the database.');
    }
  }
  
  async function sendRequestToMLServer(imageURL) {
    try {
      const mlServerURL = 'http://localhost:8000/process';
      const response = await axios.post(mlServerURL, { url: imageURL });
      return response.data;
    } catch (error) {
      throw new Error('Failed to send request to the ML server.');
    }
  }
  
  module.exports = {
    getImageURL,
    sendRequestToMLServer,
  };