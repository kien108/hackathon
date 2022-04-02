import React from "react";
import "./calendar.scss";

const Calendar = () => {
   return (
      <>
         <header className="header">
            <div className="header-topline d-none d-lg-flex">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-auto d-flex align-items-center">
                        <div className="header-phone">
                           <i className="icon-telephone"></i>
                           <a href="tel:1-847-555-5555">1-800-267-0000</a>
                        </div>
                        <div className="header-info">
                           <i className="icon-placeholder2"></i>1560 Holden
                           Street San Diego, CA 92139
                        </div>
                        <div className="header-info">
                           <i className="icon-black-envelope"></i>
                           <a href="mailto:info@dentco.net">info@dentco.net</a>
                        </div>
                     </div>
                     <div className="col-auto ml-auto d-flex align-items-center">
                        <span className="header-social">
                           <a href="#" className="hovicon">
                              <i className="icon-facebook-logo-circle"></i>
                           </a>
                           <a href="#" className="hovicon">
                              <i className="icon-twitter-logo-circle"></i>
                           </a>
                           <a href="#" className="hovicon">
                              <i className="icon-google-plus-circle"></i>
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header-content">
               <div className="container">
                  <div className="row align-items-lg-center">
                     <button
                        className="navbar-toggler collapsed"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                     >
                        <span className="icon-menu"></span>
                     </button>
                     <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
                        <a href="index.html" className="header-logo">
                           <img
                              src="images/logo.png"
                              alt=""
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="col-lg ml-auto header-nav-wrap">
                        <div className="header-nav js-header-nav">
                           <nav className="navbar navbar-expand-lg btco-hover-menu">
                              <div
                                 className="collapse navbar-collapse justify-content-end"
                                 id="navbarNavDropdown"
                              >
                                 <ul className="navbar-nav">
                                    <li className="nav-item">
                                       <a
                                          className="nav-link"
                                          href="about.html"
                                       >
                                          About Us
                                       </a>
                                    </li>
                                    <li className="nav-item">
                                       <a
                                          href="services.html"
                                          className="nav-link dropdown-toggle"
                                          data-toggle="dropdown"
                                       >
                                          Services
                                       </a>
                                       <ul className="dropdown-menu">
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="services.html"
                                             >
                                                All Services
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="service-page.html"
                                             >
                                                Service Page
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="prices.html"
                                             >
                                                Prices
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="shop-listing.html"
                                             >
                                                Online Shop
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="nav-item">
                                       <a
                                          href="gallery.html"
                                          className="nav-link dropdown-toggle"
                                          data-toggle="dropdown"
                                       >
                                          Smiles Gallery
                                       </a>
                                       <ul className="dropdown-menu">
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="gallery.html"
                                             >
                                                Creative Gallery
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="gallery-simple.html"
                                             >
                                                Simple Gallery
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="nav-item">
                                       <a
                                          href="our-specialist.html"
                                          className="nav-link dropdown-toggle"
                                          data-toggle="dropdown"
                                       >
                                          Our Specialists
                                       </a>
                                       <ul className="dropdown-menu">
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="our-specialist.html"
                                             >
                                                All Specialists
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="doctor-page.html"
                                             >
                                                Doctor Page
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="schedule.html"
                                             >
                                                Schedule Table
                                             </a>
                                          </li>
                                       </ul>
                                    </li>{" "}
                                    <li className="nav-item">
                                       <a
                                          className="nav-link"
                                          href="testimonials.html"
                                       >
                                          Testimonials
                                       </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                       <a
                                          href="blog.html"
                                          className="nav-link dropdown-toggle"
                                          data-toggle="dropdown"
                                       >
                                          Blog
                                       </a>
                                       <ul className="dropdown-menu">
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="blog.html"
                                             >
                                                Blog Posts
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="blog-grid.html"
                                             >
                                                Blog Grid Posts
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                className="dropdown-item"
                                                href="blog-post-page.html"
                                             >
                                                Blog Single Post
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="nav-item">
                                       <a
                                          className="nav-link"
                                          href="contact.html"
                                       >
                                          Contacts
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </nav>
                        </div>
                        <div className="header-search">
                           <form action="#" className="form-inline">
                              <i className="icon-search"></i>
                              <input type="text" placeholder="Search" />
                              <button type="submit">
                                 <i className="icon-search"></i>
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className="page-content">
            <div className="section page-content-first">
               <div className="container">
                  <div className="text-center mb-2  mb-md-3 mb-lg-4">
                     <h1>School Timetable</h1>
                     <div className="h-decor"></div>
                  </div>
               </div>
               <div className="container">
                  <div
                     className="nav nav-pills justify-content-center"
                     role="tablist"
                  >
                     <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#tab-A"
                        role="tab"
                        aria-expanded="true"
                     >
                        Endodontics
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-B"
                        role="tab"
                        aria-expanded="false"
                     >
                        General dentistry
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-C"
                        role="tab"
                        aria-expanded="false"
                     >
                        Oral medicine
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-D"
                        role="tab"
                        aria-expanded="false"
                     >
                        Oral surgery
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-E"
                        role="tab"
                        aria-expanded="false"
                     >
                        Orthodontics
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-F"
                        role="tab"
                        aria-expanded="false"
                     >
                        Periodontics
                     </a>
                     <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#tab-G"
                        role="tab"
                        aria-expanded="false"
                     >
                        Prosthodontics
                     </a>
                  </div>
                  <div id="tab-content" className="tab-content mt-3 mt-md-4">
                     <div
                        id="tab-A"
                        className="tab-pane fade show active"
                        role="tabpanel"
                     >
                        <div className="cd-schedule loading">
                           <div className="timeline">
                              <div className="timeline-top-info">
                                 <span>Hours</span>
                              </div>
                              <ul>
                                 <li>
                                    <span>08:00</span>
                                 </li>
                                 <li>
                                    <span>09:00</span>
                                 </li>
                                 <li>
                                    <span>10:00</span>
                                 </li>
                                 <li>
                                    <span>11:00</span>
                                 </li>
                                 <li>
                                    <span>12:00</span>
                                 </li>
                                 <li>
                                    <span>13:00</span>
                                 </li>
                                 <li>
                                    <span>14:00</span>
                                 </li>
                                 <li>
                                    <span>15:00</span>
                                 </li>
                                 <li>
                                    <span>16:00</span>
                                 </li>
                              </ul>
                           </div>
                           <div className="events">
                              <ul>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Monday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Tuesday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Wednesday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Thursday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Friday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Saturday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                                 <li className="events-group">
                                    <div className="schedule-top-info">
                                       <span>Sunday</span>
                                    </div>
                                    <ul>
                                       <li
                                          className="doctor-card"
                                          data-start="08:00"
                                          data-end="09:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="09:00"
                                          data-end="10:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="10:00"
                                          data-end="11:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="11:00"
                                          data-end="12:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="12:00"
                                          data-end="13:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="13:00"
                                          data-end="14:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="14:00"
                                          data-end="15:00"
                                          data-event="event-3"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="15:00"
                                          data-end="16:00"
                                          data-event="event-4"
                                       ></li>
                                       <li
                                          className="doctor-card"
                                          data-start="16:00"
                                          data-end="17:00"
                                          data-event="event-3"
                                       ></li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer">
            <div className="footer-bottom">
               <div className="container">
                  <div className="row text-center text-md-left">
                     <div className="col-sm">
                        Copyright © 2018 <a href="#">DentCo</a>
                        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                        <a href="#">Privacy Policy</a>
                     </div>
                     <div className="col-sm-auto ml-auto">
                        <span className="d-none d-sm-inline">
                           For emergency cases&nbsp;&nbsp;&nbsp;
                        </span>
                        <i className="icon-telephone"></i>&nbsp;&nbsp;
                        <b>1-800-267-0000</b>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Calendar;
