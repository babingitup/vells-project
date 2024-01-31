import React, { useState, useEffect } from 'react';

function Razerpay() {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      const options = {
        key: "rzp_test_ffSb2yIkIflJH9",
        amount: amount * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "For testing purpose",
        handler: async function (response) {
          if (response.razorpay_payment_id) {
            // Payment successful
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          } else {
            // Payment failed or user closed the modal
            alert("Payment failed or canceled by the user");
          }
        },
        prefill: {
          name: "Velmurugan",
          email: "mvel1620r@gmail.com",
          contact: "7904425033",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <br />
      <input
        type="text"
        placeholder='Enter Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Razerpay;
