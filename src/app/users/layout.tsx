import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Users - Raghuram's",
    description: "List of users in Next.js application by Raghuram",
    keywords: ['users', 'profiles', 'Next.js'],
    openGraph: {
        title: "Users Directory",
        description: "Browse all users in our application",
        type: 'website',
    },
}

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}