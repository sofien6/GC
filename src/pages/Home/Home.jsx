import React from 'react' ; 
import Carousel  from '../../Component/Carousel/Carousel';
import './Home.css'; 
import GenerationCahllengeHeader from '../../svg/bellow_header_gc_round.svg'
import YoutubeEmbed from '../../Component/Youtube/YoutubeVideo'
import ServiceImage from '../../svg/services_cree.svg'
import ServiceCollaboration from '../../svg/services_collaboration.svg'
import ServiceConnexion from '../../svg/services_connexion.svg'
import ProgrammsUstoUp from '../../svg/programs_usto_up.svg'
import ProgrammsUstoMeeting from '../../svg/programs_usto_meeting.svg'
import ProgrammsUstoGotTalent from '../../svg/programs_usto_got_talent.svg'
import Card from '../../Component/Card/Card'
import HackathonImage from '../../images/medal.png'
import AtelierImage from '../../images/scissors.png'
import WorkshopImage from '../../images/round-table.png'
import SakerImage from '../../images/sponsor_saker.jpg'
import LightContactC from '../../Component/contactPage/contactPage'
import LightFooterD from '../../Component/footer/footer'
import Members from '../../Component/members/members'
 class Home extends React.Component{
    render(){
        return(
           <main>
              {/*  landing page with latest podcast and radio */}
              <section className='sectionHome'>
               <div className="latest_podcast">
                 <h1>
                    Latest Podcast 
                 </h1>
               </div>
               <div className='Landing_page'>
               <Carousel/>
               </div>
               <div className="latest_radio">
                 <h1>
                    Latest Radio 
                 </h1>
               </div>
              </section>

               {/*  Presentation of Generation challenge */}
               <div className="presentation">
                                 {/*  Left of the presentation */}
                  <div className="presentation_left">
                   <div className="presentation_left-image">
                      <img style={{width:"200px"}}  src={GenerationCahllengeHeader} alt="Gc_bellow_header" />
                   </div>
                   <div className="presentation_left-content">
                      <h1>Co-Working Sapce</h1>
                      <p>Avec nous propulser votre id??e de START-UP !
                          Rejoinez-nous ! On vous attend chaque jour, de
                           8h00 ?? 18h00 pour vous aider ?? r??veiller l'esprit
                            entreprenariat en vous et vous formez</p>
                   </div>
                  </div>
                        {/*  right of the presentation */}
                  <div className="presentation_right">
                  <div className="right-content">
                      <h1>GENERATION_CHALLENGE</h1>
                      <p>est un Espace de Co-Working au sein de l???Universit?? des Sciences et Technologies d???Oran Mohamed Boudiaf
                          Cet Espace fournit un environnement de soutien complet et motive les ??tudiants
                           ?? inventer et ?? innover en proposant des programmes et des cours
                            de formation gratuits, encadr??s et supervis??s par des experts, coachs et
                             moniteurs dans divers domaines, ?? travers lequel ils fournissent un soutien 
                             complet aux ??tudiants afin de d??velopper leurs id??es dans des projets r??els.
                        </p>
                   </div>
                  </div>
               </div>
                      {/*  Video Presentation  of Generation challenge */}
                      <div className="youtube_video">
                      <YoutubeEmbed x="400px" y="400px" />
                      </div>

                      {/*  Nos Service*/}

                      <div className="Nos_service">
                         <div className="Nos_service-title">
                               <h1>Nos Services</h1>
                         </div>
                         <div className="Nos_service-content">
                            <div className="Nos_service-svg">
                               <img src={ServiceImage} />
                            </div>
                            <div className="Nos_service-description">
                               
                            <p>
                            GENERATION CHALLENGE dans un premier temps est l?? pour vous Donner
                             l???espace n??cessaire et propice ?? vos cr??ations et la mise en ??uvre
                              de votre projet. Un de nos buts c???est que vous r??alisez le v??tre
                            </p>
                            </div>
                         </div>
                      </div>

                      
                      {/*  Apprendre a collaborer */}

                      <div className="Nos_service">
                         <div className="Nos_service-title">
                               <h1>Apprendre a collaborer</h1>
                         </div>
                         <div className="Nos_service-content">
                            <div className="Nos_service-svg">
                               <img src={ServiceCollaboration} />
                            </div>
                            <div className="Nos_service-description">
                            <p>
                            Dans cet espace de travaille sur mesure et propre ?? tous, le space vous aides
                             et vous donne l'occasion de collaborer avec vos semblable pour une exp??rience
                              de travaille aussi enrichissante que le travail en lui-m??me.
                            </p>
                            </div>
                         </div>
                      </div>
 
                      {/*  Multiplier ces connexions */}

                      <div className="Nos_service">
                         <div className="Nos_service-title">
                               <h1>Multiplier ces connexions</h1>
                         </div>
                         <div className="Nos_service-content">
                            <div className="Nos_service-svg">
                               <img src={ServiceConnexion} />
                            </div>
                            <div className="Nos_service-description">
                            <p>
                            Au sein de l'espace en tant qu'??tudiant vous aurez la chance de rencontrer 
                            des gens comme vos ambitieux et travailleurs, des gens de carri??re et des
                             formateurs ?? l'??coute. G??n??ration challenge vous donnera beaucoup de visibilit??
                              sur la sc??ne nationale et internationale, ce qui constitue un objectif principal 
                              et primordial pour nous, notre ??quipe cuvre pour pouvoir vous donner le micro.
                            </p>
                            </div>
                         </div>
                      </div>
 
                         {/*  Nos Programmes */}

                         <div className="Nos_programme">
                          <div className="Nos_programme-title">
                              <h1>Nos Programmes</h1>
                          </div>
                          <div className="Nos_programme-programmes">

                              <div className='Nos_programme-programmes-parent'>

                                 <div className="Nos_programme-programmes-title">
                                 <img src={ProgrammsUstoUp} />
                                 <h1>Usto Up</h1>
                                 </div>

                                 <div className="Nos_programme-programmes-content">
                                    <p>
                                    USTO_UP est un programme ?? 6 mois destin?? aux porteurs
                                     des id??es pour les concr??tiser sur le terrain et les
                                      transformer vers des projets r??els.
                                    </p>
                                 </div>

                              </div>
                           
                              
                              <div className='Nos_programme-programmes-parent'>

                                 <div className="Nos_programme-programmes-title">
                                 <img src={ProgrammsUstoMeeting} />
                                 <h1>Usto-Got-Talent</h1>
                                 </div>

                                 <div className="Nos_programme-programmes-content">
                                    <p>
                                    Usto-Got-Talen est un programme destin?? aux gens qui ont 
                                    l'esprit artistique, cela est un complement d'Usto up
                                    </p>
                                 </div>
                                 
                              </div>
                              
                              <div className='Nos_programme-programmes-parent'>

                                 <div className="Nos_programme-programmes-title">
                                 <img src={ProgrammsUstoGotTalent} />
                                 <h1>Usto-Meeting</h1>
                                 </div>

                                 <div className="Nos_programme-programmes-content">
                                    <p>
                                    Usto-Meeting seront des meetings au cours de l'ann??e
                                     o?? les ??tudiants prendront contact avec des professionnels
                                      dans des diff??rents domaines pour avoir des orientations
                                       et des conseils .
                                    </p>
                                 </div>
                                 
                              </div>
                          </div>
                         </div>
                       
                         {/*  Nos Evenement */}
                         <div className="nos_Evenement">
                            <div className="nos_Evenement-title">
                               <h1>Nos evenements</h1>
                            </div>
                            <div className="nos_Evenement-cards">
                               
                               <div className="nos_Evenement-cards-parent">
                               <Card
                               image={HackathonImage}
                               title="Hackathons"
                               content="Nous organisons des Hackathons durant lequel des
                                groupes de volontaires se r??unissent pendant une p??riode
                                 de temps donn??e afin de travailler sur des projets de
                                  mani??re collaborative. C'est un processus cr??atif aux
                                   objectifs larges et vari??s souvent ax??s sur la
                                    proposition de solutions innovantes"
                               />
                               </div>
                               <div className="nos_Evenement-cards-parent">
                               <Card
                               image={AtelierImage}
                               title="Ateliers"
                               content="Nous organisons des ateliers pour les ??tudiants de partir 
                               de leurs propres pratiques et de leurs propres th??ories pr??alables
                                pour les remettre en jeu ?? travers des t??ches ?? ma??triser et des
                                 probl??mes ?? r??soudre dans des diff??rents domaines anim??s par des 
                                 enseignants ou des professionnels"
                               />
                               </div>
                               <div className="nos_Evenement-cards-parent">
                               <Card
                               image={WorkshopImage}
                               title="Workshop"
                               content="Nous organisons des workshops, celui-ci se d??roule sur un,
                                voire deux jours les workshops servent de mettre ?? contribution un
                                 maximum de personnes autour d???un concept ou d???une probl??matique.
                                  Le workshop se r??v??le ??tre une v??ritable force dans l'ECHO Systems 
                                  acad??mique puisqu???il permet aux ??tudiants de prendre les avis et 
                                  suggestions de plus de personnes qu????? l???habitude"
                               />
                               </div>
                            </div>
                         </div>

                         {/*  Nos Sponsor */}
                     <div className="Nos_sponsor">
                        <div className="Nos_sponsor-title">
                             <h1>Nos Sponsors</h1>
                        </div>
                        <div className="Nos_sponsor-content">
                           <div className="Nos_sponsor-image">
                           <img src={SakerImage} />
                           </div>
                           <div className="Nos_sponsor-description">
                              <h1>Saker</h1>
                              <p>
                              boutique des affaire scolaire bureautique et beaux arts
                              Bureautique , Scolaire ,Bagagerie w Fantaisie ? rak 
                              f l'adress exacte welcoome to SAKER ???????????????????????? 
                              </p>
                           </div>
                        </div>
                     </div>
                      {/*<Members  />*/} 
                       <LightContactC/>
                       <LightFooterD/>
           </main>
        );
    }
 }

 export default Home; 

