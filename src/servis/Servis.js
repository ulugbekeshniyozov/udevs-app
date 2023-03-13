import React from "react";
import './Servis.css'
import img1 from './imgs/1.svg'
import img2 from './imgs/2.svg'
import img3 from './imgs/3.svg'
import img4 from './imgs/4.svg'
import img5 from './imgs/5.svg'
import img6 from './imgs/6.svg'

function Servis(){
    return(
        <React.Fragment>
            <div className="container" id="aa" style={{marginBottom:"90px"}}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="tit2" style={{color:"blue"}}>
                        Наши услуги
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container cont">
                <div className="row row1">
                    <div className="col-4 coll4" style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                        <img src={img1}  width="32" height={32} />
                        <h4 style={{margin:"50px -20px"}}>Выделенная команда</h4>
                    </div>
                    <div className="col-4 coll4" style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                    <img src={img2}  width="28" height={40} />
                    <h4 style={{margin:"50px -20px"}}>Разработка мобильных приложений</h4>
                    </div>
                    <div className="col-4 coll4" style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                    <img src={img3}  width="32" height={32} />
                    <h4 style={{margin:"50px -20px"}}>Разработка и внедрение ERP систем</h4>
                    </div>
                </div>
            </div>
            <div className="container cont" style={{marginBottom:"100px"}}>
                <div className="row row1">
                    <div className="col-4 coll4 " style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                    <img  src={img4} width="32" height={32} />
                    <h4 style={{margin:"50px -20px"}}>UI / UX дизайн</h4>
                    </div>
                    <div className="col-4 coll4" style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                    <img src={img5}  width="32" height={32} />
                    <h4 style={{margin:"50px -20px"}}>Оптимизация <br></br> инфраструктуры</h4>
                    </div>
                    <div className="col-4 col1 coll4" style={{width:"400px" , height:"150px" , backgroundColor:"#EDFFFC" , margin:"10px" , display:"flex" , borderRadius:"20px" , padding:"10px"}}>
                    <img src={img6}  width="32" height={32} />
                    <h4 style={{margin:"50px -20px"}}>IT консалтинг</h4>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Servis;