import React from 'react'
import './memberCard.css'

const MemberCard = (args) => {
    return (
             <div className="col-sm-6 col-lg-4">
              <div className="box-bg">
                <div className="client-img">
                  <img src={args.image} className="img-fluids" />
                </div>
                <div className="details">
                  <h4 className="text-center">{args.name}</h4>
                  <h6 className="text-center">{args.role}</h6>
                </div>
                <div className="social-links">
                  <h4 className="text-center">Follow Me</h4>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
    )
}

export default MemberCard
