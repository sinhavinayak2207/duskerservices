"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main style={{padding: '2.5rem 0', maxWidth: '900px', margin: '0 auto'}}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 900, color: '#5d2e8c', marginBottom: '1.5rem'}}>Contact Dusker</h1>
      <p style={{fontSize: '1.15rem', color: '#ffffff', marginBottom: '1.2rem'}}>
        We’d love to hear from you! Fill out the form below or email us at <a href="mailto:info@duskerservices.in" style={{color:'#5d2e8c'}}>info@duskerservices.in</a>.
      </p>
      {submitted ? (
        <div style={{color:'#5d2e8c',fontWeight:700,fontSize:'1.2rem',margin:'2rem 0'}}>Thank you for reaching out! We’ll get back to you soon.</div>
      ) : (
      <form 
        action="https://formspree.io/f/xovyakzz" 
        method="POST"
        style={{display:'flex',flexDirection:'column',gap:'1.2rem',marginTop:'2rem'}} 
        onSubmit={() => setSubmitted(true)}
      >
        <div style={{display:'flex',gap:'1.5rem'}}>
          <input required type="text" name="name" placeholder="Your Name" style={{flex:1,padding:'0.8rem 1.1rem',borderRadius:'8px',border:'1.5px solid #eaf0ff',fontSize:'1.05rem'}} />
          <input required type="email" name="email" placeholder="Your Email" style={{flex:1,padding:'0.8rem 1.1rem',borderRadius:'8px',border:'1.5px solid #eaf0ff',fontSize:'1.05rem'}} />
        </div>
        <textarea required name="message" placeholder="Your Message" rows={6} style={{padding:'0.8rem 1.1rem',borderRadius:'8px',border:'1.5px solid #eaf0ff',fontSize:'1.05rem',resize:'vertical'}} />
        <button type="submit" style={{background:'linear-gradient(90deg,#7e9fff 0%,#fbc2eb 100%)',color:'#fff',fontWeight:700,padding:'0.9rem 2.2rem',border:'none',borderRadius:'10px',fontSize:'1.12rem',cursor:'pointer',marginTop:'0.7rem'}}>Send Message</button>
      </form>
      )}
      <div style={{marginTop:'2.5rem',fontSize:'1.03rem',color:'#ffffff'}}>Or email us directly at <a href="mailto:info@duskerservices.in" style={{color:'#5d2e8c'}}>info@duskerservices.in</a></div>
    </main>
  );
}
