import React, { useState } from "react";
import data from "./Footerdata";
import { Link } from "react-router-dom";

const Footer = () => {
  const [info] = useState(data);
  return (
    <section className="footerSection">
      <footer className="footer">
        <div className="footer-logo-info">
          {info.map((Info, infoIndex) => {
            const { title, List } = Info;
            return (
              <div className="footer-info" key={infoIndex}>
                <h5>{title}</h5>
                <div className="footer-info-list">
                  {/* the && operator is used to check if info.List exists before rendering it. */}
                  {List &&
                    List.map((Infolist, listIndex) => {
                      const { list, to } = Infolist;
                      return (
                        <ul key={listIndex}>
                          <li>
                            <a href={to}>{list}</a>
                          </li>
                        </ul>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
        <hr />

        <div className="tail-details">
          <div className="Footer-logo-Cont">
            <div className="Footer-logo">
              <div className="Footer-First-Circle"></div>
              <div className="Footer-Second-Circle"></div>
            </div>
            <div className="Text">
              <h5>ShowRoom</h5>
            </div>
          </div>
          <p>&copy; 2023 ShowRoom. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
