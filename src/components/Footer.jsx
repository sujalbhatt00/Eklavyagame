import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/assets/eklavya.png" alt="Eklavya Games Logo" className="footer-logo" />
        <div className="footer-details">
          <div className="company-name">Eklavya Games Pvt Ltd</div>
          <div className="company-desc">
            Math games for kids, making learning fun and interactive.<br />
            Designed for ages 7–12.
          </div>
        
          
          <div className="footer-copyright">
            &copy; 2025 Eklavya Games Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}