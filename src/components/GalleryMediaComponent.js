import React, {Component} from "react";
import "../styles/GalleryMediaComponent.scss";
import Data from "../data/paintings.json";

class GalleryMedia extends Component{
 render() {
     const paintings = Data.paintings.map(painting => {
         return(
            <div key={painting.id} className="gm-container">
                <img className="gm-img" src={painting.src.substring(4, painting.src.length-1)} alt={painting.alt} />
            </div>
         );
     });

     return(
         <div id="gallery" className="d-flex flex-column container align-items-center">
             <div className="d-flex justify-content-center about-container">
                 <div className="about-cont-div" />
                 <div className="about-line" />
                 <div className="about-cont-div d-flex align-items-center">
                     <div className="contact-hor-line contact-unused" />
                     <div className="contact-ttl">My sketches.</div>
                 </div>
             </div>
             <div className="about-line" />
             <div className="gm-container-all d-flex flex-column align-items-center">
                 {paintings}
             </div>
         </div>
     );
 }
}

export default GalleryMedia;