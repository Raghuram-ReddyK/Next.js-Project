'use client';
import React, { use } from "react";
import Link from "next/link";
import useSWR from "swr";

interface Tour {
    id: number;
    title: string;
    description: string;
    price: number;
}

const FetchSWR = ({ params }: { params: Promise<{ dataid: string }> }) => {
    const { dataid } = use(params);
    const { data, isLoading, mutate, error } = useSWR(
        `http://localhost:5000/tours/${dataid}`,
        url => fetch(url)
            .then(res => res.json())
            .catch(err => {
                throw new Error('Failed to fetch data', { cause: err });
            })
    );

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                    <p className="text-gray-700">Failed to load tour details. Please try again later.</p>
                    <div className="mt-4 space-x-4">
                        <button
                            onClick={() => mutate()}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Retry
                        </button>
                        <Link
                            href="/data_fetchingclientswr"
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Back to Tours
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h2>
                    <p className="text-gray-700">The tour you're looking for doesn't exist.</p>
                    <Link
                        href="/data_fetchingclientswr"
                        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to Tours
                    </Link>
                </div>
            </div>
        );
    }

    const tour: Tour = data;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        href="/data_fetchingclientswr"
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
                            <p className="text-xl opacity-90">Adventure Awaits</p>
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

export default FetchSWR;
