'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser'; // koristi novi paket
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_dy6bs5j',       // tvoj Service ID
        'template_m0marjq',      // tvoj Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'CeYzTXNXu2BF16nI2'      // tvoj Public Key
      )
      .then(() => {
        alert('Poruka poslana!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Greška:', error);
        alert('Greška pri slanju: ' + error.text);
      });
  };

  return (
    <section id = "contact" className="contact">
      <div className="container">
        
        {/* LEFT SIDE */}
        <div className="left">
          <h2>Kontakt</h2>

          <p><FaPhone /> +381 63 8009 290</p>
          <p><FaEnvelope /> stonelux732@gmail.com</p>
          <p><FaMapMarkerAlt /> Pasino brdo bb, Uvac 36310, Sjenica, Srbija</p>

          <div className="socials">
            <a href="https://www.facebook.com/kamenorezacka.m.r.radnja"><FaFacebook /></a>
            <a href="https://www.instagram.com/mr.stonelux"><FaInstagram /></a>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.6560066898837!2d19.97218597620031!3d43.27958197112231!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757e18b47140181%3A0xfab095dc35f74845!2sKamenorezacka%20radnja%20MR!5e0!3m2!1shr!2sba"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <h2>Pošaljite upit</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Vaše ime"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Vaš email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Vaša poruka"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Pošalji</button>
          </form>
        </div>

      </div>

      <style jsx>{`
        .contact {
          padding: 80px 20px;
          background: #111;
          color: white;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          max-width: 1200px;
          margin: auto;
        }

        h2 {
          margin-bottom: 20px;
          color: #d4af37;
        }

        .left p {
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .socials {
          margin: 20px 0;
        }

        .socials a {
          margin-right: 15px;
          font-size: 20px;
          color: white;
          transition: 0.3s;
        }

        .socials a:hover {
          color: #d4af37;
        }

        .map iframe {
          width: 100%;
          height: 250px;
          border: none;
          border-radius: 10px;
        }

        .right form {
          display: flex;
          flex-direction: column;
        }

        input, textarea {
          margin-bottom: 15px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #222;
          color: white;
        }

        button {
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #d4af37;
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #b8962e;
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
