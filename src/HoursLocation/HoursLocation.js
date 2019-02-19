import React from 'react';
import './HoursLocation.css'

class HoursLocation extends React.Component {
    render(){
        return ( 
            <div className= "HL-Parent">
                <h1 className= "HL-heading">HOURS & LOCATION</h1>
                <div className="HL-menu-parent">
        
        
                    <div className="HL-peperosso-hl">
                        <p className="HL-peperosso-heading">PEPE ROSSO SOCIAL & CANTINA</p>
                        <div className="HL-pr-location-parent">
                            <p>173 Mott Street, New York, NY 10013</p>
                            <p>Grand St. for B & D trains or Canal St. station for the Q, 6, R, Z, N & J trains.</p>
                            <p>
                            Our hours of operation:
                            <li>Mon. to Fri. 11AM - 11PM</li>
                            <li>Sat. to Sun. 8AM - 11PM</li>
                            </p>
                        </div>
                    </div>
        
        
                    <div className="HL-other-hl">
                            <p className="HL-other-heading">OTHER LOCATIONS</p>
                            <div className="HL-other-parent">
                                <li>Pepe Giallo 253 10th Ave NYC,</li>
                                <li>212-242-6055</li>
                                <br></br>
                                <li>Pepe Rosso 149 Sullivan St. NYC,</li>
                                <li>212-677-4555</li>
                            </div>
                    </div>
        
                </div>
        
            </div>
        
        )
    } 
}

export default HoursLocation;