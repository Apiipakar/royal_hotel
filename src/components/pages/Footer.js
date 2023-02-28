import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer>
      <div className="row-footer">
        <div className="first_section">
          <h2>
            R
            <small>
              oyal <span>Hotel</span>
            </small>
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
            impedit eaque autem unde fuga tenetur veniam? Unde ut excepturi est
            error sint, repudiandae, officiis qui accusantium veritatis tempora
            beatae iure facere vero? Cupiditate unde quibusdam ducimus!
            Reprehenderit, velit facilis.
          </p>
          <p className="paragraph">
            Royal hotel prepares you all your wishes and imaginations <br />
            so be sur e that there is no place like royal hotel
          </p>
          <h5 className="our">
            " our responsibility is your <span>satisfaction</span> "
          </h5>
          <div className="social">
            <h4>social</h4>
            <div className="list">
              <span>
                <FaFacebook className="social_icons" /> Facebook
              </span>
              <span>
                <FaTwitter className="social_icons" /> twitter
              </span>
              <span>
                <FaInstagram className="social_icons" /> instagram
              </span>
              <span>
                <FaYoutube className="social_icons" /> youtube
              </span>
            </div>
          </div>
        </div>
        <div className="second_section">
          <div className="links">
            <h4>company</h4>
            <span>protocol</span>
            <span>security</span>
            <span>blog</span>
            <span>developer</span>
            <span>guide</span>
          </div>
          <div className="links">
            <h4>Links</h4>
            <span>Home</span>
            <span>About</span>
            <span>contact</span>
            <span>service</span>
            <span>guide</span>
          </div>
        </div>
      </div>
      <div className="full_line"></div>
      <h5 className="h5">@copyright 2023 | made by : apiipakar_mohamoud</h5>
    </footer>
  );
};
