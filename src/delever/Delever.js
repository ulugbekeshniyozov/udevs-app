import React from "react";
import img1 from './imgs/1.png'
import img2 from './imgs/2.svg'
import img3 from './imgs/3.svg'
import img4 from './imgs/4.svg'
import img5 from './imgs/5.svg'
import img6 from './imgs/6.svg'
import './Delever.css'

function Delever(){
    return(
        <React.Fragment>
            <div className="container" id="del" style={{marginTop:"50px"}}>
                <div className="row" style={{flexDirection:"row" , width:"100%"}}>
                    <div className="col-6" style={{justifyContent:"center" , alignItems:"center"}}>
                        <img className="img10" src={img1}/>
                        </div>
                    <div className="col-6">
                        <h1 style={{color:"#E9760B" , fontWeight:"900" , fontSize:"75px"}}>Delever</h1>
                        <h4 className="cont">Delever — Автоматизация службы доставки ориентированая как на потребителей так и на рестораны.</h4>
                        <br></br>
                        <h4>Мы разрабатывали:</h4>
                        <div className="row">
                            <div className="col-4" style={{width:"200px" , height:"150px" , backgroundColor:"#E7FFFE" , margin:'5px' , borderRadius:"10px"}}>
                                <img src={img2}/>
                                <h4>Website</h4>
                            </div>
                            <div className="col-4" style={{width:"200px" , height:"150px" , backgroundColor:"#E7FFFE" , margin:'5px' , borderRadius:"10px"}}>
                                <img src={img3}/>
                                <h4>Admin panel</h4>
                            </div>
                            <div className="col-4" style={{width:"200px" , height:"150px" , backgroundColor:"#E7FFFE" , margin:'5px' , borderRadius:"10px"}}>
                                <img src={img4}/>
                                <h4>Crossplatform</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4" style={{width:"200px" , height:"150px" , backgroundColor:"#E7FFFE" , margin:'5px' , borderRadius:"10px"}}>
                            <img src={img5}/>
                            <h4>Web design</h4>
                            </div>
                            <div className="col-4" style={{width:"200px" , height:"150px" , backgroundColor:"#E7FFFE" , margin:'5px' , borderRadius:"10px"}}>
                            <img src={img6}/>
                            <h4>Mobile design</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Delever;