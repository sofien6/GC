import React from 'react'
import './members.css'


import NabilImage from './image/team_nabil.jpg'
import OthmaneImage from './image/team_othman.jpg'
import whaghyImage from './image/team_waghy.jpg'
import khaledImage from './image/team_khaled.jpg'
import membre_amira from './image/membre_amira.JPG'
import membre_chahinez from './image/membre_chahinez.JPG'
import membre_hadjer from './image/membre_hadjer.JPG'
import membre_imad from './image/membre_imad.jpg'
import membre_kamille from './image/membre_kamille.JPG'
import membre_kheiredin from './image/membre_kheiredin.jpg'
import membre_nadir from './image/membre_nadir.JPG'
import membre_rania from './image/membre_rania.jpg'
import membre_zino from './image/membre_zino.jpg'
import memnbre_smain from './image/memnbre_smain.JPG'
import MemberCard from '../memberCard/memberCard'

const Members = () => {
    return (
        <div>
<div className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Notre equipe</h2>
            </div> 
           <MemberCard image={NabilImage} name="Nabil Aliouat" role = "Directeur Général" />
           <MemberCard image={whaghyImage} name="BENGUESMIA CHADLY Houari" role = "Responsable cellule technique" />
           <MemberCard image={OthmaneImage} name="Nabil Aliouat" role = "Responsable cellule communication" />
           <MemberCard image={khaledImage} name="Belatrech Khaled" role = "Membre Co-Fondateur" />
           <MemberCard image={membre_amira} name="Nabil Aliouat" role = "founder" />
           <MemberCard image={membre_chahinez} name="Nabil Aliouat" role = "founder" />
           <MemberCard image={membre_hadjer} name="Nabil Aliouat" role = "founder" />
           <MemberCard image={membre_imad} name="Nabil Aliouat" role = "founder" />
           <MemberCard image={membre_kamille} name="Nabil Aliouat" role = "founder" />            
           <MemberCard image={membre_kheiredin} name="Nabil Aliouat" role = "founder" />            
           <MemberCard image={memnbre_smain} name="Nabil Aliouat" role = "founder" />            
           <MemberCard image={membre_nadir} name="Nabil Aliouat" role = "founder" />            
           <MemberCard image={membre_rania} name="Nabil Aliouat" role = "founder" />            
           <MemberCard image={membre_zino} name="Nabil Aliouat" role = "founder" />            

          </div>
        </div>
      </div>        </div>
    )
}

export default Members
