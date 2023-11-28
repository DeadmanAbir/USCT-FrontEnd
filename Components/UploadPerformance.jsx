import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UploadPerformance() {
    const[name, setName]=useState(null);
    const[company, setCompany]=useState(null);
    const[year, setYear]=useState(null);
    const[type, setType]=useState("Inhouse");
    const[creator, setCreator]=useState("Rakesh Angira");
    const[semester, setSemester]=useState(null);
    const[enrollment, setEnrollment]=useState(null);
    const[file, setFile]=useState(null);
    const[url, setUrl]=useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        
        if (file) {
            console.log(file.type, file.size);
            if(file.type==="application/pdf" && file.size <= 5*1024*1024){
                try{
                    const formData = new FormData();
                    formData.append('file', file);
                   
                    console.log(name, company, semester)
                    const response=await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/drive/file/upload`, formData);
                    setUrl(response.data.webContentLink);
                    console.log(url, response.data.webContentLink);
                    try{
                        console.log(url);
                        
                        const upload=await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/create/students/${type.toLowerCase()}`, {
                            name,
                            company,
                            year,
                            creator,
                            semester,
                            enrollment,
                            url: response.data.webContentLink
                        });
                        console.log(upload.data);
                        console.log(url)
                        toast.success("Data uploaded successfully");
                    }catch(e){
                        console.log(e);
                        toast.error("Internal Error")
                    }
        
                }catch(e){
                    console.log(e.message);
                    toast.error("Internal Error");
                }
            }else{
                toast.error("Please Select a PDF file of upto 5 MB")
                
                
            }
          }else{
            console.log("please choose a file")
            toast.error("Please chose a file")
          }
       
    }

    return (
        <div className="page-component__bg_image_box bg-light_gray-color first_component">
            <div className="page-component__bg_overlay_box"  />
            <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: '70px', paddingBottom: '70px' }}>
                <header className="header-03">
                    <div className="header-03__box">
                        <div className="header-03__overlay">
                            <div className="container container--mid header-03__container">
                                <div className="header-03__card_holder">
                                    <div className="header-03__card header-03__card--bottom" />
                                    <div className="header-03__card header-03__card--middle" />
                                    <div className="header-03__card header-03__card--top">
                                        <div className="header-03__card_content">
                                            <h1 className="heading heading--accent header-03__heading">
                                                Student's Data Upload Center
                                            </h1>
                                            <div className="header-03__text content_box">
                                                Here professors can upload student's data such as name,
                                                company name, year, pdf, etc, and upload these data to
                                                the college server.
                                            </div>
                                            <div className="header-03__buttons">
                                                <form className="form form--centered-button js-no-integration-form" onSubmit={handleSubmit}>
                                                    <div className="form__inputs">
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Student Name
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="text"  required placeholder="Enter your full name" onChange={(e)=>{
                                                                setName(e.target.value)
                                                            }} />
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" >
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Upload File
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="file"
                                                                accept="application/pdf"
                                                               required placeholder="Select a file" onChange={(e)=>{
                                                                setFile(e.target.files[0]);
                                                               }} />
                                                               
                                                        </div>
                                                        <div className="form__input form__input--full">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Erollment:
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="text" required placeholder="Enrollment No" onChange={(e)=>{
                                                                setEnrollment(e.target.value);
                                                            }}/>
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" >
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Type
                                                                </label>
                                                            </div>
                                                            <select required className="text-input"  onChange={(e) => setType(e.target.value)} >

                                                                <option >Inhouse</option>
                                                                <option >Minor</option>
                                                                <option>Major</option>
                                                                <option>Inside</option>
                                                                <option>Outside</option>
                                                            </select>
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" >
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Teacher
                                                                </label>
                                                            </div>
                                                            <select required className="text-input" name="role"  onChange={(e) => setCreator(e.target.value)} >

                                                                <option >Sanigdha Acharya</option>
                                                                <option >Arinjay Kumar</option>
                                                                <option >Azad Singh</option>
                                                                <option >Dinesh Kumar</option>
                                                                <option >Deepak Garg</option>
                                                                <option >Monisha M Mondal</option>
                                                                <option>Rakesh Angira</option>
                                                                <option >Vinay Shah</option>
                                                                <option >Vinita Khandegar</option>
                                                                <option >Aradhna Srivastava</option>
                                                                <option >Biswajit Sarkar</option>
                                                                <option >U.K. Mondal</option>
                                                                <option >Tapan Sarkar</option>
                                                                <option >S.K. Sharma</option>
                                                                <option >Neeru Anand</option>
                                                            </select>
                                                        </div>
                                                        <div className="form__input form__input--full">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" >
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Company
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="text"  name="company_name" required placeholder="Enter the company name(NA if Inhouse)" onChange={(e)=>{
                                                                setCompany(e.target.value)
                                                            }} />
                                                        </div>
                                                        <div className="form__input form__input--full">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="company_name-97755-2">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Semester
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="number" id="company_name-97755-2" name="company_name" required placeholder="Enter semester" onChange={(e)=>{
                                                                setSemester(e.target.value);
                                                            }}/>
                                                        </div>
                                                        <div className="form__input form__input--full">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="graduation_year-97755-3">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Year
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="number" required placeholder="Enter the graduation year"  onChange={(e)=>{
                                                                setYear(e.target.value);
                                                            }}/>
                                                        </div>
                                                        <div className="form__button form__button--full">
                                                            <button className="button js-submit-button button--accent-outline" type="submit" style={{borderStyle: "solid", borderColor: "#900"}}>
                                                                <span className="button__text" style={{color :"#900"}}>Upload</span>
                                                                <div className="spinner" />
                                                                <div className="button__submit_success">
                                                                    <div className="button__success_circle" />
                                                                    
                                                                </div>
                                                                 </button>
                                                                 <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                                                        </div>
                                                       
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default UploadPerformance