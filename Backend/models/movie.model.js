import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    _id: String,
    title: String,
    short_description: String,
    image: String,
    long_description: String
});

export default mongoose.model('Movie', movieSchema);
