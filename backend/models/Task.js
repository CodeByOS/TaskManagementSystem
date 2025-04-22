const mongoose = require("mongoose");

// Define a sub-schema for each item in a task's checklist
const todoSchema = new mongoose.Schema({
    // Text description of the to-do item
    text: {
        type: String,
        required: true, // Required field
    },
    // Status of the checklist item
    completed: {
        type: Boolean,
        default: false // Defaults to false (incomplete)
    },
});

// Define the main schema for a Task
const taskSchema = new mongoose.Schema({
        // Title of the task
        title: { 
            type: String, 
            required: true // Required field
        },

        // Optional detailed description of the task
        description: { 
            type: String 
        },

        // Priority level of the task
        priority: { 
            type: String, 
            enum: ["Low", "Medium", "High"], // Must be one of these values
            default: "Medium" // Default is Medium
        },

        // Current status of the task
        status: { 
            type: String, 
            enum: ["Pending", "In Progress", "Completed"], // Allowed values
            default: "Pending" // Default status
        },

        // Deadline for the task (should be a date, but currently stored as string)
        dueDate: { 
            type: String, 
            required: true // Due date is required
        },

        // Users assigned to this task (array of User references)
        assignedTo: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User" // Reference to the User model
        }],

        // Creator of the task (User reference)
        createdBy: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User" // Reference to the User model
        },

        // Array of file attachment URLs or paths
        attachments: [{ 
            type: String 
        }],

        // An array of sub-tasks/checklist items using the defined todoSchema
        todoChecklist: [todoSchema],

        // Manual progress percentage (0–100)
        progress: { 
            type: Number, 
            default: 0 
        }
    },
    {
        // Automatically adds `createdAt` and `updatedAt` timestamps
        timestamps: true 
    }
);

// Export the Task model to be used in other parts of the app
module.exports = mongoose.model("Task", taskSchema);
