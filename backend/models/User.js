const mongoose = require("mongoose");

// Define the schema for a User in the database
const UserSchema = new mongoose.Schema(
    {
        // User's full name
        name: {
            type: String,
            required: true, // Name is required
        },

        // User's email address
        email: {
            type: String,
            required: true, // Email is mandatory
            unique: true,   // No two users can have the same email
            lowercase: true, // Converts the email to lowercase before saving
            trim: true,      // Removes leading/trailing spaces
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Validates email format
        },

        // Hashed password of the user
        password: {
            type: String,
            required: true, // Password is required
        },

        // Optional profile image URL
        profileImageUrl: {
            type: String,
            default: null, // Defaults to null if not provided
        },

        // Role for access control (e.g., admin or regular member)
        role: {
            type: String,
            enum: ["admin", "member"], // Can only be 'admin' or 'member'
            default: "member", // Default role is 'member'
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    }
);

// Export the model so it can be used elsewhere in the app
module.exports = mongoose.model("User", UserSchema)

