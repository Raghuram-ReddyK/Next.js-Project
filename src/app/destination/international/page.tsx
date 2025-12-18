import { Metadata } from 'next';
import React from 'react'

 export const metadata: Metadata = {
        title: "International Destinations - Raghuram's Next.js App",
        description: "Explore various international destinations in this section of the Next.js application by Raghuram",
    };

const International = () => {
    return (
        <div>
            <h2> International Destination Place</h2>
            <p> Explore various international destinations here!</p><br/>
            <ul>
                <li>Paris, France</li>
                <li>Tokyo, Japan</li>
                <li>New York City, USA</li>
                <li>London, UK</li>
                <li>Sydney, Australia</li>
                <li>Rome, Italy</li>
                <li>Barcelona, Spain</li>
                <li>Dubai, UAE</li>
                <li>Bangkok, Thailand</li>
                <li>Cape Town, South Africa</li>
            </ul>
        </div>
    )
}

export default International;
