import React from "react";
import img1 from './imgs/1.svg'
import img2 from './imgs/2.svg'
import img3 from './imgs/3.svg'
import img4 from './imgs/4.svg'
import img5 from './imgs/5.svg'
import img6 from './imgs/6.svg'
import img7 from './imgs/7.jpg'
import './Cons.css'

function Const(){
    return(
        <React.Fragment>
            <div className="container cont" id="dd">
                <div className="row">
                    <h1 style={{color:"blue"}}>IT консалтинг</h1>
                    <div className="col-6">
                        <h3 style={{marginTop:"50px"}}>Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.</h3>
                        <div className="row" style={{ marginTop:"50px"}}>
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                            <img src={img1}/>
                            <h5>Frontend</h5>
                            </div>
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                            <img src={img2}/>
                            <h5>Backend</h5>
                            </div>
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                            <img src={img3}/>
                            <h5>Architecture</h5>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                                <img src={img4}/>
                                <h5>DevOps</h5>
                            </div>
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                            <img src={img5}/>
                            <h5>UX/UI</h5>
                            </div>
                            <div className="col-4" style={{width:"150px" , height:"100px" , backgroundColor:"#E7FFFE" , margin:"5px" , borderRadius:"20px"}}>
                            <img src={img6}/>
                            <h5>QA</h5>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <img id="col-66" className="id" src={img7}/>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Const;