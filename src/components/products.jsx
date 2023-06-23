import React, { useState } from "react";
import data from "../json/data.json";
import {Fade} from 'react-reveal'

function Products() {
  const [filter, setFilter] = useState("main-menu");

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find delicious food and <br />
          choose what you love
        </h2>

        <ul className="products__filters">
          <li
            className="products__item products__line active-product"
            onClick={() => setFilter("main-menu")}
            data-filter=".delicacies"
          >
            <h3 className="products__title">Main Menu</h3>
            <span className="products__stock">4 products</span>
          </li>
          <li className="products__item products__line" 
          onClick={()=> setFilter('coffee')}
          data-filter=".coffee">
            <h3 className="products__title">Coffee</h3>
            <span className="products__stock">3 products</span>
          </li>
          <li className="products__item" 
          onClick={()=> setFilter('desserts')}
          data-filter=".cake">
            <h3 className="products__title">Desserts</h3>
            <span className="products__stock">4 products</span>
          </li>
        </ul>

        <div className="products__content grid">
          {data.categories.map((category, index) => {
            return (
              category.category===filter && 
              (<Fade key={index} bottom delay={10*index}>
              <article className="products__card dessert">
              <div className="products__shape">
                <img
                  src={category.imageUrl}
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">{category.price}</h2>
                <h3 className="products__name">{category.title}</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            </Fade>
            ));
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
