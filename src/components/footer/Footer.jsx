import React from 'react';
import styles from "./Footer.module.scss";
import img1 from "../../assets/images/email.svg";
import img2 from "../../assets/images/phone.svg"
import inst from "../../assets/images/instagram.webp";
import link from "../../assets/images/linkedin.webp";
import tweet from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import facebook from "../../assets/images/facebook.png"
const Footer = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.row}>
                <h5>About</h5>

                <p>Our Story</p>
                <p>Our Blog</p>
                <p>Careers</p>
                <p>Gurus</p>

            </div>
            <div className={styles.row}>
                <h5>Quick Links</h5>

                <p>Projects in Pakistan</p>
                <p>Project in Karachi</p>
                <p>Project in Islamabad</p>
                <p>Project in Lahore</p>
            </div>
            <div className={styles.row}>
                <h5>Contact Us</h5>
                <div className={styles.icon_img}>
                    <img src={img1} alt="email" />
                    <p>info@graana.com</p>
                </div>
                <div className={styles.icon_img}>
                    <img src={img2} alt="phone num" />
                    <p>111-555-555</p>
                </div>
            </div>
            <div className={styles.row}>
                <h5>Follow Us</h5>
                <div className={styles.img}>
                    <img src={inst} alt="instagram" />
                    <img src={link} alt="linkdin" />
                    <img src={tweet} alt="tweeter" />
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                </div>           
            </div>
            
        </div>
        <div className={styles.footer}>
                <p>Copyright 2023 Graana. All rights reserved</p>
                <p>Terms & Conditions | Privacy Policy | Disclaimer</p>
        </div>
        </>
    )
}

export default Footer;