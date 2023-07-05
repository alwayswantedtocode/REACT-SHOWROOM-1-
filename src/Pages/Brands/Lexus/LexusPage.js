import React, { useState } from "react";
import "../BrandPages.css";
import LexusCategory from "./Data";

const LexusPage = () => {
  const [activeLexusTab, setActiveLexusTab] = useState(0);
  const [activeLexusCategory, setActiveLexusCategory] = useState(0);

  const handleTabClick = (index) => {
    setActiveLexusTab(index);
    setActiveLexusCategory(0); // reset the category index when switching tabs
  };

  const handleCategoryClick = (index) => {
    setActiveLexusCategory(index);
  };
  return (
    <main className="main-container">
      <section className="Fixed-Hero-Container">
        <div className="Fixed-Hero-Image">
          <img src="./images/LEXUS/Lexus head.png" alt="lexus Head" />
        </div>
      </section>
      <section className="Showroom-Section">
        <div className="Showroom-Header">
          <p>LEXUS SHOWROOM</p>
        </div>
        {/* Tab Navigation--Category */}
        <nav className="Nav-Tab-Cont">
          {LexusCategory.map((tablist, index) => {
            const { tab, id } = tablist;
            return (
              <button
                className={`Nav-Tab ${
                  activeLexusTab === index ? "active-tab" : ""
                }`}
                key={id}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {/* Tab Navigation--Active Category */}
        <article className="Active-Cat-cont">
          {LexusCategory.map((items, itemIndex) => {
            const { subcat } = items;
            return (
              <div
                className={`Cat-Tab-Slide ${
                  activeLexusTab === itemIndex ? "active" : ""
                }`}
                key={itemIndex}
              >
                {subcat &&
                  subcat.map((category, infoIndex) => {
                    const { Image, Names } = category;
                    return (
                      <div
                        className={`Category-Container ${
                          activeLexusCategory === infoIndex ? "active" : ""
                        }`}
                        key={infoIndex}
                        onClick={() => handleCategoryClick(infoIndex)}
                      >
                        <div className="Category">
                          <img src={Image} alt={Names} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </article>
        
        {/* Image Category Slide */}
        <article className="Image-Cat-Cont">
          {LexusCategory.map((imageList, imageListIndex) => {
            const { catImage } = imageList;
            return (
              <div
                className={`Active-Cat-Image ${
                  activeLexusTab === imageListIndex ? "active" : ""
                }`}
                key={imageListIndex}
              >
                <div className="Images-Container">
                  {catImage &&
                    catImage.map((images, imageIndex) => {
                      const { image, name, explore, year, quote } = images;
                      return (
                        <div
                          className={`Images ${
                            activeLexusCategory === imageIndex ? "active" : ""
                          }`}
                          key={imageIndex}
                        >
                          <img src={image} alt={name} />

                          <div className="Images-Details">
                            <div className="Images-Description">
                              <p>{year}</p>
                              <h2>{name}</h2>
                            </div>
                            <div className="Explore-Images">
                              <p>{quote}</p>
                              <button className="Explore-Btn">{explore}</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default LexusPage;
