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
                      <p>Avec nous propulser votre idée de START-UP !
                          Rejoinez-nous ! On vous attend chaque jour, de
                           8h00 à 18h00 pour vous aider à réveiller l'esprit
                            entreprenariat en vous et vous formez</p>
                   </div>
                  </div>
                        {/*  right of the presentation */}
                  <div className="presentation_right">
                  <div className="right-content">
                      <h1>GENERATION_CHALLENGE</h1>
                      <p>est un Espace de Co-Working au sein de l’Université des Sciences et Technologies d’Oran Mohamed Boudiaf
                          Cet Espace fournit un environnement de soutien complet et motive les étudiants
                           à inventer et à innover en proposant des programmes et des cours
                            de formation gratuits, encadrés et supervisés par des experts, coachs et
                             moniteurs dans divers domaines, à travers lequel ils fournissent un soutien 
                             complet aux étudiants afin de développer leurs idées dans des projets réels.
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
                            GENERATION CHALLENGE dans un premier temps est là pour vous Donner
                             l’espace nécessaire et propice à vos créations et la mise en œuvre
                              de votre projet. Un de nos buts c’est que vous réalisez le vôtre
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
                            Dans cet espace de travaille sur mesure et propre à tous, le space vous aides
                             et vous donne l'occasion de collaborer avec vos semblable pour une expérience
                              de travaille aussi enrichissante que le travail en lui-même.
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
                            Au sein de l'espace en tant qu'étudiant vous aurez la chance de rencontrer 
                            des gens comme vos ambitieux et travailleurs, des gens de carrière et des
                             formateurs à l'écoute. Génération challenge vous donnera beaucoup de visibilité
                              sur la scène nationale et internationale, ce qui constitue un objectif principal 
                              et primordial pour nous, notre équipe cuvre pour pouvoir vous donner le micro.
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
                                    USTO_UP est un programme à 6 mois destiné aux porteurs
                                     des idées pour les concrétiser sur le terrain et les
                                      transformer vers des projets réels.
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
                                    Usto-Got-Talen est un programme destiné aux gens qui ont 
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
                                    Usto-Meeting seront des meetings au cours de l'année
                                     où les étudiants prendront contact avec des professionnels
                                      dans des différents domaines pour avoir des orientations
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
                                groupes de volontaires se réunissent pendant une période
                                 de temps donnée afin de travailler sur des projets de
                                  manière collaborative. C'est un processus créatif aux
                                   objectifs larges et variés souvent axés sur la
                                    proposition de solutions innovantes"
                               />
                               </div>
                               <div className="nos_Evenement-cards-parent">
                               <Card
                               image={AtelierImage}
                               title="Ateliers"
                               content="Nous organisons des ateliers pour les étudiants de partir 
                               de leurs propres pratiques et de leurs propres théories préalables
                                pour les remettre en jeu à travers des tâches à maîtriser et des
                                 problèmes à résoudre dans des différents domaines animés par des 
                                 enseignants ou des professionnels"
                               />
                               </div>
                               <div className="nos_Evenement-cards-parent">
                               <Card
                               image={WorkshopImage}
                               title="Workshop"
                               content="Nous organisons des workshops, celui-ci se déroule sur un,
                                voire deux jours les workshops servent de mettre à contribution un
                                 maximum de personnes autour d’un concept ou d’une problématique.
                                  Le workshop se révèle être une véritable force dans l'ECHO Systems 
                                  académique puisqu’il permet aux étudiants de prendre les avis et 
                                  suggestions de plus de personnes qu’à l’habitude"
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
                              f l'adress exacte welcoome to SAKER 🌸🌼🌻🌸🌼🌻 
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

