const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectdb = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB connected:${dbConnection.connection.host}`)
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};
module.exports = connectdb;