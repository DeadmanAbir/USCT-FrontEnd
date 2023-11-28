import React from 'react'
import admin from "../Images/red admin.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
function SuperadminPortal() { 
    async function handleDelete(){
    const confirmDeletion = window.confirm('Are you sure you want to delete previous data?');
    if(confirmDeletion){
      const inputYear = window.prompt('Please enter the year:');
      if(inputYear!=null){
        try{
          const response=await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/drive/superadmin/delete/${inputYear}`);
          console.log(response.data);
         }catch(e){
          console.log(e);
         }
      }
    }

  }


    return (

        <div className="page-component__bg_image_box bg-white-color first_component" id="header-23-457101">
          <div className="page-component__bg_overlay_box" style={{}} />
          <div className="page-component__wrapper" style={{zIndex: 10, paddingTop: '70px', paddingBottom: '70px'}}>
            <header className="header-23 graphics-image default-graphics-image">
              <div className="container container--large header-23__container">
                <div className="header-23__left">
                  <div className="header-23__left_content">
                    <h1 className="heading heading--accent header-23__heading">
                      Welcome, <span style={{color:"#900"}}>SuperAdmin!</span>
                    </h1>
                    <div className="header-23__text content_box">
                      Upload student's internship reports and details with ease.
                    </div>
                    <div className="header-23__cta_box">
                      <div className="buttons-set">
                        <ul className="buttons-set__list">
                          <li className="buttons-set__item">
                            <Link className="button button--accent-bg" to="/uploadperformance" style={{backgroundColor: "#900"}} ><span className="button__text">Upload Data</span></Link>
                          </li>
                          <li className="buttons-set__item">
                            <Link to="/excelupload" className="button button--accent-outline"  style={{border: "solid", borderColor: "#097640", color :"#097640"}}><span className="button__text">+ Upload From Excel</span></Link>
                          </li>
                          <li className="buttons-set__item">
                            <Link className="button button--accent-outline"  style={{border: "solid", borderColor: "#900", color :"#900"}} onClick={handleDelete}><span className="button__text">Delete Data</span></Link>
                          </li>
                        </ul>
                        
                        <div className="content_box cta_bottom_info">
                          Ensure the files are in the correct format before
                          uploading.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-23__right" style={{paddingLeft: "200px"}}>
                  <img className="header-23__img" alt="Red admin" src={admin} srcSet={`
                    ${admin}?width=250&height=300 250w,
                    ${admin}?width=251&height=300 251w,
                    ${admin}?width=348&height=417 348w,
  
                  `} sizes="(max-width: 320px) 250px,(max-width: 375px) 250px,(max-width: 425px) 251px,(max-width: 600px) 251px,(max-width: 1020px) 348px,348px" />
                </div>
              </div>
            </header>
          </div>
        </div>
      );
}

export default SuperadminPortal