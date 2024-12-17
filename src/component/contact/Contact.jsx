import React, { useState } from 'react'
import './contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
        region: "ঢাকার ভিতর",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };


      const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const shippingCost = 100;
  const productPrice = 100; // Assuming per product price is 100

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount)); // Ensures quantity doesn't go below 1
  };

  const totalCost = shippingCost + productPrice * quantity;

  return (
    <div>
 
 <div className="contactmainbox">
<div className="box">
    <p>অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরন করুন</p>
  <div className="form-box">
    <div className="input-box">
       <div className="firstt-box">
      <h3>Billing Address</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">আপনার নাম*</label>
          <input
            type="text"
            id="name"
            name="name"
           
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">আপনার মোবাইল নাম্বার*</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
           
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">আপনার সম্পূর্ণ ঠিকানা*</label>
          <input
            type="text"
            id="address"
            name="address"
         
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">ডেলিভারি এলাকা নির্বাচন করুন</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
          >
            <option value="ঢাকার ভিতর">ঢাকার ভিতর</option>
            <option value="ঢাকার বাহিরে">ঢাকার বাহিরে</option>
          </select>
        </div>

      
      </form>
    </div>
 </div>



 

  <div className="last-secton">
   <h3>Your Order</h3>

   <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>Product</h3>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
        <span>Select Quantity:</span>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>

      <div style={{ margin: "10px 0" }}>
        <strong>Subtotal:</strong> {productPrice * quantity}.00
      </div>
      <div style={{ margin: "10px 0" }}>
        <strong>Shipping:</strong> {shippingCost}.00
      </div>
      <div style={{ margin: "10px 0", fontWeight: "bold" }}>
        <strong>Total:</strong> {totalCost}.00
      </div>

      <div
        style={{
          margin: "20px 0",
          padding: "10px",
          
       
        }}
      >
        <h4>Cash on delivery</h4>
        <h5 >Pay with cash on delivery.</h5>
      </div>

      <h1 style={{ color:'#FF730B', fontSize: "17px" }}>
        * ১০০% শিপিং হয়ে অর্ডার করুন, অযথা অর্ডার করবেন না।
      </h1>
    <input type="submit" value="অর্ডার কনফার্ম করুন" id='last-btn'/>
    </div>







  </div>
    </div>
</div>
</div>
</div>



    




  )
}

export default Contact
