import React from "react";
import './Mobile.css'
import img1 from './imgs/ux.svg'
import img2 from './imgs/ui.svg'
import img3 from './imgs/type.svg'
import img4 from './imgs/mob.svg'
import img5 from './imgs/web.svg'
import img6 from './imgs/atom.svg'
import img7 from './imgs/figma.svg'
import img8 from './imgs/sketch.svg'
import img9 from './imgs/lottie.svg'
import img10 from './imgs/ill.svg'
import img11 from './imgs/col-6.png' 
function Design(){
    return(
        <React.Fragment>
            <div className="container con" style={{marginTop:"100px"}}  id="Mobile">
                <div className="row">
                    <div className="col-6">
                        <h1 style={{width:"300px" , color:"blue"}}>Мобильная разработка</h1>
                        <h3 className="res1" style={{margin:"50px 0px"}}>Наша компания придерживается подхода к дизайну, ориентированного на человека..</h3>
                        <div className="container">
                            <div className="row res2">
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img style={{margin:"10px"}}  src={img1}/>
                                    <h1 style={{fontSize:"20px"}}>iOS</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img  style={{margin:"10px"}} src={img2}/>
                                    <h1 style={{fontSize:"20px"}}>Android</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img style={{margin:"10px"}} src={img3}/>
                                    <h1 style={{fontSize:"20px"}}>Crossplatform</h1>
                                </div>
                            </div>
                        </div><h1>Технологии</h1>
                        <div className="container">
                            
                        <div className="row">
                                        <div style={{marginLeft:"15px"}} className="col-3">
                                            <img src={img7}/>
                                            <h5>Swift</h5>
                                        </div>
                                        <div style={{marginLeft:"15px"}} className="col-3">
                                            <img src={img8}/>
                                            <h5>Kotlin</h5>
                                        </div>
                                        <div style={{marginLeft:"15px"}} className="col-3">
                                            <img src={img9} width="40" style={{margin:"10px"}}/>
                                            <h5>Flutter</h5>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className="col-6 clo6" style={{display:"flex" , justifyContent:"center" , alignItems:"center" , textAlign:"center"}}>
                        <img className="imgs" src={img11}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Design 