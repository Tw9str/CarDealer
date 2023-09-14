import React from "react";

export default function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251832.2000099637!2d3.9604820388355453!3d52.20732433855085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2snl!4v1694709227645!5m2!1sen!2snl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
