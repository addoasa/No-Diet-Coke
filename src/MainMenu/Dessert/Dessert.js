import React from 'react'
import "./Dessert.css"
import menu from '../../menu'


function Dessert (){

    return(
        <React.Fragment>
            <div className ="menu-dinner-wrapper">
                <h1 className = "menu-dinner-heading">DESSERTS</h1>

                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[2].Desserts.DessertMenu.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[2].Desserts.DessertPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
                
                
            </div>
        </React.Fragment>
    )
}

export default Dessert