import React from "react";
import './Design.css'
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
            <div className="container con" style={{marginTop:"100px"}} id='cc'>
                <div className="row">
                    <div className="col-6">
                        <h1 style={{width:"300px" , color:"blue"}}>UI/UX Дизайн</h1>
                        <h3 className="res1" style={{margin:"50px 0px"}}>Наша компания придерживается подхода к дизайну, ориентированного на человека..</h3>
                        <div className="container">
                            <div className="row res2">
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img style={{margin:"10px"}}  src={img1}/>
                                    <h1 style={{fontSize:"20px"}}>UX</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img  style={{margin:"10px"}} src={img2}/>
                                    <h1 style={{fontSize:"20px"}}>UI</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                    <img style={{margin:"10px"}} src={img3}/>
                                    <h1 style={{fontSize:"20px"}}>Prototyping</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row res2">
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                <img style={{margin:"10px"}}  src={img4}/>
                                <h1 style={{fontSize:"20px"}}>Mobile Design</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                <img style={{margin:"10px"}}  src={img5}/>
                                <h1 style={{fontSize:"20px"}}>Web Design</h1>
                                </div>
                                <div className="col-4" style={{width:"180px" , backgroundColor:"#e8e9ed" , margin:"5px" , height:"150px" , borderRadius:"20px" }}>
                                <img style={{margin:"10px"}}  src={img6}/>
                                <h1 style={{fontSize:"20px"}}>Atomic Design</h1>
                                </div>
                                <h1 style={{marginTop:"20px"}}>Технологии</h1>
                                <div className="container" style={{marginTop:"20px"}} >
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={img7}/>
                                            <h5>Figma</h5>
                                        </div>
                                        <div className="col-3">
                                            <img src={img8}/>
                                            <h5>Sketch</h5>
                                        </div>
                                        <div className="col-3">
                                            <img src={img9} width="40" style={{margin:"10px"}}/>
                                            <h5>Lottie</h5>
                                        </div>
                                        <div className="col-3">
                                            <img src={img10 }/>
                                            <h5>Illustrator</h5>
                                        </div>
                                    </div>
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