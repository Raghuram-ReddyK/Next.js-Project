'use client';
import Link from "next/link";
import React, { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com"
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com"
        },
        {
            id: 4,
            name: 'bob',
            email: "bob@example.com"
        },
        {
            id: 5,
            name: 'charlie',
            email: "charlie@example.com"
        },
        {
            id: 6,
            name: 'david',
            email: "david@example.com"
        }
    ]);
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">User List</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <div key={user.id} className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
                        <Link href={`/users/${user.id}`} className="block">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{user.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300">{user.email}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Users;
