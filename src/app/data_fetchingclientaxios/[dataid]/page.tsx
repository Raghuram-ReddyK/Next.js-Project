'use client';
import React, { use, useEffect, useState } from "react";
import { Tour } from "../../data_fetchingclient/page";

const DataFetchingClientAxiosId = ({ params }: { params: Promise<{ dataid: string }> }) => {
    const { dataid } = use(params);
    const [tour, setTour] = useState<Tour | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:5000/tours/${dataid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tour');
                }
                const result: Tour = await response.json();
                setTour(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [dataid]);

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
                    <p className="text-gray-700">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h2>
                    <p className="text-gray-700">The requested tour could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {tour.title}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            {tour.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-green-600">
                                ${tour.price}
                            </span>
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-lg font-semibold">
                                Book This Tour
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Back to Tours
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataFetchingClientAxiosId;
