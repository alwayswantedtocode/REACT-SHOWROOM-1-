import React, { useState } from "react";
import "../BrandPages.css";
import MercedesCategory from "./Data";

const MercedesPage = () => {
  const [activeMercedesTab, setActiveMercedesTab] = useState(0);
  const [ActiveMercedesCategory, setActiveMercedesCategory] = useState(0);

  const handleTabClick = (index) => {
    setActiveMercedesTab(index);
    setActiveMercedesCategory(0); // reset the category index when switching tabs
  };

  const handleCategoryClick = (index) => {
    setActiveMercedesCategory(index);
  };

  return (
    <main className="main-container">
      <section className="fixed-hero-container">
        <div className="fixed-hero-image">
          <img src="./images/BENZ/Mercedes head.png" alt="Mercedes Head" />
        </div>
      </section>
      <section className="showroom-section">
        <div className="showroom-header">
          <p>MERCEDES SHOWROOM</p>
        </div>
        <nav className="tab-nav-cont">
          {MercedesCategory.map((tablist, index) => {
            const { tab, id } = tablist;
            return (
              <button
                className={`tab-nav ${
                  activeMercedesTab === index ? "active-tab" : ""
                }`}
                key={id}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            );
          })}
        </nav>
        <article className="tabSlide-cont">
          {MercedesCategory.map((items, itemIndex) => {
            const { subcat } = items;
            return (
              <div
                className={`tabSlide ${
                  activeMercedesTab === itemIndex ? "active" : ""
                }`}
                key={itemIndex}
              >
                {subcat &&
                  subcat.map((category, infoIndex) => {
                    const { Image, Names, Explore, ArrowIcon } = category;
                    return (
                      <div
                        className={`category-container ${
                          ActiveMercedesCategory === infoIndex ? "active" : ""
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
        <article className="Image-category-container">
          {MercedesCategory.map((imageList, imageListIndex) => {
            const { catImage } = imageList;
            return (
              <div
                className={`Image-category ${
                  activeMercedesTab === imageListIndex ? "active" : ""
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
                            ActiveMercedesCategory === imageIndex
                              ? "active"
                              : ""
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
    </main>
  );
};

export default MercedesPage;
