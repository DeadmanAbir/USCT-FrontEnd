import React from 'react'
import Sliders from "./Slider"
function Hero() {
  return (
    <div className="page-component__bg_image_box bg-light_gray-color first_component" id="header-23-140891">
    <div className="page-component__bg_overlay_box" style={{}} />
    <div className="page-component__wrapper" style={{zIndex: 12, paddingTop: '70px', paddingBottom: '70px'}}>
      <header className="header-23 graphics-image default-graphics-image">
        <div className="container container--large header-23__container">
          <div className="header-23__left">
            <div className="header-23__left_content">
              <h1 className="heading heading--accent header-23__heading">
                University School of <span style={{color: "#900"}}>Chemical Technology</span>
              </h1>
              <div >
              <p><span style={{fontWeight: "900"}}>USCT Admin Dashboard: <span style={{ color: "#900" }}>Empowering Teachers</span></span></p>
                <p className="header-23__text content_box">
                  A dedicated platform for teachers to efficiently evaluate
                  and upload student's internship performance.
                </p>
              </div>
              <div className="header-23__cta_box" style={{borderColor :"#90000"}}>
                <div className="buttons-set" style={{borderColor :"#900"}}>
                  <ul className="buttons-set__list" style={{borderColor :"#900"}}>
                    <li className="buttons-set__item" >
                      <a data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" href="#cta_form-03-690461" target="_self" style={{borderStyle: "solid", borderColor: "#900"}}><span className="button__text" style={{color: "#900", borderColor: "#900"}}>Get Started</span></a>
                    </li>
                  </ul>
                  <div className="content_box cta_bottom_info">
                    Only authorized professors can login.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-23__right">
            
        <Sliders />
</div>
        </div>
      </header>
    </div>
  </div>
  )
}

export default Hero