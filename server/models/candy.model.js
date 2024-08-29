import { model, Schema } from 'mongoose';

const CandySchema = new Schema(
    {
        candyName: {
            type: String,
            required: [true, "Candy name is required."],
            trim: true, 
            maxLength: [100, "Candy name cannot exceed 100 characters."]
        },
        description: {
            type: String,
            trim: true,
            maxLength: [500, "Description cannot exceed 500 characters."]
        },
        recipeInstructions: {
            type: String,
            trim: true,
            maxLength: [2000, "Recipe instructions cannot exceed 2000 characters."]
        },
        recipeIngredients: {
            type: [String],
            required: [true, "Recipe ingredients are required."],
        },
        price: {
            type: Number,
            required: [true, "Price is required."],
            min: [0, "Price cannot be negative."]
        }
    },
    { timestamps: true }
);


const Candy = model("Candy", CandySchema);
export default Candy;