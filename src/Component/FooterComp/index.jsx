import React from "react";
import "./style.sass";
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
    <footer>
      <div class="foot-head">
        <div class="subscribe">
          <h2>Subscribe to our awesome emails.</h2>
          <p>Get our latest offers and news straight in your inbox.</p>
          <div class="sub-input">
            <Input type="text" placeholder="Please enter an email address" />
            {/* <input type="text" placeholder="Please enter an email address" /> */}
            {/* <button>Subscribe</button> */}
            <Button type="text" className="bg-pink border-0">
              Subscribe
            </Button>
          </div>
        </div>
        <div class="download">
          <h2>Download our apps</h2>
          <p>Shop our products and offers on-the-go.</p>
          <div class="down-logo">
            <img
              className="app-logo"
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt=""
            />
            <img
              className="app-logo"
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="foot-category">
        <div class="women-cat">
          <h3>Women</h3>
          <p>Tops</p>
          <p>Ethnicwear</p>
          <p>Bottoms</p>
          <p>Dresses & Jumpsuits</p>
          <p>Winterwear</p>
          <p>Lingerie</p>
          <p>Nightwear</p>
          <p>Sportswear</p>
          <p>Beauty</p>
          <p>Watches & Sunglasses</p>
        </div>
        <div class="men-cat">
          <h3>Men</h3>
          <p>Tops</p>
          <p>Bottoms</p>
          <p>Ethnicwear</p>
          <p>Winterwear</p>
          <p>Sportswear</p>
          <p>Innerwear</p>
          <p>Grooming</p>
          <p>Watches</p>
          <p>Sunglasses</p>
        </div>
        <div class="kids-cat">
          <h3>Kids</h3>
          <p>Girls Clothing</p>
          <p>Boys Clothing</p>
          <p>Infants Girls</p>
          <p>Infants Boys</p>
          <p>Winterwear</p>
          <p>Add ons</p>
          <p>The Teen Shop</p>
        </div>
        <div class="explore">
          <h3>Explore</h3>
          <p>Online Offers</p>
          <p> Offers</p>
          <p>Online Gift Card</p>
          <p> Gift Card</p>
          <p>s Nearby</p>
          <p>EDGE Membership</p>
          <p>Shop on WhatsApp</p>
          <p>Fashion VLOG</p>
          <p>Join CIRCLEMAG</p>
          <p>SBI Offers</p>
          <p>Homecentre</p>
        </div>
        <div class="about">
          <h3>About</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Take a Tour</p>
          <p>Blog</p>
          <p>Store Locator</p>
          <p>Landmark Cares</p>
        </div>
        <div class="help">
          <h3>Help</h3>
          <p>Contact us</p>
          <p>Shipping</p>
          <p>Returns Process</p>
          <p>Returns Policy</p>
          <p>Help Centre</p>
        </div>
      </div>
      <hr />
      <div class="foot-contact">
        <div class="foot-email">
          <div class="foot-email">
            <div class="foot-email-logo">
              {/* <span class="material-symbols-outlined">
                        call
                        </span> */}
              <CustomerServiceIcon />
            </div>
            <div class="foot-email-desc">
              <p>Talk to us</p>
              <h4>1800-123-1555</h4>
            </div>
          </div>
          <div class="foot-email">
            <div class="foot-email-logo">
              {/* <span class="material-symbols-outlined">
                        live_help
                        </span> */}
              <HelpIcon />
            </div>
            <div class="foot-email-desc">
              <p>Helpcenter</p>
              <h4>help.shopkaroo.com</h4>
            </div>
          </div>
          <div class="foot-email">
            <div class="foot-email-logo">
              {/* <span class="material-symbols-outlined">
                        mail
                        </span> */}
              <MailIcon />
            </div>
            <div class="foot-email-desc">
              <p>write to us</p>
              <h4>help@shopkaroo.com</h4>
            </div>
          </div>
        </div>
        <div class="contact-logo">
          <InstagramIcon />
          <FacebookIcon />
          <Twitter />
          {/* <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i> */}
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
        class="foot-logo"
      >
        <Link to="/">
          <img
            style={{ width: "100px" }}
            className="foot-logo-img"
            src={logo}
            alt=""
          />
        </Link>
        <div class="logo-desc">
          <p>Terms & Conditions - Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
