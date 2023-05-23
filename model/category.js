import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({

  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  }

});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
