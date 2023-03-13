import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Team.css'
import img1 from './imgs/1.svg'
function Team(){
    return(
        <React.Fragment>
            <div className="container cont2" style={{marginBottom:"90px"}} id='bb'>
                <div className="row">
                    <div className="col-12 col12">
                        <h1 className="tit1" style={{color:"blue"}}>
                        Выделенная команда
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container cont">
                <div className="row cont1">
                    <div className="col-6">
                        <h3 className="Title" style={{color:"gray" , marginTop:"100px" , position:"relative"}}>
                        Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики
                        </h3>
                       
                    </div>
                    <div className="col-6">
                        <img className="img1" src={img1} style={{width:"500px" , height:"500px"}}   />
                    </div>
                    <div className="abc">
                            <h1 className="number-animation" style={{color:"blue" , marginTop:"150px" , fontSize:"75px"}}>100+</h1>
                            <h1>Сотрудников</h1>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Team