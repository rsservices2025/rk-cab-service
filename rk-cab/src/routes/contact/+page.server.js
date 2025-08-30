// src/routes/contact/+page.server.js

import { fail } from '@sveltejs/kit';

// आपकी Web3Forms एक्सेस की यहां इंटीग्रेट कर दी गई है
const WEB3FORMS_ACCESS_KEY = 'f142b013-b6f6-4616-bc11-9ec6639edce9';

export const actions = {
  // यह 'default' एक्शन हमारे <form> द्वारा कॉल किया जाएगा
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // बेसिक सर्वर-साइड वैलिडेशन
    if (!name || !email || !message) {
      return fail(400, {
        error: 'Please fill out all fields.',
        name,
        email,
        message // उपयोगकर्ता का इनपुट वापस भेजें ताकि फॉर्म रीसेट न हो
      });
    }

    // Web3Forms को भेजने के लिए डेटा तैयार करें
    const dataToSend = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      subject: `New message from ${name} on RK CAB SERVICES website`
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json();

      if (result.success) {
        // सफलता पर, फॉर्म का डेटा क्लियर करने के लिए खाली ऑब्जेक्ट भेजें
        return { success: 'Message sent successfully!' };
      } else {
        console.error('Web3Forms Error:', result); // डीबगिंग के लिए सर्वर लॉग में एरर दिखाएं
        return fail(500, {
          error: 'Failed to send message. Please try again later.',
          name,
          email,
          message
        });
      }
    } catch (e) {
      console.error('Fetch Error:', e); // डीबगिंग के लिए सर्वर लॉग में एरर दिखाएं
      return fail(500, {
        error: 'An error occurred. Please check your connection.',
        name,
        email,
        message
      });
    }
  }
};