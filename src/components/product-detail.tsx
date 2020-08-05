import React from "react";
import Img from "gatsby-image";

export const ProductDetail = ({ product }) => {
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
        2020 Preset Pack
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
            <Img fluid={product.images[0]} />
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
              Capping off Minimalissimo's trilogy with a keen eye for
              architecture and interior design, Volume Nº3—the curated home
              edition—welcomes readers to explore a life of simplicity through
              minimalist and mindful design for the home. This volume features a
              mix of architectural and interior photography, profiles, and
              essays, we revisit iconic works by some of the world‘s most
              renowned designers, architects and stylists, setting a strong
              foundation with classics.
            </p>
            <hr className="divider" />
            <table>
              <tr>
                <td style={tdStyle}>Files</td>
                <td>Presets, Installation</td>
              </tr>
              <tr>
                <td style={tdStyle}>Format</td>
                <td>XMP</td>
              </tr>
              <tr>
                <td style={tdStyle}>Compatible</td>
                <td>Lightroom</td>
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
              <div style={buttonStyle}>$ 20</div>
              <p style={{ margin: "10px", opacity: "0.5" }}>
                Using Shopify Cart
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
