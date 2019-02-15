import React from 'react'
import menu from '../menu'


function DinnerMenu (){
console.log(menu)
    return(
        <React.Fragment>
            <h1> Antipasti</h1>
            <div className="antipasti-list">
                <ul>{menu[0].dinner.antipasti.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>


                <ul>{menu[0].dinner.antipasti_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            <h1>Insalate</h1>
            <div className="insalate-list">    
                <ul>{menu[0].dinner.insalate.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul>{menu[0].dinner.insalate_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            
            <h1>Pasta</h1>
            <div className="pasta-list">
                <ul>{menu[0].dinner.pasta.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul>{menu[0].dinner.pasta_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            <h1>Secondi</h1>
            <div className="secondi-list">
                <ul>{menu[0].dinner.secondi.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul>{menu[0].dinner.secondi_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>

            <h1>Contorni</h1>
            <div className="contorni-list">
                <ul>{menu[0].dinner.contorni.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul>{menu[0].dinner.contorni_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default DinnerMenu