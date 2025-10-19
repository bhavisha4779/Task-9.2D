import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51SJsg5H0BKOIjHvpvXniGViYYA55J9Mb9qvDYovaskPdohIfUmqzFc9K3kWf4wxTWxd9YUmkcNgHKIySSLJepGYB00tONC5cC1"
);

export default function Payment() {
  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        padding: "40px 30px",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "2.2rem", fontWeight: "700" }}>
        Payment Page
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
