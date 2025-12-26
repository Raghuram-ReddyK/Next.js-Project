'use client';
import React, { useEffect, useState } from "react";
import { Tour } from "../data_fetchingclient/page";
import axios from "axios";
import Link from "next/link";

const DataFetchingClientAxios = () => {
    const [data, setData] = useState<Tour[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tours');
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
            <ul>
                {data.map((tour) => (
                    <li key={tour.id}>
                        <Link href={`/data_fetchingclientaxios/${tour.id}`}>{tour.title}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>;
};

export default DataFetchingClientAxios;