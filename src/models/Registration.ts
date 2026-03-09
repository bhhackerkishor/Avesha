import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  year: { type: String, required: true },
  department: { type: String, required: true },
  college: { type: String, required: true },
  technicalEvents: { type: [String], default: [] },
  nonTechnicalEvents: { type: [String], default: [] },
  paymentMethod: { type: String, required: true },
  referenceNumber: { type: String, required: true },
  payerName: { type: String, required: true },
  amountPaid: { type: Number, required: true, default: 250 },
  paymentProof: { type: String, required: true }, // Local path or Cloudinary URL
  foodPreference: { type: String, required: true },
  whatsappJoin: { type: String, required: true },
  participantId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
