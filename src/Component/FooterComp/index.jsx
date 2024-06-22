import React from "react";
// import "./style.sass";
import InstagramIcon from "../../assets/icons/Instagram";
import FacebookIcon from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import logo from "../../assets/logo/BuyKarooLogo.png";
import MailIcon from "../../assets/icons/Mail";
import CustomerServiceIcon from "../../assets/icons/CustomerService";
import HelpIcon from "../../assets/icons/Help";
import { Link } from "react-router-dom";
import Input from "../../Helper/Input";
import Button from "../../Helper/Button";

const Footer = () => {
  return (
    <footer className="w-5/6 m-auto " >
      <div className="  foot-head  basis-1/4 py-10 flex flex-row justify-evenly gap-60">
        <div className="  subscribe flex flex-col gap-2">
          <p className=" text-black font-medium  text-2xl">Subscribe to our awesome emails.</p>
          <p className="opacity-50">Get our latest offers and news straight in your inbox.</p>
          <div className="sub-input flex flex-row">
            <Input className=" bg-slate-100 border-none p-4" type="text" placeholder="Please enter an email address" />
            {/* <input type="text" placeholder="Please enter an email address" /> */}
            {/* <button>Subscribe</button> */}
            <Button type="text" className=" bg-black text-white">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="download basis-1/4  gap-2 flex flex-col ">
          <h2 className="text-black font-medium  text-2xl">Download our apps</h2>
          <p className="opacity-50">Shop our products and offers on-the-go.</p>
          <div className="down-logo flex flex-row ">
            <img
              className="app-logo w-40"
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt=""
            />
            <img
              className="app-logo w-40"
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="foot-category grid grid-cols-4 p-8 ml-10">
        <div className="women-cat flex flex-col gap-1 text-start">
          <h3 className="text-xl" >Women</h3>
          <p className="font-light text-xs opacity-75">Tops</p>
          <p className="font-light opacity-75 text-sm">Ethnicwear</p>
          <p className="font-light opacity-75 text-sm">Bottoms</p>
          <p className="font-light opacity-75 text-sm">Dresses & Jumpsuits</p>
          <p className="font-light opacity-75 text-sm">Winterwear</p>
          <p className="font-light opacity-75 text-sm">Lingerie</p>
          <p className="font-light opacity-75 text-sm">Nightwear</p>
          <p className="font-light opacity-75 text-sm">Sportswear</p>
          <p className="font-light opacity-75 text-sm">Beauty</p>
          <p className="font-light opacity-75 text-sm">Watches & Sunglasses</p>
        </div>
        <div className="men-cat flex flex-col gap-1 text-start">
          <h3 className="text-xl">Men</h3>
          <p className="font-light opacity-75 text-sm">Tops</p>
          <p className="font-light opacity-75 text-sm">Bottoms</p>
          <p className="font-light opacity-75 text-sm">Ethnicwear</p>
          <p className="font-light opacity-75 text-sm">Winterwear</p>
          <p className="font-light opacity-75 text-sm">Sportswear</p>
          <p className="font-light opacity-75 text-sm">Innerwear</p>
          <p className="font-light opacity-75 text-sm">Grooming</p>
          <p className="font-light opacity-75 text-sm">Watches</p>
          <p className="font-light opacity-75 text-sm">Sunglasses</p>
        </div>
        <div className="kids-cat flex flex-col gap-1 text-start">
          <h3 className="text-xl">Kids</h3>
          <p className="font-light opacity-75 text-sm">Girls Clothing</p>
          <p className="font-light opacity-75 text-sm">Boys Clothing</p>
          <p className="font-light opacity-75 text-sm">Infants Girls</p>
          <p className="font-light opacity-75 text-sm">Infants Boys</p>
          <p className="font-light opacity-75 text-sm">Winterwear</p>
          <p className="font-light opacity-75 text-sm">Add ons</p>
          <p className="font-light opacity-75 text-sm">The Teen Shop</p>
        </div>
        <div className="explore flex flex-col gap-1 text-start">
          <h3 className="text-xl">Explore</h3>
          <p className="font-light opacity-75 text-sm">Online Offers</p>
          <p className="font-light opacity-75 text-sm"> Offers</p>
          <p className="font-light opacity-75 text-sm">Online Gift Card</p>
          <p className="font-light opacity-75 text-sm"> Gift Card</p>
          <p className="font-light opacity-75 text-sm">s Nearby</p>
          <p className="font-light opacity-75 text-sm">EDGE Membership</p>
          <p className="font-light opacity-75 text-sm">Shop on WhatsApp</p>
          <p className="font-light opacity-75 text-sm">Fashion VLOG</p>
          <p className="font-light opacity-75 text-sm">Join CIRCLEMAG</p>
          <p className="font-light opacity-75 text-sm">SBI Offers</p>
          <p className="font-light opacity-75 text-sm">Homecentre</p>
        </div>
        <div className="about flex flex-col gap-1 text-start">
          <h3 className="text-xl">About</h3>
          <p className="font-light opacity-75 text-sm">About us</p>
          <p className="font-light opacity-75 text-sm">Careers</p>
          <p className="font-light opacity-75 text-sm">Take a Tour</p>
          <p className="font-light opacity-75 text-sm">Blog</p>
          <p className="font-light opacity-75 text-sm">Store Locator</p>
          <p className="font-light opacity-75 text-sm">Landmark Cares</p>
        </div>
        <div className="help flex flex-col gap-1 text-start">
          <h3 className="text-xl">Help</h3>
          <p className="font-light opacity-75 text-sm">Contact us</p>
          <p className="font-light opacity-75 text-sm">Shipping</p>
          <p className="font-light opacity-75 text-sm">Returns Process</p>
          <p className="font-light opacity-75 text-sm">Returns Policy</p>
          <p className="font-light opacity-75 text-sm">Help Centre</p>
        </div>
      </div>
      <hr className="h-1" />
      <div className="foot-contact flex flex-row justify-between" >
        <div className="foot-email w-2/3 flex flex-row p-8 justify-evenly">
          <div className="foots-email  flex flex-row gap-10">
            <div className="foot-email-logo rounded">
              {/* <span className="material-symbols-outlined">
                        call
                        </span> */}
              <CustomerServiceIcon />
            </div>
            <div className="foot-email-desc">
              <p>Talk to us</p>
              <h4>1800-123-1555</h4>
            </div>
          </div>
          <div className="foot-email flex flex-row gap-10">
            <div className="foot-email-logo">
              {/* <span className="material-symbols-outlined">
                        live_help
                        </span> */}
              <HelpIcon />
            </div>
            <div className="foot-email-desc">
              <p>Helpcenter</p>
              <h4>help.shopkaroo.com</h4>
            </div>
          </div>
          <div className="foot-email flex flex-row gap-10">
            <div className="foot-email-logo">
              {/* <span className="material-symbols-outlined">
                        mail
                        </span> */}
              <MailIcon />
            </div>
            <div className="foot-email-desc">
              <p>write to us</p>
              <h4>help@shopkaroo.com</h4>
            </div>
          </div>
        </div>
        <div className="contact-logo w-1/5 m-auto flex flex-row justify-evenly">
          <InstagramIcon />
          <FacebookIcon />
          <Twitter />
          {/* <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i> */}
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          placeItems: "center",
        }}
        className="foot-logo"
      >
        <Link to="/">
          <img
            style={{ width: "100px" }}
            classNameName="foot-logo-img"
            src={logo}
            alt=""
          />
        </Link>
        <div className="logo-desc">
          <p>Terms & Conditions - Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
