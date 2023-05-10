import React, { useState } from 'react';
import ContactForm from "../ContactForm.js";


function Contacts(props) {
    return (
<div class="bg-gray-100 p-6 rounded shadow-md">
  <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <h3 class="text-xl font-medium mb-2">Get in Touch</h3>
      <p class="text-gray-700 leading-relaxed mb-4">Feel free to send me a message, and I'll get back to you as soon as possible.</p>
      <ul class="list-disc list-inside">
        <li class="text-gray-700">Email: jesus.v545@gmail.com</li>
        <li class="text-gray-700">Phone: 123-456-7890</li>
        <li class="text-gray-700">Facebook: Jesus Vazquez</li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-medium mb-2">Contact Form</h3>
      <ContactForm />
    </div>
  </div>
</div>

    )
};

export default Contacts;