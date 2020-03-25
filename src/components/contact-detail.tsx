// interface ContactPageInterface {
//   image?: string;
//   heading: string;
//   description: string;
//   cv?: string;
// }

// const ContactDetail = (props: ContactPageInterface) => {
//   const aboutImage = props.image ? (
//     <div className="img-container">
//       <img src={props.image} className="contact-image" />
//     </div>
//   ) : (
//     <div />
//   );

//   const downloadCV = props.cv ? (
//     <a href={props.cv} className="contact-cv">
//       Download CV
//     </a>
//   ) : (
//     <div />
//   );

//   return (
//     <div className="contact-container">
//       {aboutImage}
//       <div className="contact-detail">
//         <h3 className="contact-heading">{props.heading}</h3>
//         <span className="contact-description">{props.description}</span>
//         {downloadCV}
//       </div>
//     </div>
//   );
// };
// export default ContactDetail;
