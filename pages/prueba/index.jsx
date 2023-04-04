
import React from 'react'

export default function index() {
  return (
    
    <>
      <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>  
      </head>
   
      <div className="promo">
        <div>
        <img src={"/logo.png"} style={{ position: "absolute", top: "1em", left: "10em", height:"185px" }} alt="Logo" />
        
        <div className="navbar">
            <ul className="nav navbar-nav">
                <li> <a className="nice" href="http://">Historia</a> </li>
                <li> <a className="nice" href="">¿Qué es la miel?</a> </li>
                <li><a className="nice" href="">Contact</a> </li>
                <li><a className="nice" href="">Comprar</a> </li>
            </ul>
        </div>
        </div>
    </div>

            <div className="para">
              <b className="titulo">NUESTRA HISTORIA</b>
              <p className="parrafo">Corriendo la década de los 60´s la primera generación de productores de miel en la familia Martin se inicia en el oficio del produccion apicola dentro del municipio de Opichen, Yucatan.</p>
              <p className="parrafo">Muchos años después, ya bajo la responsabilidad de la segunda generación de apicultores se construye e inaugura la la sociedad de Kaab Haak bajo.</p>
              <p className="parrafo">Hoy en día es la tercera generación la que lleva la riendas de la empresa sin descuidar el origen agrícola de la misma, pues a la fecha la empresa mantiene sus propios apiarios garantizando así el abastecimiento y calidad de la miel.</p>
          </div>



      <div className="promo2">

      </div>

      <section className="seccion" >
        <img className="img" src="https://images.unsplash.com/photo-1568526381923-caf3fd520382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
        <img className="img" src="https://www.agroconsultar.com/images/cursoapicultura.jpg" />
        <img className="img" src="https://www.consumer.es/app/uploads/2019/07/img_colmena-3.jpg" />
        <img className="img" src="https://cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/4IFQ6C4CDRWLTMYDU66WSYIYSM.jpg" />
        <img className="img" src="https://informefracto.com/wp-content/uploads/2019/11/1092_kaab_cuatro_cuatro_museo_vivo.jpg" />
        <img className="img" src="https://p4.wallpaperbetter.com/wallpaper/274/846/487/bees-animals-macro-insect-wallpaper-preview.jpg" />
        <img className="img" src="https://thumbs.dreamstime.com/b/apicultor-que-comprueba-la-miel-producida-por-las-abejas-apicultura-o-es-el-mantenimiento-de-colonias-abeja-com%C3%BAnmente-en-152170066.jpg" />
        <img className="img" src="https://i0.wp.com/goula.lat/wp-content/uploads/2021/05/miel.jpg?resize=800%2C535&ssl=1" />
      </section>
      
      
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