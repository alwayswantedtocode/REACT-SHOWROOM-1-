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
      <section className="fixed-hero-container">
        <div className="fixed-hero-image">
          <img src="./images/LEXUS/Lexus head.png" alt="lexus Head" />
        </div>
      </section>
      <section className="showroom-section">
        <div className="showroom-header">
          <p>LEXUS SHOWROOM</p>
        </div>
        {/* Tab Navigation */}
        <nav className="tab-nav-cont">
          {LexusCategory.map((tablist, index) => {
            const { tab, id } = tablist;
            return (
              <button
                className={`tab-nav ${
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
        {/* Tab Navigation Images */}
        <article className="tabSlide-cont">
          {LexusCategory.map((items, itemIndex) => {
            const { subcat } = items;
            return (
              <div
                className={`tabSlide ${
                  activeLexusTab === itemIndex ? "active" : ""
                }`}
                key={itemIndex}
              >
                {subcat &&
                  subcat.map((category, infoIndex) => {
                    const { Image, Names, Explore, ArrowIcon } = category;
                    return (
                      <div
                        className={`category-container ${
                          activeLexusCategory === infoIndex ? "active" : ""
                        }`}
                        key={infoIndex}
                        onClick={() => handleCategoryClick(infoIndex)}
                      >
                        <div className="category">
                          <img src={Image} alt={Names} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </article>
        {/* Tab Content Slide */}
        <article className="Image-category-container">
          {LexusCategory.map((imageList, imageListIndex) => {
            const { catImage } = imageList;
            return (
              <div
                className={`Image-category ${
                  activeLexusTab === imageListIndex ? "active" : ""
                }`}
                key={imageListIndex}
              >
                <div className="images-container">
                  {catImage &&
                    catImage.map((images, imageIndex) => {
                      const { image, name, explore, year, quote } = images;
                      return (
                        <div
                          className={`images ${
                            activeLexusCategory === imageIndex ? "active" : ""
                          }`}
                          key={imageIndex}
                        >
                          <img src={image} alt={name} />

                          <div className="images-details">
                            <div className="images-description">
                              <p>{year}</p>
                              <h2>{name}</h2>
                            </div>
                            <div className="explore-images">
                              <p>{quote}</p>
                              <button className="explore-btn">{explore}</button>
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ipsum
        voluptas aut possimus delectus. Commodi recusandae aliquid dolorum, eum,
        amet aspernatur velit sint illum cum earum cupiditate pariatur nam
        dicta?
      </p>
    </main>
  );
};

export default LexusPage;
