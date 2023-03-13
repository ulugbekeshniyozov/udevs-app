import React from "react";
import img1 from './imgs/1.svg'
import img2 from './imgs/2.svg'
import img3 from './imgs/3.svg'
import './Form.css'



function Form(){
    return(
        <React.Fragment>
            <div className="container" id="con" style={{marginTop:"100px" , boxShadow:"0px 0px 10px 10px"}}>
                <div className="row" style={{width:"100%"}}>
                    <h1 style={{marginBottom:"50px" , color:"blue"}}>Свяжитесь с нами</h1>
                    <div className="col-6">
  <form action="">
                    <div class="form-floating mb-3">
      <input style={{border:"2px solid gray"}} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating">
      <input style={{border:"2px solid gray"}} type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Email address</label>
      <div class="form-floating mb-3" style={{marginTop:"50px"}}>
      <input style={{height:"100px" , border:"2px solid gray"}} type="text" class="form-control" id="floatingInputDisabled" placeholder="name@example.com"/>
      <label for="floatingInputDisabled">Comment</label>
      </div>
      <button className="btn btn-primary" style={{width:"200px"}}>Send</button>
</div>
  </form>
                    </div>
                    <div className="col-6">
                        <div class="row" style={{marginTop:"10px"}}>
                            <img style={{width:"50px"}} src={img1}/>
                            Qashqadaryo .Qarshi rayon , Mustaqillik mahallasi
                        </div>
                        <div class="row" style={{marginTop:"10px"}}>
                            <img style={{width:"50px"}} src={img2}/>
                            +998 (95) 551-13-29
                        </div>
                        <div class="row" style={{marginTop:"10px"}}>
                            <img style={{width:"50px"}} src={img3}/>
                            name@example.com
                        </div>
                        <iframe className="ifr" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.195719809557!2d65.7989557330963!3d38.861418520158814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea637038f9d7f%3A0xa3d3214c3725c514!2sYoshlar%20markazi!5e0!3m2!1sru!2s!4v1677687187032!5m2!1sru!2s" width="300" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
// function btn() {
//     alert("Данные отправлены!")
// }
export default Form