import React from 'react'
import { Metadata } from 'next'

interface Props {
    params: Promise<{ userid: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { userid } = await params

    return {
        title: `User Detail - ${userid} - Raghuram's`,
        description: `Detailed information about user ${userid} in Next.js application by Raghuram`,
        keywords: [`user ${userid}`, 'profile', 'Next.js'],
        openGraph: {
            title: `User ${userid} Profile`,
            description: `View profile and details for user ${userid}`,
            type: 'profile',
        },
    }
}

const page = async ({ params }: Props) => {
    const { userid } = await params

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">User Detail Page</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <p className="text-lg"><span className="font-semibold">User ID:</span> {userid}</p>
            </div>
        </div>
    )
}

export default page
