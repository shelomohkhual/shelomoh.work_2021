import React from "react";
import ProductPreview from "./product-preview";
import { FluidObject } from "gatsby-image";
import ProductDetail from "./product-detail";
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

export interface ProductCategoryInterface {
  categoryName: string;
}

export interface FileDetailInteface {
  files: string;
  format: string;
  compatible: string;
}

export interface ProductInterface {
  slug: string;
  title: string;
  images: FluidObject[];
  categories: ProductCategoryInterface[];
  shortDes: string;
  des: string;
  fileDetail: FileDetailInteface;
  price: number;
  purchaseTerm: string;
}

// [isMiddle] return bool of the current index
// is middle between three colums
function isMiddle(index: number) {
  var middle = false;
  var temp = index;

  while (true) {
    if (temp === 1) {
      middle = true;
      break;
    }
    if (temp < 1) {
      middle = false;
      break;
    }
    temp -= 3;
  }
  return middle;
}

function renderListOfProducts(productList: ProductInterface[]) {
  if (productList) {
    return (
      <div
        className="product-list-view-container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {productList.map((product: ProductInterface, index: number) => (
          <ProductPreview
            key={product.slug}
            product={product}
            isMiddle={isMiddle(index)}
          />
        ))}
      </div>
    );
  }
}
function renderProductDetail(product: ProductInterface) {
  if (product) {
    return <ProductDetail product={product} />;
  }
}

export const ProductViewContainer = ({
  path = "",
  productList = null,
  product = null,
}) => {
  return (
    <div className="product-container">
      <span>
        <TransitionLink fade to="/shop">
          All Products
        </TransitionLink>
        {path}
      </span>
      <hr className="divider" />

      {product
        ? renderProductDetail(product)
        : renderListOfProducts(productList)}
    </div>
  );
};
export default ProductViewContainer;
