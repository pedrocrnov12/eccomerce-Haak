import React from 'react'
import Link from 'next/link';
export default function Navegacion() {
  return (
    
    <>
      <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>  
      </head>
      <div className="promo">
        <div>
        <Link href={"/"}>
        <img src={"/logo.png"} style={{ position: "absolute", top: "1em", left: "10vh", height:"185px", marginTop:'-5vh' }} alt="Logo" />
        </Link>
        <div style={{left:'55vh', marginTop:'-23vh'}} className="navbar">
            <ul className="nav navbar-nav">
                <li> <a className="nice" href="/History">Historia</a> </li>
          
                <li><a className="nice" href="/">Contacto</a> </li>
                <li><a className="nice" href="/">Comprar</a> </li>
            </ul>
        </div>
        </div>
    </div>
      <style jsx>{`

        .navbar{
          
          top: 6em;
          padding: 110px;        
        }


        .nice {
          color:white ;
          font-size: 30px;
          -webkit-text-stroke: .4px black;
          text-align: left;
          margin-right: 20px;
         padding: 10px;
        }

        .nav li:after {
          content: '';
          display: block;
          border-bottom: 2px solid #38fd07;
          transform: scaleX(0);
          transition: .2s ease-in-out;
        }

        .nav li:hover:after {
          transform: scaleX(1);
        }

        .para h3 {
          text-align: center;
          margin-top: 15%;
          color: #fff;
          font-family: nyala;
          font-size: 44px;
        }

        .parrafo{
        text-align: center;
        box-sizing: border-box;
        margin: 0 0 15px 0;
        letter-spacing: 1px;
        color: #FFF;
        font-size: 25px;
        line-height: 28px;
        -webkit-text-stroke: 1px black;
        text-stroke: 1px black;
        }

        .para{
          line-height: 1.42857143;
          font-family: "NexaRegular", Lucida Sans Unicode, Lucida Grande, sans-serif;
          font-size: 16px;
          color: #060606;
          box-sizing: border-box;
          text-align: center;
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 80%;
          height: 450px;
          top: 250px !important;
        }
        
        .titulo{
        text-align: center;
        box-sizing: border-box;
        font-weight: 9000;
        font-family: 'Colus-Regular';
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFF;
        margin: 50px;
        font-size: 60px;
        line-height: 110px;
        -webkit-text-stroke: 1px black;
        text-stroke: 1px black;
        }
          .seccion {
            
            display: flex;
            width: 1450px;
            justify-content: center;
            height:400px;
            margin: 0 auto;
            
          }
          
          .img {
            width: 0;
            flex-grow: 2;
            object-fit: cover;
            opacity: .9;
            transition: 0.9s ease;
          }
          
          .img:hover{
            width: 250px;
            opacity: 1;
            filter: contrast(120%);
          }

          .capa{
            position: flex;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;          
            mix-blend-mode: overlay;
          }

            .promo2{
              padding-top: 30%;
              display: flex;
              flex-direction: Column;
              justify-content: center;
              align-items: center;
              width: 60%;
              margin: 10%;
              position: relative;     
              }

      `}</style>

    </>
  );
  
  
}
