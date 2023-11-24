import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Studentcard({ enrollment, studentName, year, company, semester, id }) {
    const [selectedFile, setSelectedFile] = useState(null);
    async function fileUpload() {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append("courseId", id);
        try {
            const response = await axios.put('https://usct-backend.onrender.com/drive/upload/pdf', formData);
            console.log("File uploaded successfully");
            //console.log(response.data.webContentLink);
            toast.success("File uploaded successfully");
        } catch (e) {
            console.error(e);
            toast.error(e.message);
        }
    }


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
                setSelectedFile(file);
            } else {
                alert('Please select a PNG file of up to 5MB.');
                toast.error('Please select a PNG file of up to 5MB.')
                event.target.value = ''; // Clear the file input
            }
        }
    };

    return (
        <div className="container container--large">
            <div className="posts-05__wrapper">
                <div className="posts-05__item">

                    <div className="posts-05__text">
                        <h3 className="posts-05__title">
                            {studentName}<span className="posts-05__title_info" style={{ fontWeight: "900" }}>{company}</span>
                        </h3>
                        <div className="posts-05__info content_box">
                            {year}
                        </div>
                        <div className="posts-05__info content_box">
                            Enrollment - {enrollment}
                        </div>
                        <div className="posts-05__info content_box">
                            Semester - {semester}
                        </div>
                        <div className="posts-05__link">
                            <div className="feature__button_box">
                                <input type="file" accept='.pdf' onChange={handleFileChange} />
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
                                <a className="button button--empty button--accent-outline" onClick={fileUpload}>
                                    <span className="button__text" style={{ color: "#900" }}>Upload PDF</span>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Studentcard