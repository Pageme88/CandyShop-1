import { model, Schema} from 'mongoose';

const CandySchema = new Schema (
    {
        candyName: {
            type: String,
            required: [true, "A Candy Name is reuqired."]
        },
    }
);

const Setup = model("Candy", CandySchema);
export default Setup;