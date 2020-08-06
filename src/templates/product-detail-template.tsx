import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import HeadingBar from "../components/heading-bar";
import ProductViewContainer, {
  ProductInterface,
} from "../components/product-view-container";

function jsonToProductInterface(json: any) {
  if (json) {
    var product: ProductInterface = {
      slug: json.slug,
      title: json.title,
      images: json.images.map((img) => img.childImageSharp.fluid),
      categories: json.categories.map((c) => {
        return { categoryName: c.category_name };
      }),
      shortDes: json.short_description,
      des: json.description,
      fileDetail: json.file_detail,
      price: json.price,
      purchaseTerm: json.purchase_term,
    };

    return product;
  }
}

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      categories {
        category_name
      }
      file_detail {
        compatible
        files
        format
      }
      title
      slug
      price
      purchase_term
      description
      short_description
      images {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
const ProductDetailTemplate = ({ data }) => {
  const product: ProductInterface = jsonToProductInterface(data.productsJson);

  return (
    <Layout
      page={{
        pageTitle: "shop",
        pageHeading: "Shelomoh Shop",
        pageDes: "place where i sell stuff",
        slug: "shop",
      }}
    >
      <HeadingBar key="shop" title="shop">
        <h3>SHOWING</h3>

        <li>
          <a>All Products</a>
        </li>
        <li>
          <a>Freebies</a>
        </li>
        <li>
          <a>Wallpaper</a>
        </li>
        <li>
          <a>Lightroom Presets</a>
        </li>
      </HeadingBar>
      <ProductViewContainer
        path={` > ${product.categories[0].categoryName} > ${product.slug}`}
        product={product}
      />
    </Layout>
  );
};

export default ProductDetailTemplate;
