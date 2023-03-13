import React from "react";
import './Sms.css'
import img1 from './imgs/1.svg'
import img2 from './imgs/2.svg'
import img3 from './imgs/3.svg'
import img4 from './imgs/1.png'

function Sms(){
    return(
        <React.Fragment>
            <div className="container cont1" id="Iman" style={{marginTop:"100px"}}>
                
                <div className="row" style={{display:"flex" , flexDirection:"row" , width:"100%"}}>
                    <div className="col-6">
                        <h1 style={{color:"rgb(42, 255, 173)"}}>Iman</h1>
                        <h4 style={{marginTop:"50px"}}>Iman — это платформа взаимного финансирования, основанная на принципах «Исламских финансов». Здесь встречаются покупатели, продавцы и инвесторы.</h4>
                        <h3 style={{marginTop:"50px"}}>Мы разрабатывали:</h3>
                        <div className="container" style={{marginTop:"30px"}}>
                            <div className="row">
                                <div className="col-4" style={{width:"200px" , backgroundColor:"#E7FFFE" , margin:"5px"}}>
                                    <img src={img1} />
                                    <h4>Mobile design</h4>
                                </div>
                                <div className="col-4" style={{width:"170px" , backgroundColor:"#E7FFFE" , margin:"5px"}}>
                                <img src={img2} />
                                <h4>Admin panel</h4>
                                </div>
                                <div className="col-4" style={{width:"170px" , backgroundColor:"#E7FFFE" , margin:"5px"}}>
                                <img src={img3}/>
                                <h4>Crossplatform</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={img4}  width="100%"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Sms;