import Teams from "./TeamsAdvisors";
import TeamsSM from "./TeamsSM";
import './Teamtabs.css'
import { useState} from "react";
import AboutUs from './About1';

const Teamtabs = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return ( 
        <div className="Tcontainer Tcontainer2">
            <div className="bloc-tabs">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Heads</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>SMs</button>
                
            </div>
            <div className="content-tabs">
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <Teams />
                </div>

                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <TeamsSM />
                <AboutUs />
                </div>
            </div>

        </div>
     );
}
 
export default Teamtabs;