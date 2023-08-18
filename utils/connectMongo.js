// import mongoose from 'mongoose';
require('dotenv').config();
const mongoose = require('mongoose');

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

module.exports = connectMongo;
// export default connectMongo;
