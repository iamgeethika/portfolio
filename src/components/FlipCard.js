import React from "react";
import "./FlipCard.css";

const FlipCard = ({ 
  frontContent, 
  backImage, 
  backImageAlt = "Graduation photo"
}) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side - Education Details */}
          <div className="flip-card-front">
            <div className="card-content">
              {frontContent}
            </div>
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
          </div>
          
          {/* Back Side - Graduation Image */}
          <div className="flip-card-back">
            <img src={backImage} alt={backImageAlt} />
            <div className="image-overlay">
              <span>Honoured Deans List1 for academic excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;