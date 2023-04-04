import { ClassNames } from '@emotion/react';
import Head from 'next/head';

function PurchaseConfirmation() {
  return (
    <>
    <div style={{
    width: '100%',
    padding: '100px',
    backgroundImage: `url(https://fondosmil.com/fondo/42998.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
  }}>
      <h1>Compra realizada</h1>
      <img className="img" src="https://cdn-icons-png.flaticon.com/512/57/57629.png" alt="" />

      <div className="principal">

        <div className="grande">
          <div>
            <h2 className="fila">productos</h2>
            <h2 className="fila">Precio</h2>
            <h2 className="fila">N. de rastreo</h2>
          </div>
          <div>
            <img className="producto" src="https://www.guiadesuplementos.mx/wp-content/uploads/2019/10/Miel-0-Valentyn-Volkov-47443030_l-scaled.jpg" alt="" />
            <h2 className="fila3">$200</h2>
            <h2 className="fila2">301584873218FR0A02XKTK</h2>
          </div>
          <h1>¡¡Gracias por su compra!!</h1>
        </div>
      </div>

      <div>
      <h1>Siga su pedido</h1>
      <div className="slider">
        <div className="slider-track">
          <a href="https://www.fedex.com/es-mx/tracking.html">
            <div className="slider">
              <img
                src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado-1200x900.jpg"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.dhl.com/mx-es/home/rastreo.html">
            <div className="slider">
              <img
                src="https://i0.wp.com/mundoitam.com/wp-content/uploads/2020/05/DHL-Logo.png?fit=1280%2C721&ssl=1"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.estafeta.com/Herramientas/Rastreo">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logo_de_Estafeta.svg/6834px-Logo_de_Estafeta.svg.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.redpack.com.mx/es/rastreo/">
            <div className="slider">
              <img
                src="https://www.redpack.com.mx/wp-content/uploads/2021/06/logored-uai-2064x306.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.ups.com/track?loc=es_MX&requester=ST/">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/320px-United_Parcel_Service_logo_2014.svg.png"
                alt=""
              />

<img
                src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado-1200x900.jpg"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.dhl.com/mx-es/home/rastreo.html">
            <div className="slider">
              <img
                src="https://i0.wp.com/mundoitam.com/wp-content/uploads/2020/05/DHL-Logo.png?fit=1280%2C721&ssl=1"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.estafeta.com/Herramientas/Rastreo">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logo_de_Estafeta.svg/6834px-Logo_de_Estafeta.svg.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.redpack.com.mx/es/rastreo/">
            <div className="slider">
              <img
                src="https://www.redpack.com.mx/wp-content/uploads/2021/06/logored-uai-2064x306.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.ups.com/track?loc=es_MX&requester=ST/">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/320px-United_Parcel_Service_logo_2014.svg.png"
                alt=""
              />

<img
                src="https://graffica.info/wp-content/uploads/2017/06/FedEXCabEnfocado-1200x900.jpg"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.dhl.com/mx-es/home/rastreo.html">
            <div className="slider">
              <img
                src="https://i0.wp.com/mundoitam.com/wp-content/uploads/2020/05/DHL-Logo.png?fit=1280%2C721&ssl=1"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.estafeta.com/Herramientas/Rastreo">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logo_de_Estafeta.svg/6834px-Logo_de_Estafeta.svg.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.redpack.com.mx/es/rastreo/">
            <div className="slider">
              <img
                src="https://www.redpack.com.mx/wp-content/uploads/2021/06/logored-uai-2064x306.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://www.ups.com/track?loc=es_MX&requester=ST/">
            <div className="slider">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/320px-United_Parcel_Service_logo_2014.svg.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    
    <style jsx>{`

    .slider{
        display: flex;
        height: auto;
        margin: auto;
        overflow: hidden;
        align-items: center;
    }

    .slider:before{
        position: absolute;
        z-index: 1;
        left: 0;
        content: "";
        height: 110px;
        background: linear-gradient(-90deg, hsla(0, 0%, 96.9%, 0), #ffffff);
    }

    .slider:after{
        position: absolute;
        z-index: 2; 
        right: 0;
        content: "";
        width: 300px;
        height: 110px;
        background: linear-gradient(90deg, hsla(0, 0%, 96.9%, 0), hsla(0, 0%, 96.9%, 0)99%);
    }

    .slider .slider-track{
        display: flex;
        animation: scroll 35s linear infinite;
        -webkit-animation: scroll 35s linear infinite;
        width: calc(240px * 10);
    }

    .slider .slider{
        display: flex;
    }

    .slider .slider img{
        width: 180px;
        height: 80px;
        padding: 10px;
        background-color: #f7f7f7;
        cursor: pointer;
        margin: 20px;
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba( 0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    @keyframes scroll{
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100%{
            -webkit-transform: translateX(calc(-240px * 5));
            transform: translateX(calc(-240px * 5));
        }
    }

    .fila2{
        display: inline-block;
       
        justify-content: center;
    }
    .fila3{
      display: inline-block;
     margin-right: 220px;
      justify-content: center;
  }

    .fila{
        display: inline-block;
        margin-right: 230px;
        
    }
    .fila{
        display: inline-block;
        margin-right: 230px;
        
    }

    .producto{
        width: 150px;
        height: 100px;
        margin-left: 40px;
        padding-top: 50px;
        text-align: left;
        display: inline-block;
        margin-right: 200px;
    }

    .grande{
        height: 100px;
        width: 9000px;
        
    }
    h1{
        text-align: center;
    }

    h2{
        margin-left: 50px;
    }

    .img{
        width: 200px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .principal{
        display: flex;
        list-style: none;
        width: 1200px;
        height: 330px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgb(255, 255, 255);
       
        border-radius: 15px;
    }
    
    `}
    
</style>
</div>
    </>
  );
}

export default PurchaseConfirmation;