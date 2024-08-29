import { model, Schema } from 'mongoose';
import bcrypt from "bcrypt";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "A userName is required."],
            minLength: [1, "Username must be at least one (1) character in length."],
            maxLength: [20, "Username can not exceed twenty (20) characters in length."]
        },

        firstName: {
            type: String,
            required: [true, "Please enter your first name."]
        },

        lastName: {
            type: String,
            required: [true, "Please enter your last name."]
        },

        email: {
            type: String,
            required: [true, "An email address is required."],
            lowercase: true,
            trim: true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Please provide a valid email address'
            ]
        },

        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: [8, "Password must be at least eight (8) characters long."]
        },

        address: {
            street: {
                type: String,
                required: [true, "Please provide a street address."],
            },
            city: {
                type: String,
                required: [true, "Please provide a city name."],
            },
            state: {
                type: String,
                required: [true, "Please provide a state code."],
                maxLength: [2, "State code must be two (2) characters."], // Assumes US state codes
                uppercase: true, // Convert state to uppercase (e.g., 'NY')
            },
            zip: {
                type: String,
                required: [true, "Please provide a zip code."],
                match: [/^\d{5}(-\d{4})?$/, "Please provide a valid zip code."] // Allows ZIP and ZIP+4 formats
            }
        }
    },
    { timestamps: true }
);

UserSchema.virtual("confirmPassword")
    .get(function () { return this._confirmPassword })
    .set(function (value) { this._confirmPassword = value });

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match Confirm Password.");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        });
});

const UserModel = model("User", UserSchema);
export default UserModel;
