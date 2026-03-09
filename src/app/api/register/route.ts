/* eslint-disable */
import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { generateParticipantId } from "@/utils/generateParticipantId";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    
    // Connect to DB
    await connectToDatabase();

    // Generate ID
    const participantId = generateParticipantId();

    // Check if Cloudinary is configured
    let paymentProofUrl = "";
    const file = data.get("file") as File;
    
    if (file) {
      if (process.env.CLOUDINARY_API_KEY) {
        paymentProofUrl = await uploadToCloudinary(file) as string;
      } else {
        // Fallback to local storage (for development)
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${participantId}-${file.name}`;
        const filePath = path.join(process.cwd(), "public", "uploads", fileName);
        await writeFile(filePath, buffer);
        paymentProofUrl = `/uploads/${fileName}`;
      }
    }

    const registrationData = {
      name: data.get("name"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      year: data.get("year"),
      department: data.get("department"),
      college: data.get("college"),
      technicalEvents: JSON.parse(data.get("technicalEvents") as string || "[]"),
      nonTechnicalEvents: JSON.parse(data.get("nonTechnicalEvents") as string || "[]"),
      paymentMethod: data.get("paymentMethod"),
      referenceNumber: data.get("referenceNumber"),
      payerName: data.get("payerName"),
      amountPaid: Number(data.get("amountPaid")),
      paymentProof: paymentProofUrl,
      foodPreference: data.get("foodPreference"),
      whatsappJoin: data.get("whatsappJoin"),
      participantId: participantId,
    };

    const newRegistration = new Registration(registrationData);
    await newRegistration.save();

    return NextResponse.json({ 
      success: true, 
      participantId: participantId 
    }, { status: 201 });

  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to register" 
    }, { status: 500 });
  }
}
