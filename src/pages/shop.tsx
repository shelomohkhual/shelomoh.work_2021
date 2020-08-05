import Layout from "../components/layout";
import React from "react";
import HeadingBar from "../components/heading-bar";
import ProductViewContainer, {
  ProductInterface,
} from "../components/product-view-container";
import { useStaticQuery, graphql } from "gatsby";

export function nodeToProductInterface(list: any) {
  if (list) {
    var pList: ProductInterface[] = [];
    for (var i = 0; i < list.length; i++) {
      var product: ProductInterface = {
        slug: list[i].node.slug,
        title: list[i].node.title,
        images: list[i].node.images.map((img) => img.childImageSharp.fluid),
        categories: list[i].node.categories.map((c) => {
          return { categoryName: c.category_name };
        }),
        shortDes: list[i].node.short_description,
        des: list[i].node.description,
        fileDetail: list[i].node.file_detail,
        price: list[i].node.price,
        purchaseTerm: list[i].node.purchase_term,
      };
      pList.push(product);
    }

    return pList;
  }
}

const Shop = () => {
  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        edges {
          node {
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
      }
    }
  `);

  const productList = nodeToProductInterface(data.allProductsJson.edges);
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
      <ProductViewContainer productList={productList} />
    </Layout>
  );
};

export default Shop;
