import React from 'react'
import menu from '../../menu'
import "./DinnerMenu.css"


function DinnerMenu (){
    return(
        <React.Fragment>
            <div className ="menu-dinner-wrapper" >
                <h1 className = "menu-dinner-heading">DINNER</h1>

                <h1 className="menu-selection-heading"> ANTIPASTI</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[0].dinner.antipasti.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[0].dinner.antipasti_Prices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
                
                <h1 className="menu-selection-heading">INSALATE</h1>
                <div className="menu-list-container">    
                    <ul className="menu-list-content">{menu[0].dinner.insalate.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>

                    <ul className="menu-list-prices">{menu[0].dinner.insalate_Prices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
                
                <h2 className= "menu-Addon">| ADD ON:  Chicken 4 | Shrimp 5 | Salmon 8 |</h2>

                <h1 className="menu-selection-heading">PASTA</h1>
                <div className="menu-list-container">
                    <ul className="menu-list-content">{menu[0].dinner.pasta.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>

                    <ul className="menu-list-prices">{menu[0].dinner.pasta_Prices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
                
                <h2 className= "menu-Addon">| Sub For Homemade Pasta 3 |</h2>

                <h1 className="menu-selection-heading">SECONDI</h1>
                <div className="menu-list-container">
                    <ul className="menu-list-content">{menu[0].dinner.secondi.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>

                    <ul className="menu-list-prices">{menu[0].dinner.secondi_Prices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>

                <h1 className="menu-selection-heading">CONTORNI</h1>
                    <h2 className="menu-Addon" id="contorni-addon">Swiss Chard 6 | Mix Mushrooms Trifolati 6 | Roasted Mix Vegetables 6 | Brussel Sprout Graten 6</h2>
                
            </div>
        </React.Fragment>
    )
}

export default DinnerMenu