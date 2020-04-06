import React, { CSSProperties } from "react";

export const rightDash = <span className="dash-right" />;

export const centerDash = <span className="dash" />;

export const leftDash = <span className="dash-left" />;

export const headingRightDash = <span className="heading-dash-right" />;

export function dashLine(
  dWidth = "120px",
  dHeight = "3px",
  dMarginBottom = "9px",
  dAlign = "left"
) {
  const dashStyle: CSSProperties = {
    width: dWidth,
    height: dHeight,
    marginBottom: dMarginBottom,
    margin: dAlign === "left" ? "auto 0 auto 1vw" : "auto 1vw auto 0",
  };
  return <span className="dash-line" style={dashStyle} />;
}

export interface ProjectFeatureTopic {
  title: string;
  coverImg?: any;
  des: string;
  imgs?: FeatureImgs[];
}

export interface FeatureImgs {
  label?: string;
  images: any[];
}

export interface ProjectInterface {
  title: string;
  client: string;
  service: string;
  description: string;
  coverImg: string;
  archieve: string;
  featureTopics?: ProjectFeatureTopic[];
  featureImgs?: FeatureImgs[];
  result: string;
}

function renderTopicImgs(
  featureImgs: FeatureImgs[],
  alignPosition: string = "left"
) {
  return featureImgs === null || featureImgs === undefined ? (
    <></>
  ) : (
    featureImgs.map((featureImage: FeatureImgs) => {
      var position = ["first", "second", "third"];
      var posIndex = 0;
      var imageStyle: CSSProperties;

      return featureImage === null || featureImage === undefined ? (
        <></>
      ) : (
        <div className="feature-img-container">
          <div style={{ margin: "1vh 0" }}>
            {featureImage.label ? (
              <h2
                style={
                  alignPosition === "right"
                    ? { margin: "1vh 0", textAlign: "right" }
                    : { margin: "1vh 0", textAlign: "left" }
                }
                className="label"
              >
                {featureImage.label}
              </h2>
            ) : (
              <></>
            )}
            <div
              className="feature-img-row-container"
              style={
                alignPosition === "right"
                  ? { justifyContent: "flex-end" }
                  : { justifyContent: "flex-start" }
              }
            >
              {featureImage.images.map((img: any) => {
                posIndex = posIndex > 2 ? 0 : posIndex;

                imageStyle =
                  position[posIndex] === "second"
                    ? { margin: "0 1% 1%" }
                    : { margin: " 0 0 1% 0" };

                posIndex += 1;
                return (
                  <div key={img.src} className="feature-img" style={imageStyle}>
                    <img
                      className="clickable-img"
                      src={img.childImageSharp.fluid.originalImg}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    })
  );
}

function mainTopicComponent(title: string, content: string) {
  return (
    <div className="project-topic-container">
      <div className="project-topic-title-col">
        <div className="heading-container">
          <span className="project-topic-title">
            {title}
            {rightDash}
          </span>
        </div>
      </div>
      <div className="project-topic-content-col">
        <p className="project-des">{content}</p>
      </div>
    </div>
  );
}

function featureTopicDoubleCol(
  alignPosition: string,
  featureTopicData: ProjectFeatureTopic
) {
  const textAlignStyle: CSSProperties =
    alignPosition === "right" ? { textAlign: "right" } : { textAlign: "left" };

  const contentAlignPositionStyle: CSSProperties =
    alignPosition === "right"
      ? { order: 1, paddingRight: " 2vw" }
      : { order: 2, paddingLeft: " 2vw" };

  const coverAlignPositionStyle: CSSProperties =
    alignPosition === "right" ? { order: 2 } : { order: 1 };

  return (
    <>
      <div className="feature-topic-double-col-container">
        <div
          className="feature-topic-content-col"
          style={contentAlignPositionStyle}
        >
          {featureTopicData.title ? (
            <div
              className="feature-topic-title-container"
              style={textAlignStyle}
            >
              <span className="feature-topic-title">
                {alignPosition === "right" ? leftDash : <></>}
                {featureTopicData.title}
                {alignPosition === "left" ? rightDash : <></>}
              </span>
            </div>
          ) : (
            <></>
          )}
          {featureTopicData.des ? (
            <p className="feature-topic-des" style={textAlignStyle}>
              {featureTopicData.des}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div
          className="feature-topic-cover-col"
          style={coverAlignPositionStyle}
        >
          {featureTopicData.coverImg ? (
            // <Image fluid={featureTopicData.coverImg} alt={featureTopicData.subHeadTitle} />
            <img
              src={featureTopicData.coverImg.childImageSharp.fluid.originalImg}
            />
          ) : (
            // <img src={featureTopicData.subContentImage.src} />
            <></>
          )}
        </div>
      </div>
      {renderTopicImgs(featureTopicData.imgs, alignPosition)}
    </>
  );
}

function featureTopicSingleCol(
  alignPosition: string,
  featureTopicData: ProjectFeatureTopic
) {
  const textAlignStyle: CSSProperties =
    alignPosition === "right" ? { textAlign: "right" } : { textAlign: "left" };

  return (
    <div className="feature-topic-single-content-col">
      <div className="feature-topic-title-container" style={textAlignStyle}>
        <span className="feature-topic-title">
          {alignPosition === "right" ? leftDash : <></>}
          {featureTopicData.title}
          {alignPosition === "left" ? rightDash : <></>}
        </span>
      </div>
      <p className="project-des" style={textAlignStyle}>
        {featureTopicData.des}
      </p>
      {renderTopicImgs(featureTopicData.imgs, alignPosition)}
    </div>
  );
}

function renderListFeatureTopics(listFeatureTopics: ProjectFeatureTopic[]) {
  var alignPositionList: string[] = ["right", "left"];
  var posIndex: number = 0;
  var alignPosition: string;

  return listFeatureTopics === null ? (
    <></>
  ) : (
    listFeatureTopics.map((featureTopicData: ProjectFeatureTopic) => {
      posIndex = posIndex > 1 ? 0 : posIndex;
      alignPosition = alignPositionList[posIndex];
      posIndex += 1;

      return (
        <div key={featureTopicData.title} className="feature-topic-container">
          {featureTopicData.coverImg
            ? featureTopicDoubleCol(alignPosition, featureTopicData)
            : featureTopicSingleCol(alignPosition, featureTopicData)}
        </div>
      );
    })
  );
}

export const Project = (project: ProjectInterface) => {
  const listFeatureImages = project.featureImgs ? (
    <div className="project-feature-img-container">
      {renderTopicImgs(project.featureImgs)}
    </div>
  ) : (
    <></>
  );

  return (
    <div className="project-container">
      <p className="project-des">{project.description}</p>
      <div className="project-img-container">
        {/* <Image fluid={project.coverImg} alt={project.title} /> */}
        <img src={project.coverImg} />
      </div>
      {mainTopicComponent("achieve", project.archieve)}
      {renderListFeatureTopics(project.featureTopics)}
      {listFeatureImages}

      {mainTopicComponent("result", project.result)}
      <hr className="bottom-divider"></hr>
    </div>
  );
};

export default Project;
