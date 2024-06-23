import React, { useState } from "react";
import Poster from "../../Helper/Poster";

const POSTER = {
  benefits: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg",
      name: "Benfits-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg",
      name: "Benefits-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg",
      name: "Benefits-3",
      path: "/",
    },
  ],
  unmissed: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner1-01Dec22.jpg",
      name: "unmissed-1",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-29Nov22.jpg",
      name: "umissed-2",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner3-29Nov22.jpg",
      name: "umissed-3",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner4-29Nov22.jpg",
      name: "unmissed-4",
      path: "/",
    },
  ],
  unknown1: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner1-29Nov22.jpg",
      name: "unknown-1",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner2-29Nov22.jpg",
      name: "unknown-2",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner3-29Nov22.jpg",
      name: "unknown-3",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner4-29Nov22.jpg",
      name: "unknown-4",
      path: "/",
    },
  ],
  trendingOffer: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg",
      name: "trending-1",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg",
      name: "trending-2",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg",
      name: "trending-3",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg",
      name: "trending-4",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg",
      name: "trending-5",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-29Nov22.jpg",
      name: "trending-6",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg",
      name: "trending-7",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg",
      name: "trending-8",
      path: "/",
    },
  ],
  bigBrand: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-29Nov22.jpg",
      name: "bigbrand-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-29Nov22.jpg",
      name: "bigbrand-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner3-29Nov22.jpg",
      name: "bigbrand-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner4-29Nov22.jpg",
      name: "bigbrand-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner5-29Nov22.jpg",
      name: "bigbrand-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-29Nov22.jpg",
      name: "bigbrand-6",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner7-29Nov22.jpg",
      name: "bigbrand-7",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-02Dec22.jpg",
      name: "bigbrand-8",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner9-29Nov22.jpg",
      name: "bigbrand-9",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-29Nov22.jpg",
      name: "bigbrand-10",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-02Dec22.jpg",
      name: "bigbrand-11",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-29Nov22.jpg",
      name: "bigbrand-12",
      path: "/",
    },
  ],
  hottest: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner2-28Oct22.jpg",
      name: "hottest-1",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner3-18Oct22.jpg",
      name: "hottest-2",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-18Oct22.jpg",
      name: "hottest-3",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-18Oct22.jpg",
      name: "hottest-4",
      path: "/",
    },
  ],
  value: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-03Dec22.jpg",
      name: "value-1",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner2-03Dec22.jpg",
      name: "value-2",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner3-03Dec22.jpg",
      name: "value-3",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner4-03Dec22.jpg",
      name: "value-4",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner5-03Dec22.jpg",
      name: "value-5",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner6-03Dec22.jpg",
      name: "value-6",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-03Dec22.jpg",
      name: "value-7",
      path: "/",
    },
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner8-03Dec22.jpg",
      name: "value-8",
      path: "/",
    },
  ],
  watches: [
    {
      img: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-02Dec2022.gif",
      name: "watches",
      path: "/",
    },
  ],
  women: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-29Nov22.jpg",
      name: "men-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-02Dec22.jpg",
      name: "men-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-29Nov22.jpg",
      name: "men-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-05Dec22.jpg",
      name: "men-4",
      path: "/",
    },
  ],
  men: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-29Nov22.jpg",
      name: "women-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-29Nov22.jpg",
      name: "women-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-29Nov22.jpg",
      name: "women-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner4-29Nov22.jpg",
      name: "women-4",
      path: "/",
    },
  ],
  kids: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-29Nov22.jpg",
      name: "kids-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-29Nov22.jpg",
      name: "kids-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-29Nov22.jpg",
      name: "kids-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-29Nov22.jpg",
      name: "kids-4",
      path: "/",
    },
  ],
};

const HeroSection = () => {
  const [view, setView] = useState("men");

  const viewHandler = (val) => {
    setView((prev) => val);
  };

  return (
    <div>
      <div className="hero-container w-4/6 m-auto">
        <div className="flat-offer mt-6">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-08Dec2022.jpg"
            alt=""
          />
        </div>
        <div className="benefits">
          <Poster
            className="grid grid-cols-3 mt-6 gap-2"
            posterName="Our Benefits"
            posterMap={POSTER.benefits}
          />
        </div>
        <div className="unmissed">
          <Poster
            className="grid grid-cols-4 mt-6 gap-2"
            posterName="Unmissable Offers"
            posterMap={POSTER.unmissed}
          />
        </div>
        <div className="hr2 mt-6">
          <img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-06Dec2022.gif"
            alt=""
          />
        </div>
        <div className="poster-unknown1">
          <Poster
            className="grid grid-cols-4 mt-6 gap-2"
            posterName=""
            posterMap={POSTER.unknown1}
          />
        </div>
        <div className="trending-offer">
          <Poster
            className="grid grid-cols-4 mt-6 gap-2"
            posterName="Trending Offer"
            posterMap={POSTER.trendingOffer}
          />
        </div>
        <div className="watches">
          <Poster
            className="grid grid-cols-1 mt-6 gap-2"
            posterName="Watches"
            posterMap={POSTER.watches}
          />
        </div>
        <div className="top-deals">
          <Poster
            className="grid grid-cols-2 mt-6 gap-4"
            posterName="Watches"
            posterMap={POSTER[view]}
          >
            <div className="deal-btn flex flex-row gap-2 text-xl">
              <button
                className={
                  view == "men"
                    ? "rounded-full bg-black text-white w-20"
                    : "rounded-full border-black border-2 text-black w-20"
                }
                onClick={() => viewHandler("men")}
              >
                Men
              </button>
              <button className={
                  view == "women"
                    ? "rounded-full bg-black text-white w-20"
                    : "rounded-full border-black border-2 text-black w-20"
                } onClick={() => viewHandler("women")}>Women</button>
              <button className={
                  view == "kids"
                    ? "rounded-full bg-black text-white w-20"
                    : "rounded-full border-black border-2 text-black w-20"
                } onClick={() => viewHandler("kids")}>Kids</button>
            </div>
          </Poster>
        </div>
        <div className="bigbrand">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Big Brands Big Discounts"
            posterMap={POSTER.bigBrand}
          />
        </div>
        <div className="hottest">
          <Poster
            className="grid grid-cols-4 mt-6 gap-2"
            posterName="Season's Hottest Picks"
            posterMap={POSTER.hottest}
          />
        </div>
        <div className="value-pick">
          <Poster
            className="grid grid-cols-4 mt-6 gap-2"
            posterName="Value Picks"
            posterMap={POSTER.value}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
