import { Metadata } from 'next';
import React from 'react'

 export const metadata: Metadata = {
        title: "Contact Us - Raghuram's ",
        description: "Its a contact page of Next.js application by Raghuram",
    };

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <address>
          Email: <a href="mailto:contact@example.com">contact@example.com</a><br />
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </address>
    </div>
  )
}

export default Contact
