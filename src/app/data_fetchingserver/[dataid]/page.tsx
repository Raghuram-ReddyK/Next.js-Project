import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

interface Tour {
    id: number;
    title: string;
    description: string;
    price: number;
}

const fetchData = async (dataid: string) => {
    try {
        const response = await fetch(`http://localhost:5000/tours/${dataid}`, {
            cache: 'no-cache'
        });
        if (!response.ok) {
            if (response.status === 404) {
                notFound();
            }
            throw new Error(`Failed to fetch tour: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Unknown error occurred while fetching tour');
    }
}

const FetchDataWithId = async ({ params }: { params: Promise<{ dataid: string }> }) => {
    const { dataid } = await params;
    const tour = await fetchData(dataid);

    if (!tour) {
        throw new Error('Tour not found');
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        href="/data_fetchingserver"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Tours
                    </Link>
                </div>

                {/* Tour Header */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
                            <p className="text-xl opacity-90">Adventure Details</p>
                        </div>
                    </div>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">{tour.description}</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-green-600 mb-2">${tour.price}</div>
                                <p className="text-gray-600">per person</p>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mb-4">
                                Book Now
                            </button>

                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free cancellation
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Instant confirmation
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FetchDataWithId;
