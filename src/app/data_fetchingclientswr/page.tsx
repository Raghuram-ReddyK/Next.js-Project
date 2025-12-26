'use client';
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface Tour {
    id: number;
    title: string;
    description: string;
    price: number;
}

const DataFetchClientSWR = () => {
    const { data, isLoading, error, mutate } = useSWR(
        'http://localhost:5000/tours',
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
                    <p className="text-gray-700">Failed to load tours. Please try again later.</p>
                    <button
                        onClick={() => mutate()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Amazing Tours</h1>
                    <p className="text-xl text-gray-600">Discover your next adventure with our curated selection of tours</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data?.map((tour: Tour) => (
                        <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-green-600">${tour.price}</span>
                                    <Link
                                        href={`/data_fetchingclientswr/${tour.id}`}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {data && data.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No tours available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataFetchClientSWR;