import { NextRequest, NextResponse } from "next/server";
import ToursSchema from "../../../lib/models/toursModel";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const tour = await ToursSchema.findById(id);

    if (!tour) {
      return NextResponse.json({
        message: "Tour not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      message: "Tour fetched successfully",
      data: tour
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching tour:", error);
    return NextResponse.json({
      message: "Failed to fetch tour",
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const deletedTour = await ToursSchema.findByIdAndDelete(id);

    if (!deletedTour) {
      return NextResponse.json({
        message: "Tour not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      message: "Tour deleted successfully",
      data: deletedTour
    }, { status: 200 });

  } catch (error) {
    console.error("Error deleting tour:", error);
    return NextResponse.json({
      message: "Failed to delete tour",
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 400 });
  }
}