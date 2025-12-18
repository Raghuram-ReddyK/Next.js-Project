import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "About Us - Raghuram's",
    description: "Its a about us Next.js application by Raghuram",
};

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of the application.</p>
            <span> You can learn more about us here.</span>
        </div>
    )
}

export default About
