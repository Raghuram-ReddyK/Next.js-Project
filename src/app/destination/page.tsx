import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Destination - Raghuram's Next.js App",
  description: "Its a destination page by Raghuram",
};

const Destination = () => {
  return (
    <div>
      <h2>Destination Page</h2>
      <p>Welcome to the destination page!</p><br />
      <div>
        <li>
          <Link href="/destination/domestic" className="text-blue-500 hover:underline">
            Domestic Destinations
          </Link>
        </li>
        <li>
          <Link href="/destination/international" className="text-blue-500 hover:underline">
            International Destinations
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Destination
