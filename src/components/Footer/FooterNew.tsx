import React from "react";
import {
  firstColumn,
  fiveColumn,
  fourColumn,
  secondColumn,
  selectItems,
  thirdColumn,
} from "./FooterItem/FooterItem";
import { Col, Row, Space } from "antd";
import CustomSelect from "../Select";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ggplay from "./ggPlay.jpeg";
import appstore from "./appstore.png";
import { Link } from "react-router-dom";
import logo from "src/assets/images/HT MAX LIGHT.png";
import ComponentFooter from "./ComponentFooter";

type Props = {};

const style: React.CSSProperties = { padding: "8px 0", color: "white" };

const FooterNew = (props: Props) => {
  return (
    <div className="p-10 px-40 bg-mainColor border-t-[1px]">
      <div className="flex items-start justify-between  ">
        <img src={logo} alt="logo" className="fill-current bg-none h-[36px]" />
      </div>
      <div className="mt-8 flex text-white/70 flex-grow justify-between flex-wrap">
        <div style={style} className="">
          <ComponentFooter header="Chính Sách" tabContent={firstColumn} />
        </div>

        <div style={style}>
          <ComponentFooter header="Liên hệ" tabContent={fiveColumn} />
        </div>
        <div style={style}>
          <ComponentFooter header="Về chúng tôi" tabContent={fourColumn} />
        </div>
        <div className="w-1/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.320149371682!2d106.69511501026645!3d10.78677345895912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f350884eb97%3A0x667a9a130691e89a!2zNCBOZ3V54buFbiDEkMOsbmggQ2hp4buDdSwgxJBhIEthbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692330440805!5m2!1svi!2s"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* <div style={style}>
              <ComponentFooter header='Top city' tabContent={firstColumn} />
            </div> */}
      </div>
      <div className="flex items-center justify-center mb-5">
        <div>
          <Space>
            <IconButton>
              <TwitterIcon className="text-mainColor" />
            </IconButton>
            <IconButton>
              <FacebookIcon className="text-mainColor" />
            </IconButton>
            <IconButton>
              <InstagramIcon className="text-mainColor" />
            </IconButton>
          </Space>
        </div>
        <div className="flex items-center justify-start">
          <Link to="/" className="rounded-lg">
            <img
              src={ggplay}
              alt=""
              className="m-5 h-[50px] object-contain rounded-lg"
            />
          </Link>
          <Link to="/">
            <img src={appstore} alt="" className="h-[50px] object-contain " />
          </Link>
        </div>
      </div>
    </div>
    // <div>
    //   <div
    //     className="z-index-common contact-area wow fadeInUp"
    //     data-pos-for=".footer-wrapper"
    //     data-sec-pos="bottom-half"
    //     style={{
    //       marginBottom: "-60px",
    //       visibility: "visible",
    //       animationName: "fadeInUp",
    //     }}
    //   >
    //     <div className="container">
    //       <div className="contact-card style2">
    //         <div className="info-card style3 active">
    //           <div className="footer-logo">
    //             <a href="index.html">
    //               <img
    //                 src="https://inkythuatso.com/uploads/thumbnails/800/2022/08/4-anh-lai-xe-o-to-inkythuatso-09-15-58-13.jpg"
    //                 alt="Taxiar"
    //               />
    //             </a>
    //           </div>
    //         </div>
    //         <div className="info-card style3">
    //           <div
    //             className="border-line"
    //             data-bg-src="assets/img/shape/line.svg"
    //           ></div>
    //           <div className="info-card_icon">
    //             <i className="fal fa-location-dot"></i>
    //           </div>
    //           <div className="info-card_content">
    //             <p className="info-card_text">Our Address</p>
    //             <a
    //               href="https://www.google.com/maps"
    //               className="info-card_link"
    //             >
    //               25 Street, 145 City, USA
    //             </a>
    //           </div>
    //         </div>
    //         <div className="info-card style3">
    //           <div
    //             className="border-line"
    //             data-bg-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBe7wTeckmqykb7OO8k0V7VI3vgHVHawLEMS7b2rpNLtqPi8hF3JAjG3UBP4Jji_wAQA&usqp=CAU"
    //           ></div>
    //           <div className="info-card_icon">
    //             <i className="fal fa-envelope"></i>
    //           </div>
    //           <div className="info-card_content">
    //             <p className="info-card_text">Email Address</p>
    //             <a href="mailto:info@taxiar.com" className="info-card_link">
    //               info@taxiar.com
    //             </a>
    //           </div>
    //         </div>
    //         <div className="info-card style3">
    //           <div
    //             className="border-line"
    //             data-bg-src="assets/img/shape/line.svg"
    //           ></div>
    //           <div className="info-card_icon">
    //             <i className="fal fa-phone"></i>
    //           </div>
    //           <div className="info-card_content">
    //             <p className="info-card_text">Phone Number</p>
    //             <a href="tel:+46825476243" className="info-card_link">
    //               (+468) 254 76243
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <footer
    //     className="footer-wrapper footer-layout7"
    //     data-bg-src="assets/img/bg/footer_bg_2.jpg"
    //   >
    //     <div className="widget-area">
    //       <div className="container">
    //         <div className="row justify-content-between">
    //           <div className="col-md-6 col-xl-auto">
    //             <div className="widget footer-widget">
    //               <h3 className="widget_title">About Company</h3>
    //               <div className="th-widget-about">
    //                 <p className="footer-text">
    //                   Centric applications productize front end portals
    //                   visualize front end is results and value added
    //                 </p>
    //                 <h4 className="footer-info-title mb-15">
    //                   WE ARE AVAILABLE
    //                 </h4>
    //                 <p className="footer-text">Mon-Sat: 09.00 am to 6.30 pm</p>
    //               </div>
    //               <div className="th-social  style2">
    //                 <a href="https://facebook.com/">
    //                   <i className="fab fa-facebook-f"></i>
    //                 </a>
    //                 <a href="https://twitter.com/">
    //                   <i className="fab fa-twitter"></i>
    //                 </a>
    //                 <a href="https://instagram.com/">
    //                   <i className="fab fa-instagram"></i>
    //                 </a>
    //                 <a href="https://www.whatsapp.com/">
    //                   <i className="fa-brands fa-whatsapp"></i>
    //                 </a>
    //                 <a href="https://linkedin.com/">
    //                   <i className="fab fa-linkedin-in"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-6 col-xl-2">
    //             <div className="widget widget_nav_menu  footer-widget">
    //               <h3 className="widget_title">Quick link</h3>
    //               <div className="menu-all-pages-container">
    //                 <ul className="menu">
    //                   <li>
    //                     <a href="about.html">About Us</a>
    //                   </li>
    //                   <li>
    //                     <a href="booking.html">Book Ride</a>
    //                   </li>
    //                   <li>
    //                     <a href="service.html">Client Feedback</a>
    //                   </li>
    //                   <li>
    //                     <a href="service.html">Our Services</a>
    //                   </li>
    //                   <li>
    //                     <a href="team.html">Our Drivers</a>
    //                   </li>
    //                   <li>
    //                     <a href="contact.html">Contact Us</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-6 col-xl-auto">
    //             <div className="widget footer-widget">
    //               <h3 className="widget_title">Recent Posts</h3>
    //               <div className="recent-post-wrap">
    //                 <div className="recent-post">
    //                   <div className="media-img">
    //                     <a href="blog-details.html">
    //                       <img
    //                         src="https://inkythuatso.com/uploads/thumbnails/800/2022/08/4-anh-lai-xe-o-to-inkythuatso-09-15-58-13.jpg"
    //                         alt="Blog Image"
    //                       />
    //                     </a>
    //                   </div>
    //                   <div className="media-body">
    //                     <div className="recent-post-meta">
    //                       <a href="blog.html">
    //                         <i className="far fa-calendar-days"></i>22th May,
    //                         2023
    //                       </a>
    //                     </div>
    //                     <h4 className="post-title">
    //                       <a className="text-inherit" href="blog-details.html">
    //                         How To Start Car Engine Faster
    //                       </a>
    //                     </h4>
    //                     <a className="line-btn" href="blog.html">
    //                       Read More<i className="fa-regular fa-arrow-right"></i>
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="recent-post">
    //                   <div className="media-img">
    //                     <a href="blog-details.html">
    //                       <img
    //                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBe7wTeckmqykb7OO8k0V7VI3vgHVHawLEMS7b2rpNLtqPi8hF3JAjG3UBP4Jji_wAQA&usqp=CAU"
    //                         alt="Blog Image"
    //                       />
    //                     </a>
    //                   </div>
    //                   <div className="media-body">
    //                     <div className="recent-post-meta">
    //                       <a href="blog.html">
    //                         <i className="far fa-calendar-days"></i>25th May,
    //                         2023
    //                       </a>
    //                     </div>
    //                     <h4 className="post-title">
    //                       <a className="text-inherit" href="blog-details.html">
    //                         How to start car engine slowly
    //                       </a>
    //                     </h4>
    //                     <a className="line-btn" href="blog.html">
    //                       Read More<i className="fa-regular fa-arrow-right"></i>
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-6 col-xl-3">
    //             <div className="widget footer-widget">
    //               <h4 className="widget_title">Newsletter</h4>
    //               <div className="newsletter-widget">
    //                 <p className="md-20">
    //                   Sign Up to get updates & news about us . Get Latest Deals
    //                   from Walker's Inbox to our mail address.
    //                 </p>
    //                 <div className="footer-search-contact style2 mt-25">
    //                   <form>
    //                     <input
    //                       className="form-control"
    //                       type="email"
    //                       placeholder="Enter your email"
    //                     />
    //                   </form>
    //                   <div className="footer-btn mt-10">
    //                     <button
    //                       type="submit"
    //                       className="th-btn style3 fw-btn radius-btn"
    //                     >
    //                       Subscribe Now
    //                       <i className="fa-regular fa-arrow-right ms-2"></i>
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="copyright-wrap style2">
    //       <div className="container">
    //         <div className="row align-items-center">
    //           <div className="col-lg-6">
    //             <p className="copyright-text">
    //               <i className="fal fa-copyright"></i> 2023
    //               <a href="https://themeforest.net/user/themeholy">
    //                 Taxiar.
    //               </a>{" "}
    //               All Rights Reserved.
    //             </p>
    //           </div>
    //           <div className="col-lg-6">
    //             <div className="footer-links">
    //               <ul>
    //                 <li>
    //                   <a href="index.html">Home</a>
    //                 </li>
    //                 <li>
    //                   <a href="contact.html">Terms</a>
    //                 </li>
    //                 <li>
    //                   <a href="contact.html">Privacy Policy</a>
    //                 </li>
    //                 <li>
    //                   <a href="contact.html">Contact</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default FooterNew;

