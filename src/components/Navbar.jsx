"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    service: false,
    institution: false,
  });

  const [mobiledropdownOpen, setmobileDropdownOpen] = useState({
    about: false,
    service: false,
    institution: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  const togglemobileDropdown = (mobiledropdown) => {
    setmobileDropdownOpen((prev) => ({
      ...prev,
      [mobiledropdown]: !prev[mobiledropdown],
    }));
  };

  const handleClickOutside = (event) => {
    const dropdowns = ["about", "service", "institution"];
    dropdowns.forEach((dropdown) => {
      if (
        dropdownRefs[dropdown].current &&
        !dropdownRefs[dropdown].current.contains(event.target)
      ) {
        setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
      }
    });
  };

  const mobilehandleClickOutside = (event) => {
    const mobiledropdowns = ["about", "service", "institution"];
    mobiledropdowns.forEach((mobiledropdown) => {
      if (
        mobiledropdownRefs[mobiledropdown].current &&
        !mobiledropdownRefs[mobiledropdown].current.contains(event.target)
      ) {
        setmobileDropdownOpen((prev) => ({ ...prev, [mobiledropdown]: false }));
      }
    });
  };

  const dropdownRefs = {
    about: useRef(null),
    service: useRef(null),
    institution: useRef(null),
  };

  const mobiledropdownRefs = {
    about: useRef(null),
    service: useRef(null),
    institution: useRef(null),
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", mobilehandleClickOutside);
    return () => {
      document.removeEventListener("click", mobilehandleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-black text-lg font-semibold">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Beranda
            </a>
            <div className="relative" ref={dropdownRefs.about}>
              <button
                onClick={() => toggleDropdown("about")}
                className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-white focus:outline-none focus:bg-white"
              >
                <span className="flex items-center">
                  Tentang <RiArrowDropDownLine />
                </span>
              </button>
              {dropdownOpen.about && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="/about/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="/about/structure"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Struktur Organisasi
                    </a>
                    <a
                      href="/about/visi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Visi & Misi
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/news"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Berita
            </a>
            <a
              href="/gallery"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Galeri
            </a>
            <div className="relative" ref={dropdownRefs.service}>
              <button
                onClick={() => toggleDropdown("service")}
                className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-white focus:outline-none focus:bg-white"
              >
                <span className="flex items-center">
                  Layanan <RiArrowDropDownLine />
                </span>
              </button>
              {dropdownOpen.service && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="/service/surat-pengantar-nikah"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Pengantar Nikah
                    </a>
                    <a
                      href="/service/surat-keterangan-belum-menikah"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Keterangan Belum Menikah
                    </a>
                    <a
                      href="/service/surat-pengantar-akta-kematian"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Pengantar Akta Kematian
                    </a>
                    <a
                      href="/service/surat-keterangan-tidak-mampu"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Keterangan Tidak Mampu
                    </a>
                    <a
                      href="/service/surat-pernyataan-tanah"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Pernyataan Tanah
                    </a>
                    <a
                      href="/service/surat-pengantar-ktp"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Surat Pengantar KTP
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" ref={dropdownRefs.institution}>
              <button
                onClick={() => toggleDropdown("institution")}
                className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-white focus:outline-none focus:bg-white"
              >
                <span className="flex items-center">
                  Lembaga <RiArrowDropDownLine />
                </span>
              </button>
              {dropdownOpen.institution && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="/institution/rt-rw"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      RT & RW
                    </a>
                    <a
                      href="/institution/lpm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      LPM
                    </a>
                    <a
                      href="/institution/bkm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      BKM
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/information"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Informasi
            </a>
            <a
              href="/document"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Dokumen
            </a>
            <a
              href="/report"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Laporan
            </a>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              <FiSearch />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:bg-white focus:outline-none focus:bg-white p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <div className="relative" ref={mobiledropdownRefs.about}>
            <button
              onClick={() => togglemobileDropdown("about")}
              className="block w-full text-left text-black px-3 py-2 rounded-md text-base font-medium hover:bg-white focus:outline-none focus:bg-white"
            >
              <span className="flex items-center">
                Tentang <RiArrowDropDownLine />
              </span>
            </button>
            {mobiledropdownOpen.about && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="/about/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/about/structure"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Struktur Organisai
                  </a>
                  <a
                    href="/about/visi"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Visi & Misi
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="/news"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Berita
          </a>
          <a
            href="/gallery"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Galeri
          </a>
          <div className="relative" ref={mobiledropdownRefs.service}>
            <button
              onClick={() => togglemobileDropdown("service")}
              className="block w-full text-left text-black px-3 py-2 rounded-md text-base font-medium hover:bg-white focus:outline-none focus:bg-white"
            >
              <span className="flex items-center">
                Layanan <RiArrowDropDownLine />
              </span>
            </button>
            {mobiledropdownOpen.service && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="/service/surat-pengantar-nikah"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Pengantar Nikah
                  </a>
                  <a
                    href="/service/surat-keterangan-belum-menikah"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Keterangan Belum Menikah
                  </a>
                  <a
                    href="/service/surat-pengantar-akta-kematian"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Pengantar Akta Kematian
                  </a>
                  <a
                    href="/service/surat-keterangan-tidak-mampu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Keterangan Tidak Mampu
                  </a>
                  <a
                    href="/service/surat-pernyataan-tanah"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Pernyataan Tanah
                  </a>
                  <a
                    href="/service/surat-pengantar-ktp"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surat Pengantar KTP
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={mobiledropdownRefs.institution}>
            <button
              onClick={() => togglemobileDropdown("institution")}
              className="block w-full text-left text-black px-3 py-2 rounded-md text-base font-medium hover:bg-white focus:outline-none focus:bg-white"
            >
              <span className="flex items-center">
                Lembaga <RiArrowDropDownLine />
              </span>
            </button>
            {mobiledropdownOpen.institution && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="/institution/rt-rw"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    RT & RW
                  </a>
                  <a
                    href="/institution/lpm"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    LPM
                  </a>
                  <a
                    href="/institution/bkm"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    BKM
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="/information"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Informasi
          </a>
          <a
            href="/document"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Dokumen
          </a>
          <a
            href="/report"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Laporan
          </a>

          <a
            href="#"
            className="block text-black px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
