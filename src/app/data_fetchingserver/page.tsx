import React from "react";
import Link from "next/link";
import ToursSchema from "../lib/models/toursModel";
import connectDB from "../lib/connectDB";

interface Tour {
    _id: string;
    title: string;
    description: string;
    price: number;
    createdAt?: string;
    updatedAt?: string;
}

const fetchData = async () => {
    try {
        await connectDB();
        const tours = await ToursSchema.find({});
        return { data: tours, error: null };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: null, error: error instanceof Error ? error.message : 'Unknown error occurred' };
    }
}

const DataFetchServer = async () => {
    const { data: tours, error } = await fetchData();

    if (error) {
        // Throw error to trigger error boundary
        throw new Error(error);
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Amazing Tours</h1>
                    <p className="text-xl text-gray-600">Discover your next adventure with our curated selection of tours</p>
                    <div className="mt-4 text-sm text-gray-500">
                        Data fetched on the server side for optimal performance
                    </div>
                </div>

                {tours && tours.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🏖️</div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Tours Available</h2>
                        <p className="text-gray-600">We&apos;re working on adding new adventures. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tours?.map((tour: Tour) => (
                            <div key={tour._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-4xl mb-2">✈️</div>
                                        <div className="text-sm opacity-90">Adventure</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-green-600">${tour.price}</span>
                                        <Link
                                            href={`/data_fetchingserver/${tour._id}`}
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                        >
                                            View Details
                                            <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Server-Side Rendered for Fast Loading
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataFetchServer;
