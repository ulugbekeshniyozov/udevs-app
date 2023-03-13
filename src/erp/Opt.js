import React from "react";
import './Opt.css'
import img1 from './imgs/12.png'
import img2 from './imgs/1.svg'
import img3 from './imgs/2.svg'
import img4 from './imgs/3.svg'
import img5 from './imgs/4.svg'
import img6 from './imgs/5.svg'
import img7 from './imgs/6.svg'
import img8 from './imgs/7.svg'
function Opt(){
    return(
        <React.Fragment>
           <div className="container" id="Erp" style={{marginTop:"200px"}}>
                <div className="row rwo">
                    <h1 id="ss" style={{marginBottom:"100px" , color:"blue"}}>ERP cистемы</h1>
                    <div className="col-6 clk">
                        <img src={img1}/>
                    </div>
                    <div className="col-6" id="col-6" style={{height:"500px"}}>
                        
                        <h3 className="res">IT Системы любого уровня сложности в удобные для вас сроки.</h3>
                        <div className="row res1">
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img2}/>
                                <h5>Architecture</h5>
                             </div>
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img3}/>
                                <h5>Auto testing</h5>
                             </div>
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img4}/>
                                <h5>Stress testing</h5>
                             </div>
                        </div>
                        <div className="row res1 res2">
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img5}/>
                                <h5>Load testing</h5>
                             </div>
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img6}/>
                                <h5>Devops</h5>
                             </div>
                            <div className="col-4" style={{width:'150px' ,
                             height:"90px", backgroundColor:'#ABC8FF' , margin:"10px" , borderRadius:"20px" , marginLeft:"10px"}}>
                                <img src={img7}/>
                                <h5>Cloud</h5>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Opt;