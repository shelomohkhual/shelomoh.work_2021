import React from "react";
import Img from "gatsby-image";
import {
  ProductCategoryInterface,
  ProductInterface,
} from "./product-view-container";
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

const ProductPreview = ({ product, isMiddle }) => {
  const p: ProductInterface = product;
  return (
    <div
      key={p.slug}
      className="product-preview-container"
      style={{
        margin: isMiddle === true ? "0px 12px 60px" : "0px 0px 60px",
      }}
    >
      <TransitionLink key={p.slug} fade to={`/shop/${product.slug}/`}>
        <Img fluid={p.images[0]} className="product-preview-image" />
        <h2
          style={{
            fontWeight: "normal",
            fontSize: "20px",
            margin: "14px 0px 3px",
          }}
        >
          {p.title}
        </h2>
        <p style={{ fontSize: "14px", opacity: "0.6" }}>{p.shortDes}</p>
        {p.categories.map(
          (category: ProductCategoryInterface, index: number) => {
            return (
              <p
                key={index}
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "10px 0px",
                  opacity: "0.5",
                }}
              >
                {category.categoryName}
              </p>
            );
          }
        )}
        <p style={{ fontSize: "16px", margin: "10px 0px" }}>$ {p.price}</p>
      </TransitionLink>
    </div>
  );
};

export default ProductPreview;
