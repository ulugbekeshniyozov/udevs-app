import React from "react";
import "./Nav.css";
import img from './img/img.svg';
import img4 from './img/img4.svg';
import img5 from './img/img5.svg';
import img6 from './img/img6.svg';
import img7 from './img/img7.svg';
import img8 from './img/img8.svg';
import img9 from './img/img9.svg';
import img10 from './img/img10.svg';
import img11 from './img/img11.svg';
import img12 from './img/img12.svg';
import img13 from './img/img13.svg';
import img14 from './img/img14.svg';
import img15 from './img/img15.svg';
import img16 from './img/img16.svg';
import img17 from './img/img17.svg';
import img18 from './img/img18.svg';
import img19 from './img/img19.svg';
import img20 from './img/img20.svg';
import img21 from './img/img21.svg';
import img22 from './img/img22.svg';

function Nav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img className="img1" src={img}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:'30%'}} class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#aa" style={{textDecoration:"none" , color:"#000"}}>Услуги</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#bb">Команда</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Напрaвление
          </a>
          <ul class="dropdown-menu">                   
                <p className="noneLink"></p>
                <div className="noneDivs">
                    <div className="noneDiv">
                        <img className="img4" src={img4}/>
                        <a href="#Mobile" style={{textDecoration:"none" , color:"#000"}} className="text1" >Mobile development Разработка мобиприложений</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img5}/>
                        <a href="#Erp" style={{textDecoration:"none" , color:"#000"}}  className="text">ERP systems Разработка и внедрение ERP систем</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img6}/>
                        <a className="text" href="#cc" style={{textDecoration:"none" , color:"#000"}}>UX/UI design UI / UX дизайн</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img7}/>
                        <a className="text" href='#dd' style={{textDecoration:"none" , color:"#000"}}>IT Consulting IT консалтинг</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img8}/>
                        <a href="#ss" className="text" style={{textDecoration:"none" , color:"#000"}}>Optimization Оптимизация инфраструктуры</a>
                    </div>
                </div>
          </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#ee">Инструменты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Клиенты</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#ee" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Портфолио
          </a>
          <ul class="dropdown-menu">
            <p>Портфолио</p>
            <p className="noneLink"></p>
                <div className="noneDivs3">
                    <div className="noneDiv">
                        <img className="img4" src={img9}/>
                        <a href="#del" style={{textDecoration:"none" , color:"#000"}} className="text3">Delever</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img10}/>
                        <a href="#sms" style={{textDecoration:"none" , color:"#000"}} className="text3">Sms.Uz</a>
                    </div>
                    <div className="noneDiv">
                        <img className="img4" src={img12}/>
                        <a href="#Iman" style={{textDecoration:"none" , color:"#000"}} className="text3">Iman</a>
                    </div>
                </div>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Язык
          </a>
          <ul style={{width:'100px'}} class="dropdown-menu">
            <p className="link">Язык</p>
                <p className="nonelink"></p>
                <div className="noneDivs3">
                    <div className="noneDiv3">
                        <img className="img6" src={img13}/>
                        <p className="nonelink2">Рус</p>
                    </div>
                    <div className="noneDiv3">
                        <img className="img6" src={img14}/>
                        <p className="nonelink2">Eng</p>
                    </div>
                </div>
          </ul>
        </li>
        <button type="button" class="btn btn-primary"><a style={{textDecoration:"none" , color:"#fff"}} href="#con">Связаться</a></button>
      </ul>
    </div>
  </div>
</nav>
        
        <div className="divHeader container" >
            <div className="divContainer2">
                <div className="rowBottom">
                    <div className="col6Div" style={{marginRight:"0px"}}>
                        <img className="img8" src={img}/>
                        <h1 className="ITcomp">IT-Аутсорсинг Компания</h1>
                        <h2 className="mobilApplication">Разработка мобильных приложений</h2>
                        <button type="button" class="btn btn-primary"><a style={{textDecoration:"none" , color:"#fff"}} href="#con">Связаться</a></button>
                    </div>
                    <div className="col6Div" style={{marginLeft:"200px"}}>
                        <img id="img" src={img15}/>
                    </div>
                </div>
            </div>
        </div>
       
        
        </>
    )
}

export default Nav;
