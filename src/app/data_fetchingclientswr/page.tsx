'use client';
import React from "react";
import useSWR from "swr";

const DataFetchClientSWR = () => {
    const { data, isLoading, error } = useSWR('http://localhost:5000/tours', url => fetch(url).then(res => res.json()));
    console.log('data: ', data);
    return <div>
        Data Fetching Client SWR Page
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        {data &&
            <ul>
                {data.map((tour: any) => (
                    <li key={tour.id}>{tour.title}</li>
                ))}
            </ul>
        }
    </div>;
};

export default DataFetchClientSWR;