import React, { useState, useRef } from "react";
import "./App.css";

const OrderPage = () => {
  const [showContactSection, setShowContactSection] = useState(false);
  const contactRef = useRef(null);

  const handleClick = () => {
    setShowContactSection(true);
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>অর্ডার পেজ</h1>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#FF7F00",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          অর্ডার করতে ক্লিক করুন 👉
        </button>
      </div>

      {showContactSection && (
        <div
          ref={contactRef}
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Billing Address</h2>
          <form style={{ maxWidth: "400px", margin: "0 auto" }}>
            <div>
              <label>আপনার নাম:</label>
              <input
                type="text"
                placeholder="নাম লিখুন"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <label>আপনার মোবাইল নাম্বার:</label>
              <input
                type="text"
                placeholder="মোবাইল নাম্বার"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <label>আপনার সম্পূর্ণ ঠিকানা:</label>
              <textarea
                placeholder="ঠিকানা লিখুন"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#FF7F00",
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              অর্ডার কনফার্ম করুন
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
