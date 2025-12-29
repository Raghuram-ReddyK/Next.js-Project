import { NextResponse } from "next/server";
import ToursSchema from "../../lib/models/toursModel";


export async function POST(request: Request) {
    try {
        const responseData = await request.json();
        console.log("Received tour data:", responseData);
        const result = await ToursSchema.create(responseData);
        return NextResponse.json({
            message: "Tour created successfully",
            data: result
        },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating tour:", error);
        return NextResponse.json({
            message: "Failed to create tour",
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        },
            { status: 400 }
        );
    }
}

export async function GET() {
    try {
        const tours = await ToursSchema.find({});
        return NextResponse.json({
            message: "Tours fetched successfully",
            data: tours
        },
            { status: 200 }
        );
    }
    catch (error) {
        console.error("Error fetching tours:", error);
        return NextResponse.json({
            message: "Failed to fetch tours",
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        },
            { status: 400 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        console.log("Deleting tour with ID:", id);
        const result = await ToursSchema.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({
                message: "Tour not found",
            },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Tour deleted successfully",
            data: result
        },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting tour:", error);
        return NextResponse.json({
            message: "Failed to delete tour",
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        },
            { status: 400 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const requestData = await request.json();
        const { id, ...updateData } = requestData;

        console.log("Updating tour with ID:", id, "with data:", updateData);

        if (!id) {
            return NextResponse.json({
                message: "Tour ID is required",
            },
                { status: 400 }
            );
        }

        const result = await ToursSchema.findByIdAndUpdate(id, updateData, { new: true });
        if (!result) {
            return NextResponse.json({
                message: "Tour not found",
            },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Tour updated successfully",
            data: result
        },
            { status: 200 }
        );
    }
    catch (error) {
        console.error("Error updating tour:", error);
        return NextResponse.json({
            message: "Failed to update tour",
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        },
            { status: 400 }
        );
    }
}