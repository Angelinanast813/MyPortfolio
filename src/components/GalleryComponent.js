import React, {Component} from "react";
import "../styles/GalleryComponent.scss";
import Data from "../data/paintings.json";

class Gallery extends Component{
    render() {
        const paintings = Data.paintings.map(painting => {
           return(
               <div key={painting.id} className="item">
                   <div className="img" style={{backgroundImage: painting.src}}/>
               </div>
           );
        });

        return(
            <div id="gallery" className="gallery vh-100 d-flex justify-content-center">
                <div className="gallery-div">
                    <div className="gallery-wrap">
                        <h1 className="gallery-title">My paintings.</h1>
                        <div className="gallery-list">
                            {paintings}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;