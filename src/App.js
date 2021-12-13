import React from 'react'; 
import {NavBar} from './Component'
// main page 
import {
  Home,
  Registration,
  UstoUp,
  UstoMeeting,
  UstoTalent,
  Podcast,
  Radio,
  Magazine,
  Startup,
  Actuality,
  Events,
  Participant,
} from './pages'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

class App extends React.Component{
   render(){
     return(
      <div className='App'>
      <NavBar />
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/UstoUp" element={<UstoUp/>}/>
      <Route path="/UstoMeeting" element={<UstoMeeting/>}/>
      <Route path="/UstoTalent" element={<UstoTalent/>}/>
      <Route path="/Podcast" element={<Podcast/>}/>
      <Route path="/Radio" element={<Radio/>}/>
      <Route path="/Magasine" element={<Magazine/>}/>
      <Route path="/Startup" element={<Startup/>}/>
      <Route path="/Actuality" element={<Actuality/>}/>
      <Route path="/Event" element={<Events/>}/>
      <Route path="/Participant" element={<Participant/>}/>
    </Routes>
     </BrowserRouter>
     </div>
     );
   }
}
export default App; 