import React from 'react'
import Navbar from '../Patientpages/Navbar'
import Footer from '../comman/Footer'
import './Patenthome.css'
import doctoimg from '../Images/doc2.jpg'
import { Link } from 'react-router-dom'
import { BsChatRightText } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";


function Patenthome() {
  return (
    <>
      <Navbar />

      <div className="home-wrapper">
        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-white">
                <h1 className="display-4 fw-bold head_pre">Book Your Doctor Appointment</h1>
                <p className="lead mt-3">
                  Premium healthcare access with trusted doctors, modern clinics,
                  and instant appointment booking.
                </p>
                <div className="mt-4">
                  <Link to='/appointmentform'>
                    <button className="btn btn-lg me-3 button">Book Now</button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 text-center docimg" data-aos="flip-up">
                <img
                  src={doctoimg}
                  alt="Doctor"
                  className="img-fluid hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section py-5">
          <div className="container">
            <div className="text-center mt-5 mb-5">

              <h2 className="fw-bold">Our Medical Services</h2>
              <p className="text-muted">Comprehensive care for every patient</p>
            </div>
            <div className="d-flex gap-3">
              <div className="col-md-4">
                <div className="service-card mt-3" data-aos="fade-up">
                  <div className="icon"><BsChatRightText /></div>
                  <h5>Online Consultation</h5>
                  <p>Video & chat consultations with certified specialists.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card mt-3" data-aos="fade-up">
                   <div className="icon"><FaWpforms /></div>
                  <h5>Clinic Appointments</h5>
                  <p>Book in-person visits at top hospitals and clinics.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card mt-3" data-aos="fade-up">
                  <div className="icon"><RiCustomerService2Fill/></div>
                  <h5>24x7 Support</h5>
                  <p>Healthcare assistance available anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section text-center">
          <div className="container">
            <h2 className="fw-bold text-white">Your Health, Our Priority</h2>
            <p className="text-white-50 mt-4">
              Join thousands of patients who trust our digital healthcare platform.
            </p>

          </div>
        </section>
      </div>


      <Footer />
    </>
  )
}

export default Patenthome