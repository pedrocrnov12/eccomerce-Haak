import React from "react";

export default function Home() {
  const videoUrl = (urlVideo, tituloVideo, contenidoVideo) => {
    document.getElementById("slider").src = urlVideo;
    document.getElementById("titulo-video").textContent = tituloVideo;
    document.getElementById("contenido-video").textContent = contenidoVideo;
  };

  return (
    <html>
    <link
      href="https://www.dafontfree.net/embed/Y29sdXMtcmVndWxhciZkYXRhLzE1MjgvYy8xNzIwNjAvQ29sdXMtUmVndWxhci5vdGY"
      rel="stylesheet"
      type="text/css"
    />
    <section className="section">
      <div className="text-video">
        <div className="titulo " id="titulo-video"  style={{ fontFamily: 'colus-regular, sans-serif' }}>Kaab Haak Mexico</div>
        <p className="parrafo" id="contenido-video">Comprometidos Contigo</p>
        <p></p>
      </div>
      <video className="video" id="slider" autoPlay muted loop>
        <source src="/pinci.mp4" />
      </video>
      <ul className="navigation">
        <li
          onClick={() =>
            videoUrl(
              "/video2.mp4",
              "Historia:",
              "Corriendo la década de los 60´s la primera generación de productores de miel en la familia Martin se inicia en el oficio del produccion apicola dentro del municipio de Opichen, Yucatan. Muchos años después, ya bajo la responsabilidad de la segunda generación de apicultores se construye e inaugura la la sociedad de Kaab Haak bajo Hoy en día es la tercera generación la que lleva la riendas de la empresa sin descuidar el origen agrícola de la misma, pues a la fecha la empresa mantiene sus propios apiarios garantizando así el abastecimiento y calidad de la miel."

            )
          }
        >
          <img src="/slidera.jpeg" />
        </li>
        <li
          onClick={() =>
            videoUrl(
              "/video3.mp4",
              "Crianza",
              "La apicultura es una actividad apasionante que nos permite descubrir la maravillosa y compleja vida de las abejas, mientras obtenemos productos de alta calidad para nuestro consumo y disfrute. Es una práctica que requiere paciencia, dedicación y conocimiento, y que nos brinda la oportunidad de conectarnos con la naturaleza y aprender de ella. Además, la apicultura también es importante para la preservación de las poblaciones de abejas y para el equilibrio ecológico, ya que las abejas son fundamentales en la polinización de plantas y cultivos."
            )
          }
        >
          <img src="/slider (3).jpeg" />
        </li>
        <li
          onClick={() =>
            videoUrl(
              "/video4.mp4",
              "Recolección",
              "Durante la primavera, las abejas comienzan a recolectar grandes cantidades de miel, la cual almacenan en los panales de las colmenas. Cuando la mayoría de las abejas han terminado de almacenar la miel en los panales y la han cubierto con cera, los apicultores comienzan el proceso de extracción. Esto implica retirar los panales de las colmenas y retirar la cera que cubre los panales para poder extraer la miel."
            )
          }
        >
          <img src="/slider (4).jpeg" />
        </li>
        <li
          onClick={() =>
            videoUrl(
              "/video5.mp4",
              "Venta",
              ` Esta empresa se enfoca en comercializar miel producida por apicultores de pueblos indígenas, quienes crían abejas meliponas y africanas. La empresa también busca apoyar a los apicultores al comprar su miel a un precio justo y elevado, lo que les permite obtener una remuneración adecuada por su arduo trabajo y fomentar su desarrollo económico. ¡Es una iniciativa muy valiosa que promueve la equidad y la sostenibilidad!`
            )
          }
        >
          <img src="/slider (5).jpeg" />
        </li>
      </ul>
      <style jsx>{`




        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .text-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
        }

        #titulo-video,
        #contenido-video {
          display: block;
          font-family: "NexaRegular", Lucida Sans Unicode, Lucida Grande,
            sans-serif;
            color: #fff;
            text-align: center;
            margin-bottom: 20px;
            }
            .video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
          
              .navigation {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;
                z-index: 200;
              }
          
              .navigation li {
                cursor: pointer;
                margin: 0 15px;
                border-radius: 50%;
                overflow: hidden;
                width: 50px;
                height: 50px;
                border: 3px solid #fff;
                transition: all 0.3s ease;
              }
              .titulo{
                text-align: center;
                box-sizing: border-box;
                font-weight: 9000;
                text-transform: uppercase;
                color: #FFF;
                margin: 50px;
                line-height: 110px;
                font-size: 80px;
                letter-spacing: 2px;
                line-height: 70px;
                margin: 0 0 30px;
                }
          
              .navigation li:hover {
                border: 3px solid #e23b3b;
                transform: scale(1.1);
              }

              .parrafo{
                text-align: center;
                box-sizing: border-box;
                margin: 0 0 15px 0;
                letter-spacing: 1px;
                color: #FFF;
                font-size: 30px;
                line-height: 50px;
                }
          
              .navigation li img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s ease;
              }
          
              .navigation li:hover img {
                transform: scale(1.2);
              }
            `}</style>
          </section>
          </html>
          );
        }