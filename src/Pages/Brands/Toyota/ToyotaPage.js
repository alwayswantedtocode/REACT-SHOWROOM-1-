import React, { useState } from "react";
import "../BrandPages.css";
import ToyotaCategory from "./Data";

const ToyotaPage = () => {
  const [activeToyotaTab, setActiveToyotaTab] = useState(0);
  const [activeToyotaCategory, setActiveToyotaCategory] = useState(0);

  const handleTabClick = (index) => {
    setActiveToyotaTab(index);
    setActiveToyotaCategory(0); // reset the category index when switching tabs
  };

  const handleCategoryClick = (index) => {
    setActiveToyotaCategory(index);
  };
  return (
    <main className="main-container">
      <section className="fixed-hero-container">
        <div className="fixed-hero-image">
          <img src="./images/TOYOTAL/Toyota head.png" alt="Toyota Head" />
        </div>
      </section>
      <section className="showroom-section">
        <div className="showroom-header">
          <p>TOYOTA SHOWROOM</p>
        </div>
        <nav className="tab-nav-cont">
          {ToyotaCategory.map((tablist, index) => {
            const { tab, id } = tablist;
            return (
              <button
                className={`tab-nav ${
                  activeToyotaTab === index ? "active-tab" : ""
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
          {ToyotaCategory.map((items, itemIndex) => {
            const { subcat } = items;
            return (
              <div
                className={`tabSlide ${
                  activeToyotaTab === itemIndex ? "active" : ""
                }`}
                key={itemIndex}
              >
                {subcat &&
                  subcat.map((category, infoIndex) => {
                    const { Image, Names, Explore, ArrowIcon } = category;
                    return (
                      <div
                        className={`category-container ${
                          activeToyotaCategory === infoIndex ? "active" : ""
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
          {ToyotaCategory.map((imageList, imageListIndex) => {
            const { catImage } = imageList;
            return (
              <div
                className={`Image-category ${
                  activeToyotaTab === imageListIndex ? "active" : ""
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
                            activeToyotaCategory === imageIndex ? "active" : ""
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

export default ToyotaPage;
