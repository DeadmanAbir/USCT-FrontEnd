import React from 'react'
function Footer() {
  return (
    <div className="bg-custom-color text-white">
  <footer className="footer-02" id="footer" style={{ backgroundColor: '#990000' }}>
    <div className="container">
      <div className="footer-02__wrapper">
        <div className="footer-02__text content_box">
          &copy; 2023&nbsp;
          <p>
            <strong>University School of Chemical Technology</strong>
          </p>
        </div>
        <div className="social-buttons">
          <ul className="social-buttons__list">
            <li className="social-buttons__item">
              <a className="social-buttons__link social-buttons__link--instagram"
                 href="https://www.instagram.com/usct_ggsipu/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <img loading="lazy" className="social-buttons__icon" alt="instagram icon"
                     src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/instagram.svg" />
              </a>
            </li>
            <li className="social-buttons__item">
              <a className="social-buttons__link social-buttons__link--facebook"
                 href="https://www.facebook.com/USCTIPU" target="_blank">
                <img loading="lazy" className="social-buttons__icon" alt="facebook icon"
                     src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/facebook.svg" />
              </a>
            </li>
            <li className="social-buttons__item">
              <a className="social-buttons__link social-buttons__link--linkedin"
                 href="https://www.linkedin.com/company/training-and-placement-cell-usct-ggsipu/" target="_blank">
                <img loading="lazy" className="social-buttons__icon" alt="linkedin icon"
                     src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/linkedin.svg" />
              </a>
            </li>
            <li className="social-buttons__item">
              <a className="social-buttons__link social-buttons__link--edu"
                 href="http://www.ipu.ac.in/usct/index.php" target="_blank">
                <img loading="lazy" className="social-buttons__icon" alt="edu icon"
                     src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/link.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Footer