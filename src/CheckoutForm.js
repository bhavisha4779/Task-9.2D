import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert("Stripe is not loaded yet.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Payment successful!");
      console.log("PaymentMethod:", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "left",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "25px",
          backgroundColor: "white",
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                "::placeholder": {
                  color: "#aab7c4",
                },
                padding: "12px 14px",
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: true,
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Pay Now
      </button>
    </form>
  );
}
