import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-5 md:p-8 flex flex-col md:flex-row items-center bg-gray-200 mt-6">
      <div className="md:w-1/2 w-full mb-12 md:mb-0">
        <div className="px-4 text-center text-xl my-6 leading-none">
          <h3 className="text-black font-semibold">Kontak Kami</h3>
        </div>
        <div className="text-black text-xl md:py-9">
          <p>Jl. Air Tanjung, Talagasari, Kec. Kawalu</p>
          <p>Kab. Tasikmalaya, Jawa Barat 46182</p>
          <p>Telp / Fax : (0561) 765932</p>
          <p>Email : kel.bml@pontianak.go.id</p>
          <p>Facebook : Kelurahan Tanjung Tasikmalaya</p>
          <p>Instagram : @kelurahantanjungtasik</p>
        </div>
      </div>
      <div className="md:w-1/2 w-full mb-12 md:mb-0">
        <div className="px-4 text-center text-xl my-6 leading-none">
          <h3 className="text-black font-semibold">Lokasi Kami</h3>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.40891594251!2d108.17921522887286!3d-7.398387831783328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f562ada6fe893%3A0x6ffc0198fb81b388!2sTanjung%2C%20Kec.%20Kawalu%2C%20Kab.%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1716419781149!5m2!1sid!2sid"
            className="w-full h-60"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
