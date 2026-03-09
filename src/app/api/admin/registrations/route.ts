import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // In a real app, you'd add authentication check here
    
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    
    // Calculate stats
    const total = registrations.length;
    const technical = registrations.filter(r => r.technicalEvents.length > 0).length;
    const nonTechnical = registrations.filter(r => r.nonTechnicalEvents.length > 0).length;
    const revenue = registrations.reduce((acc, curr) => acc + (curr.amountPaid || 0), 0);

    return NextResponse.json({
      registrations,
      stats: {
        total,
        technical,
        nonTechnical,
        revenue
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
