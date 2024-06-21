import mongoose, { Schema, model,models } from 'mongoose';

export interface Case {


  caseId: string;
  date: Date;
  username: string;
  section: string;
  itemName: string;
  detail: string;
  img?: string; // Optional property
  // ... other properties as needed
  createdAt?: Date; // Automatically added by timestamps option
  updatedAt?: Date; // Automatically added by timestamps option
  message?: string; // Add the message property with an optional (?) marker
}

const CaseSchema = new Schema <Case>({
  caseId: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Remove leading/trailing whitespace
  },
  date: {
    type: Date,
    required: true,
    default: Date.now, // Set default to current timestamp
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: String,
    required: true,
    trim: true,
  },
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  detail: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  // ... other properties as needed
}, {
  // Schema options
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Mongoose model creation (consider error handling)
const CaseModel = models.CaseModel  || model('CaseModel', CaseSchema);

export default CaseModel;
