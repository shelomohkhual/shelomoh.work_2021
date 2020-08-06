import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { ProductInterface } from "./product-view-container";

export const ProductDetail = ({ product }) => {
  const pDetail: ProductInterface = product;
  const tdStyle: React.CSSProperties = {
    fontWeight: "600",
    paddingRight: "15px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "200px",
    padding: "15px",
    backgroundColor: "#1f1f1f",
    color: "white",
    fontSize: "20px",
    display: "table-cell",
    cursor: "pointer",
    verticalAlign: "middle",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={{ fontWeight: "normal", marginBottom: "30px" }}>
        {pDetail.title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "50%",

              display: "inline-table",
            }}
          >
            {pDetail.images.map((img: FluidObject) => (
              <Img fluid={img} />
            ))}
          </div>
          <div
            style={{
              flexBasis: "50%",
              padding: "0px 30px",
            }}
          >
            <p
              style={{
                lineHeight: "28px",
              }}
            >
              {pDetail.des}
            </p>
            <hr className="divider" />
            <table>
              <tr>
                <td style={tdStyle}>Files</td>
                <td>{pDetail.fileDetail.files}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Format</td>
                <td> {pDetail.fileDetail.format}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Compatible</td>
                <td> {pDetail.fileDetail.compatible}</td>
              </tr>
            </table>
            <hr className="divider" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div style={buttonStyle}>$ {pDetail.price}</div>
              <p style={{ margin: "10px", opacity: "0.5" }}>
                {pDetail.purchaseTerm}
              </p>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};
export default ProductDetail;
