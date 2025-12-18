import { Metadata } from 'next';
import React from 'react'

 export const metadata: Metadata = {
        title: "Domestic Destinations - Raghuram's Next.js App",
        description: "Explore various domestic destinations in this section of the Next.js application by Raghuram",
    };

const page = () => {
  return (
    <div>
      <h2> Domestic Destination Place</h2>
      <p> Explore various domestic destinations here!</p><br/>

      <ul>
        <li>Kerala</li>
        <li>Goa</li>
        <li>Rajasthan</li>
        <li>Tamil Nadu</li>
        <li>Karnataka</li>
        <li>Andhra Pradesh</li>
        <li>Punjab</li>
        <li>Himachal Pradesh</li>
        <li>Uttarakhand</li>
        <li>West Bengal</li>
      </ul>
    </div>
  )
}

export default page
