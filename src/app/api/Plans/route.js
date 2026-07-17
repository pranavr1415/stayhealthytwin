import { NextRequest, NextResponse } from "next/server";
import connectDB from "../lib/mongodb";

export async function POST(request) {
    try {
        await connectDB(); 

        const formData = await req.formData();

        let Plan;


        try{
            Plan = Object.fromEntries(formData.entries());
        } catch (e) {
            return NextResponse.json({message: 'Invalid JSON form data'}, {status: 400})
        }

        const createdPlan = await Plan.create(Plan);

        return NextResponse.json({message: "Plan created successfully", plan: createdPlan}, {status: 201});
    } catch (error) {
        console.error(error);
        
        return NextResponse.json(
            { 
                message: "Plan creation failed",
                error: error instanceof Error ? error.message : "Unknown error"
            } , {status: 500}
        );
    }
}
