// Footer.jsx

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-700 mb-10">
        <div>
          <h4 className="font-bold mb-2">POLICY INFO</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Report Abuse & Takedown Policy</li>
            <li>Know Your BIS Standard</li>
            <li>Products Under Compulsory BIS</li>
            <li>Certification</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">SNAPDEAL BUSINESS</h4>
          <ul className="space-y-1">
            <li>Shopping App</li>
            <li>Sell on Snapdeal</li>
            <li>Media Enquiries</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">POPULAR LINKS</h4>
          <ul className="space-y-1">
            <li>Lehenga</li>
            <li>Kid’s Clothing</li>
            <li>Sarees</li>
            <li>Winter Wear</li>
            <li>Sweatshirts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">SUBSCRIBE</h4>
          <div className="flex items-center mb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="border p-2 w-full rounded-l-md"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-sm">
            Register now to get updates on promotions and coupons.{" "}
            <a href="#" className="text-blue-600">
              Or Download App
            </a>
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm px-4 py-6">
        {/* Payment methods */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold mb-2">PAYMENT</h4>
          <div className="flex gap-2">
            <img src="/src\assets\payment1.jpg" alt="Payment 1" className="h-6" />
            <img src="/src\assets\payment2.jpg" alt="Payment 2" className="h-6" />
            <img src="/src\assets\payment3.jpg" alt="Payment 3" className="h-6" />
            <img src="/src\assets\payment4.png" alt="Payment 4" className="h-6" />
            <img src="/src\assets\payment5.jpg" alt="Payment 5" className="h-6" />
            <img src="/src\assets\payment6.jpg" alt="Payment 6" className="h-6" />
          </div>
        </div>

        {/* Social icons */}
        <div>
          <h4 className="font-semibold mb-2 text-center md:text-left">
            CONNECT
          </h4>
          <div className="flex gap-4 text-xl">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
            <Youtube className="text-red-600" />
            <Send />
            <FaWhatsapp className="text-green-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
