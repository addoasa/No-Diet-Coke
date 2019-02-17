import React from 'react'
import menu from '../../menu'

import "./Drinks.css"

function Drinks (){

    return(
        <React.Fragment>
            <div className ="menu-dinner-wrapper">
                <h1 className = "menu-dinner-heading">DRINKS</h1>

                <h1 className="menu-selection-heading"> Amari</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.AMARI.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.AmariPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>

                    <h1 className="menu-selection-heading"> Cognac & Brandy</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.CognacBrandy.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.CognacBrandyPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                    </div>


                    <h1 className="menu-selection-heading"> Whiskey</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Whiskey.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.WhiskeyPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                    </div>


                    <h1 className="menu-selection-heading"> Bourbon</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Bourbon.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.BourbonPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                    </div>



                    <h1 className="menu-selection-heading"> Tequila</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Tequila.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.TequilaPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
    

                <h1 className="menu-selection-heading"> Grappa</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Grappa.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.GrappaPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>


                <h1 className="menu-selection-heading"> Vermouth</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Vermouth.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.VermouthPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>



                <h1 className="menu-selection-heading"> Other After Dinner</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.OtherAfterDinner.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.OtherAfterDinnerPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>



                <h1 className="menu-selection-heading"> Scotch</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Scotch.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.ScotchPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>


                <h1 className="menu-selection-heading"> Mezcal</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[3].Drinks.Mezcal.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[3].Drinks.MezcalPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>


                
            </div>
        </React.Fragment>
    )
}

export default Drinks