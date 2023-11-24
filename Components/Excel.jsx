import React, {useState} from 'react'
import axios from 'axios';
function Excel() {
    const [file, setFile] = useState(null);
    const[semester, setSemester]=useState(5);
    const[teacher, setTeacher]=useState("Sangidhya Acharya");
    const[type, setType]=useState("Inhouse");

    const handleFileUpload = async (event) => {
        event.preventDefault();
    
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('teacherName', teacher);
        formData.append('type', type);
        formData.append('sem', semester);
    
        try {
          const response = await axios.post('https://usct-backend.onrender.com/excel/upload', formData);
          console.log(formData)
          console.log('Filtered Data:', response.data);
          const data=response.data;
          const date=new Date().getFullYear();
          if(data.length>0){
            // const type=data[0].Type;
            for(let i=0; i<data.length; i++){
                const credentials={
                    name: data[i]['Your Name'], // Access property with bracket notation
                    enrollment: data[i]['Enrollment Number'], // Access property with bracket notation
                    semester: data[i]['Semester'], // Access property with bracket notation
                    creator: data[i]['Your Assigned Mentor'], // Access property with bracket notation
                    company: data[i]['Internship Company'],
                    year: date,
                    url: null
                }
                console.log(credentials);
                const upload =await axios.post(`https://usct-backend.onrender.com/create/students/${type.toLowerCase()}`, credentials)
              }
          }
          console.log("Sucessfull!!")
       
          // Display the filtered data on your frontend
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

    return (
        <div className="page-component__bg_image_box bg-light_gray-color first_component" id="header-03-606321">
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
                                                <form className="form form--centered-button js-no-integration-form"  onSubmit={handleFileUpload}>
                                                    <div className="form__inputs">

                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="file_upload-97755-1">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Upload File
                                                                </label>
                                                            </div>
                                                            <input className="text-input js-form-input" type="file"
                                                                accept=".xlsx"
                                                                 required placeholder="Select a file" 
                                                                 onChange={(e)=>{
                                                                    setFile(e.target.files[0]);
                                                                 }}/>
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="role-96694-0">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Teacher
                                                                </label>
                                                            </div>
                                                            <select required className="text-input" name="role" id="role-96694-0" onChange={(e) => setTeacher(e.target.value)} >

                                                            <option >Sangidhya Acharya</option>
                                                                <option >Arinjay Kumar</option>
                                                                <option >Azad Singh</option>
                                                                <option >Dinesh Kumar</option>
                                                                <option >Deepak Garg</option>
                                                                <option >Monisha M Mondal</option>
                                                                <option>Rakesh Angira</option>
                                                                <option >Vinay Shah</option>
                                                                <option >Vinita Khandegar</option>
                                                                <option >Aradhana Srivastava</option>
                                                                <option >Biswajit Sarkar</option>
                                                                <option >U.K. Mondal</option>
                                                                <option >Tapan Sarkar</option>
                                                                <option >S.K. Sharma</option>
                                                                <option >Neeru Anand</option>
                                                            </select>
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="role-96694-0">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Semester
                                                                </label>
                                                            </div>
                                                            <select required className="text-input" name="role" id="role-96694-0" onChange={(e) => setSemester(e.target.value)} >

                                                                <option >5</option>
                                                                <option >7</option>
                                                                <option >8</option>
                                                            </select>
                                                        </div>
                                                        <div className="form__input">
                                                            <div className="form__input__label_box">
                                                                <label className="form__input__label" htmlFor="role-96694-0">
                                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                                    Type
                                                                </label>
                                                            </div>
                                                            <select required className="text-input" name="role" id="role-96694-0" onChange={(e) => setType(e.target.value)} >

                                                                <option >Inhouse</option>
                                                                <option >Minor</option>
                                                                <option>Major</option>
                                                                <option>Inside</option>
                                                                <option>Outside</option>
                                                            </select>
                                                        </div>

                                                        <div className="form__button form__button--full">
                                                            <button className="button js-submit-button button--accent-outline" type="submit" style={{ borderStyle: "solid", borderColor: "#900" }}>
                                                                <span className="button__text" style={{ color: "#900" }}>Upload</span>
                                                                
                                                            </button>
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

export default Excel