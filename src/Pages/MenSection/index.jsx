import React, { useEffect } from "react";
import Poster from "../../Helper/Poster";
const POSTER = {
  deal: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner5-men-Desktop-13Dec22.jpg",
      name: "deal-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner4-men-Desktop-13Dec22.jpg",
      name: "deal-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner1-men-Desktop-13Dec22.jpg",
      name: "deal-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner2-men-Desktop-13Dec22.jpg",
      name: "deal-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner3-men-Desktop-13Dec22.jpg",
      name: "deal-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner6-men-Desktop-13Dec22.jpg",
      name: "deal-6",
      path: "/",
    },
  ],
  brandSpot: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner1-14Dec2022.jpg",
      name: "brand-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner2-14Dec2022.jpg",
      name: "brand-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner3-14Dec2022.jpg",
      name: "brand-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner4-14Dec2022.jpg",
      name: "brand-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner5-14Dec2022.jpg",
      name: "brand-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner6-14Dec2022.jpg",
      name: "brand-6",
      path: "/",
    },
  ],
  winterEssential: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner1-08Nov2022.jpg",
      name: "winter-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner2-08Nov2022.jpg",
      name: "winter-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner3-08Nov2022.jpg",
      name: "winter-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner4-08Nov2022.jpg",
      name: "winter-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner5-08Nov2022.jpg",
      name: "winter-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner6-08Nov2022.jpg",
      name: "winter-6",
      path: "/",
    },
  ],
  bigBrand: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-14Dec2022.jpg",
      name: "big-brand-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-14Dec2022.jpg",
      name: "big-brand-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-14Dec2022.jpg",
      name: "big-brand-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-14Dec2022.jpg",
      name: "big-brand-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-14Dec2022.jpg",
      name: "big-brand-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-14Dec2022.jpg",
      name: "big-brand-6",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner7-men-Desktop-14Dec2022.jpg",
      name: "big-brand-7",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner8-men-Desktop-14Dec2022.jpg",
      name: "big-brand-8",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner9-men-Desktop-14Dec2022.jpg",
      name: "big-brand-9",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner10-men-Desktop-14Dec2022.jpg",
      name: "big-brand-10",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner11-men-Desktop-14Dec2022.jpg",
      name: "big-brand-11",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner12-men-Desktop-14Dec2022.jpg",
      name: "big-brand-12",
      path: "/",
    },
  ],
  topBrand: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner1-14Dec22.jpg",
      name: "top-brand-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner2-14Dec22.jpg",
      name: "top-brand-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner3-14Dec22.jpg",
      name: "top-brand-3",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner4-14Dec22.jpg",
      name: "top-brand-4",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner5-14Dec22.jpg",
      name: "top-brand-5",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner6-14Dec22.jpg",
      name: "top-brand-6",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner7-14Dec22.jpg",
      name: "top-brand-7",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner8-14Dec22.jpg",
      name: "top-brand-8",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner9-14Dec22.jpg",
      name: "top-brand-9",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner10-14Dec22.jpg",
      name: "top-brand-10",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner11-14Dec22.jpg",
      name: "top-brand-11",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner12-14Dec22.jpg",
      name: "top-brand-12",
      path: "/",
    },
  ],
  topPick: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg",
      name: "top-pick-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg",
      name: "top-pick-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg",
      name: "top-pick-3",
      path: "/",
    },
  ],
  highlight: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg",
      name: "highlight-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg",
      name: "highlight-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif",
      name: "highlight-3",
      path: "/",
    },
  ],
  loved: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg",
      name: "loved-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg",
      name: "loved-1",
      path: "/",
    },
  ],
  shopByDept: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg",
      name: "shopByDept-1",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg",
      name: "shopByDept-2",
      path: "/",
    },
    {
      img: "https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg",
      name: "shopByDept-3",
      path: "/",
    },
  ],
  banner1: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-09Dec2022.gif",
      name: "banner-1",
      path: "/",
    },
  ],
  banner2: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-08Dec2022.jpg",
      name: "banner-2",
      path: "/",
    },
  ],
  banner3: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-24Nov2022.jpg",
      name: "banner-3",
      path: "/",
    },
  ],
  banner4: [
    {
      img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-25Nov2022.jpg",
      name: "banner-4",
      path: "/",
    },
  ],
};
const MenHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="men-container w-4/6 m-auto">
        <div className="deal-corner">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Deal Corner"
            posterMap={POSTER.deal}
          />
        </div>
        <div className="banner">
          <div className="banner">
            <Poster
              className="grid grid-cols-1 mt-8"
              posterMap={POSTER.banner1}
            />
          </div>
        </div>
        <div className="spotlight">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Brand Spotlight"
            posterMap={POSTER.brandSpot}
          />
        </div>
        <div className="spotlight">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Brand Spotlight"
            posterMap={POSTER.winterEssential}
          />
        </div>
        <div className="big-brand">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Big Brands Destination"
            posterMap={POSTER.bigBrand}
          />
        </div>
        <div className="banner">
          <div className="banner">
            <Poster
              className="grid grid-cols-1 mt-8 "
              posterMap={POSTER.banner2}
            />
          </div>
        </div>
        <div className="banner">
          <div className="banner">
            <Poster
              className="grid grid-cols-1 mt-8 "
              posterMap={POSTER.banner3}
            />
          </div>
        </div>
        <div className="shop-by-cat">
          <Poster
            className="grid grid-cols-6 mt-6 gap-2"
            posterName="Top Trending Brands"
            posterMap={POSTER.topBrand}
          />
        </div>
        <div className="banner">
          <div className="banner">
            <Poster
              className="grid grid-cols-1 mt-8 "
              posterMap={POSTER.banner4}
            />
          </div>
        </div>
        <div className="top-pick">
          <Poster
            className="grid grid-cols-3 mt-6 gap-2"
            posterName="Top Picks"
            posterMap={POSTER.topPick}
          />
        </div>
        <div className="highlight">
          <Poster
            className="grid grid-cols-3 mt-6 gap-2"
            posterName="Highlights of the Day"
            posterMap={POSTER.highlight}
          />
        </div>
        <div className="loved">
          <Poster
            className="grid grid-cols-2 mt-6 gap-2"
            posterName="Most loved brands"
            posterMap={POSTER.loved}
          />
        </div>
        <div className="shop-by-dept">
          <Poster
            className="grid grid-cols-3 mt-6 gap-2"
            posterName="Shop By Department"
            posterMap={POSTER.shopByDept}
          />
        </div>
      </div>
    </>
  );
};

export default MenHero;
