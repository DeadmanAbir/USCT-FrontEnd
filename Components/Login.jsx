import { useState } from 'react'
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { admin, superAdmin } from '../Store/Atoms';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login({ checkState }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const setSuperAdmin = useSetRecoilState(superAdmin);
    const setAdmin = useSetRecoilState(admin);
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
            const check = await axios.get(`https://usct-backend.onrender.com/check/authorization/email=${email}`);
            if (check.data.authorized) {
                const user = await fetchSignInMethodsForEmail(auth, email);
console.log(user);
                if (user.length > 0) {
                    // user exists means login
                  
                    signin();

                } else {

                    register(check.data.name);

                }
            } else {
                toast.error("Not Authorized")
            }
        } catch (e) {
            console.log(e);
        }

    }

    async function register(name) {

        try {
            if (email == "Angira096@gmail.com") {

                const data = await createUserWithEmailAndPassword(auth, email, password);
                const update = await updateProfile(auth.currentUser, {
                    displayName: name
                })

                setAdmin({
                    isAdmin: true,
                });
                localStorage.setItem('isAdmin', 'true');

                navigate("/inhouse");
                window.location.reload();

            } else {

try{
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const update = await updateProfile(auth.currentUser, {
        displayName: name
    })
    const response = await axios.post(`https://usct-backend.onrender.com/check/superadmin`, {
        email: email
    });

    if (response.data === true) {
        setSuperAdmin({
            isSuperAdmin: true,
        });
        localStorage.setItem('isSuperAdmin', 'true');

        navigate("/superadminportal");
    } else {
        // Handle the case where the email is not a superadmin
        navigate("/inhouse");
        window.location.reload();

    }
}catch(e){
    console.log(e.code);
    toast.error(e.code);
}
            }
        } catch (e) {

            console.log(e);
        }
    }


    async function signin() {
        try {
            if (email == "rakeshangira@ipu.ac.in") {


                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                setAdmin({
                    isAdmin: true,
                })
                localStorage.setItem('isAdmin', 'true');

                navigate("/inhouse")
                window.location.reload();

            } else {
                try{
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                

                const response = await axios.post(`https://usct-backend.onrender.com/check/superadmin`, {
                    email: email
                });
                if (response.data === true) {
                    setSuperAdmin({
                        isSuperAdmin: true,
                    });
                    localStorage.setItem('isSuperAdmin', 'true');


                    navigate("superadminportal");
                } else {

                    navigate("/inhouse")
                    window.location.reload();
                }
            }catch(e){
                console.log(e.code);
                toast.error(e.code);
            }

            }



        } catch (e) {
            console.log(e.message);

        }

    }

    if (checkState) {

        return ("")
    }
    return (

        <div className="page-component__bg_image_box bg-light_gray-color" id="cta_form-03-690461" style={{ paddingRight: "70px" }}>
            <div className="page-component__bg_overlay_box" >
            </div>
            <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: '70px', paddingBottom: '70px' }}>
                <div className="cta_form-03 False">
                    <div className="container container--mid">
                        <div className="cta_form-03__wrapper">
                            <div className="cta_form-03__heading_box">
                                <h2 className="cta_form-03__heading">Teacher Login</h2>
                                <div className="cta_form-03__text content_box">
                                    Login with your authorized email to submit student's performance.
                                </div>
                            </div>
                            <div className="cta_form-03__form_box">
                                <form className="form js-no-integration-form" onSubmit={login}>
                                    <div className="form__inputs">
                                        <div className="form__input">
                                            <div className="form__input__label_box">
                                                <label className="form__input__label" htmlFor="EMAIL-97552-0">
                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                    Enter your authorized email:
                                                </label>
                                            </div>
                                            <input className="text-input js-form-input" type="email" id="EMAIL-97552-0" name="EMAIL" required
                                                placeholder="teacher@ipu.ac.in" onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }} />
                                        </div>
                                        <div className="form__input">
                                            <div className="form__input__label_box">
                                                <label className="form__input__label" htmlFor="PASSWORD-97552-1">
                                                    <span className="form__input__label_asterix" title="This field is required.">*</span>
                                                    Password
                                                </label>
                                            </div>
                                            <input className="text-input js-form-input" type="password" id="PASSWORD-97552-1" name="PASSWORD"
                                                required placeholder="Enter your password" onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }} />
                                        </div>
                                        <div className="form__button">
                                            <button className="button js-submit-button button--alt-accent-outline" type="submit" style={{ borderColor: "#900" }} >
                                                <span className="button__text" style={{ color: "#900" }}>Login</span>
                                                <div className="spinner"></div>
                                                <div className="button__submit_success">
                                                    <div className="button__success_circle "></div>

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


    )
}

export default Login