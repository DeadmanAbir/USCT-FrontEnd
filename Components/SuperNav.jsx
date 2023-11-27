import React from 'react'
import logo from "../Images/ggsipu logo.png";
import { getState } from '../Store/Getters';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { superAdmin } from '../Store/Atoms';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
function SuperNav() {
  const isConnected = useRecoilValue(getState);
  const setSuperAdmin = useSetRecoilState(superAdmin);
  const navigate = useNavigate();
  async function logout() {
    try {
      const response = await signOut(auth);
      setSuperAdmin({
        isSuperAdmin: false,
      });
      localStorage.setItem('isSuperAdmin', 'false');
      return navigate("/");

    } catch (e) {
      console.log(e);
    }

  }
  return (

    <nav className="js-nav nav-02  nav-02--sticky  nav-02--sticky--white" >
      <div className="container container--large">
        <div className="nav-02__box">
          <div className="nav-02__logo">
            <Link className="nav-02__link" to="/">
              <img
                className="nav-02__logo_img"
                height="43"
                alt="Ggsiu logo.svg"
                src={logo}
                srcSet="https://unicorn-cdn.b-cdn.net/a9b2968c-d969-4935-a33a-c46675645c97/ggsiu-logo.svg.png?width=49&amp;height=43 49w,https://unicorn-cdn.b-cdn.net/a9b2968c-d969-4935-a33a-c46675645c97/ggsiu-logo.svg.png?width=98&amp;height=86 98w,https://unicorn-cdn.b-cdn.net/a9b2968c-d969-4935-a33a-c46675645c97/ggsiu-logo.svg.png?width=147&amp;height=129 147w"
                sizes="49px"
              />
              <span className="nav-02__logo_text">University School of Chemical Technology</span>
            </Link>
          </div>
          <div className="nav-02__links js-menu">
            <div className="nav-02__list_wrapper">
              <ul className="nav-02__list nav-02__list--desktop">
                <li className="nav-02__item">
                  <Link className="button button--black-outline button--empty" to="/">
                    <span className="button__text">Home</span>
                  </Link>
                </li>
                <li className="nav-02__item">
                  <a className="button button--black-outline button--empty" href="http://www.ipu.ac.in/usct/index.php" target="_blank">
                    <span className="button__text">About Us</span>
                  </a>
                </li>

                <li className="nav-02__item">
                  <Link className="button button--black-outline button--empty" to="/superadminportal">
                    <span className="button__text">Portal</span>
                  </Link>
                </li>
                <li className="nav-02__item">
                  <Link className="button button--black-outline button--empty" >
                    <span className="button__text">Add Teachers</span>
                  </Link>
                </li>
                {isConnected ? (<li className="buttons-set__item" >
                  <Link onClick={logout} data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" to="/" style={{ borderStyle: "solid", borderColor: "#900" }}><span className="button__text" style={{ color: "#900", borderColor: "#900" }}>Logout</span></Link>
                </li>) : null}
                <li className="nav-02__item">{/* Add your content here */}</li>
              </ul>
              <ul className="nav-02__list nav-02__list--mobile">
                <li className="nav-02__item">
                  <Link className="button button--black-outline button--empty" to="/">
                    <span className="button__text">Home</span>
                  </Link>
                </li>
                <li className="nav-02__item">
                  <a className="button button--black-outline button--empty" href="http://www.ipu.ac.in/usct/index.php" target="_blank">
                    <span className="button__text">About Us</span>
                  </a>
                </li>

                {isConnected ? (<li className="buttons-set__item" >
                  <Link onClick={logout} data-stripe-product-id data-stripe-mode="payment" data-successful-payment-url data-cancel-payment-url className="button button--accent-outline" style={{ borderStyle: "solid", borderColor: "#900" }}><span className="button__text" style={{ color: "#900", borderColor: "#900" }}>Logout</span></Link>
                </li>) : null}

              </ul>
            </div>
            <div className="nav-02__burger">
              <button className="burger burger--black js-open-menu" type="button">
                <div className="burger__box">
                  <div className="burger__inner"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default SuperNav