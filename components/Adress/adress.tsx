import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
function Registro() {

  return (
    <>
    <html>
    <body>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" />
        </head>
        

    <div className="container mt-1">
      <div className="col logo d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
      <div className="col bg-white p-5 rounded-end">
        <div className="text-left">
          <img className="hola" src="" />
          <div>
            <h2 className="fw-bold text-center py-5">Completa Tu Pedido</h2>
            <h4 className="fw-bold text-center py-5">
              Introduzca Su Informacion
            </h4>
            <br />
            <form>
              <div className="mb-5">
                <label htmlFor="pais" className="form-label">
                  Pais*
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pais"
                  id="country"
                  placeholder="Escriba pais"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="Estado" className="form-label">
                  Estado*
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Estado"
                  id="state"
                  placeholder="Escriba su Estado"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="Ciudad" className="form-label">
                  Ciudad*
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="ciuda"
                  placeholder="Escriba su ciudad"
                />
              </div>

              <div className="mb-5">
                <label className="form-label" htmlFor="select1">
                  Elige tu paqueteria*
                </label>
                <select
                  id="select1"
                  className="form-select"
                >
                   <option value="1">Fedex</option>
                    <option value="2">Estafeta</option>
                    <option value="3">Ups</option>
                    <option value="4">Redpack</option>
                    <option value="5">Dhl</option>
                    </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="postal" className="form-label">Direccion*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="Codigo Postal" 
                                id="postal" 
                                placeholder="Escriba su Codigo Postal"
                            />
                        </div>
                        <div className="mb-5">
    <label htmlFor="postal" className="form-label">Codigo Postal*</label>
    <input 
        type="text" 
        className="form-control" 
        name="Codigo Postal" 
        id="postal" 
        placeholder="Escriba su Codigo Postal"
    />
</div>
<div className="mb-5 form-check">
    <input 
        type="checkbox" 
        name="connected" 
        className="form-check-input"
    />
    <label htmlFor="connected" className="form-check-label">Mi direccion de envio y factura son los mismos</label>
</div>
<div className="d-grid text-center">
    <div style={{marginRight:'10vh',}}>
    <button
          type="submit"
          className="btn btn-primary mt-4 animate__animated animate__zoomIn"
          onClick={() => {
            Swal.fire("¡Datos Enviados!", "", "success");
          }}
        >
         Enviar
        </button>
    </div>
    <div style={{marginLeft:'-10vh',left:''}}>
        <br />  
        <span > 
            <Link href="/pay" className="text-decoration-none" >
                <button type="button" className="btn btn-primary button">Ir a pagar</button>
            </Link>
        </span>                                      
    </div>
</div> 
                    </form>
                    <div id="error"></div>
                    <div className="container w-100 my-5">
                        <div className="row text-center">
                           
                            <div className="col-12"></div>
                            <div className="row">
                                <div className="col">
                                   
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
<style jsx>{`
  .hola
  {
      
      width: 70px;
  
  
  }
  .sd
  {
      width: 35px;
  }
  
  
  
  body
  {
      background: #ffe259;
      background: linear-gradient(to left, #ffa751, #ffe259);
  }
  .mb-4
  {
   width: auto;
   margin-left: auto;
      margin-right: auto;
  }
  
  .conteiner
  {
      width: auto;
  }
  
  
  #menu{
      font-size: 18px;
      font-weight: bold;
      color: black;
  }
  #menu li a{
      font-size: 18px;
      font-weight: bold;
      color: black;
  }
  #telefono{
      padding-right: 100px;
      padding-left: 30px;
      width: 30px;
  }
  #mensaje{
      padding-right: 30px;
      width: 30px;
      padding-left: 30px;
  }
  #carrito{
      width: 30px;
      border: 30px;
  }
  
  .carousel-inner{
      max-height: 35rem;
  }
  @media(max-width:768px){
      #intro{
          width: 90% !important;
      }
          .servicio-fila{
              width: 100% !important;
              text-align: center;
          }
     #intro2{
      width:90% !important ;
     }
     #intro3{
      width:90% !important ;
     
      }
      #intro4{
          width:90% !important ;
     }
     #intro5{
          width:90% !important ;
     }
     #intro7{
      width:90% !important ;
     }
  
  }
  @media(max-width:576px){
      .icono-wrap{
          flex-wrap: wrap;
          justify-content: center !important;
      }
      .ajuste{
          flex-wrap: wrap;
          margin-left: 125px !important;
      }
      .ajuste2{
  
          text-align: center !important;
      }
      #intro6{
          width:300px !important ;
         }
         .intro8{
          width:335px !important ;
         }
  }
  
  #local{
      background: #f3f3f3;
      padding-bottom: 300px;
      display:flex;
      justify-content: center;
  }
  .wrapper{
      width: 50%;
      margin-left: 100px;
      padding-top: 150px; ;
  }
  .redes-sociales{
      padding-right: 15px;
  }
  .icono-wrap:hover{
      transform: scale(1.10);
  }
  
  .carousel-caption {
      top: 65%!important;
      transform: translateY(-75%);
  }
  @media(max-width:576px){
      .icono-wrap1{
          flex-wrap: wrap;
          justify-content: center !important;
      }
  }
`}
</style>

</body>
</html>
</>
);
}
export default Registro