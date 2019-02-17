import React from 'react'
import "./BrunchLunch.css"
import menu from '../../menu'


function BrunchLunch (){

    return(
        <React.Fragment>
            <div className ="menu-dinner-wrapper">
                <h1 className = "menu-dinner-heading">BRUNCH & LUNCH</h1>

                <h1 className="menu-selection-heading"> Ineggspensive Breakfast</h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.ineggspensivebreakfast[0]}</ul>
                </div>



                <h1 className="menu-selection-heading"> $2 Extras </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.ineggspensivebreakfast[1].$2extras.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>
                


                <h1 className="menu-selection-heading"> $4 Extras </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.ineggspensivebreakfast[1].$4extras.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>



                <h1 className="menu-selection-heading"> $3 Extras </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.ineggspensivebreakfast[1].$3extras.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>



                <h1 className="menu-selection-heading"> Plates </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.brunchspecial.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>

                    <ul className="menu-list-prices">{menu[1].brunchlunch.brunchSpecialPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>


                <h1 className="menu-selection-heading"> Panini </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.Panini.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>


                    <ul className="menu-list-prices">{menu[1].brunchlunch.PaniniPrices.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                </div>


                <h1 className="menu-selection-heading"> Lunch Special </h1>
                <div className="menu-list-container" >
                    <ul className="menu-list-content">{menu[1].brunchlunch.LunchSpecial.map((item,index)=>{
                        return <li key={index}> {item}</li>
                    })}
                    </ul>
                    
                </div>


            </div>
        </React.Fragment>
    )
}

export default BrunchLunch