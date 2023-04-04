import React from 'react';
import Link from 'next/link';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const HistorySection = () => {

  const handleApprove = (data, actions) => {
    // Aquí puedes realizar las acciones necesarias con los datos del pago
    // y luego redirigir al usuario a la página de compra completada
    window.location.replace('/Nota');
  };

  return (
    <div style={{
      minHeight:'100vh',
      width: '100%',
      padding: '100px',
      backgroundImage: `url(https://img3.wallspic.com/crops/2/3/9/6/46932/46932-pradera-flores_silvestres-daisy_familia-la_floracion_de_la_planta-montaje_de_escenografia-2345x1200.jpg)`,
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
      <img src={"/bee.png"} style={{ position: "absolute", top: "1em", left: "1em", height:"100px" }} alt="Logo" />
      <h2 style={{
        fontWeight: 'bold',
        marginBottom: '30px',
        fontSize: '40px',
          marginTop: '-10vh'
        ,
        color: '#fff'
      }}>
        Seleccione Su Metodo De Pago
      </h2>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.5',
        marginBottom: '30px',
        maxWidth: '600px',
        margin: '0 auto',
        color: '#fff'
      }}>
        
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: '50px auto'
      }}>
          <div style={{ 
          
          backgroundImage: `url(https://images.unsplash.com/photo-1543862475-eb136770ae9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcG8lMjBkZSUyMGZsb3Jlc3xlbnwwfHwwfHw%3D&w=1000&q=80)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex", 
          flexDirection: "column", 
         marginRight:'-100vh',
          padding: "4em", 
          height: "100%", 
          width: "50%", 
          position: "relative",
          margin:'auto',
          
        }} >
          <PayPalScriptProvider  options={{ "client-id": "ARcqupBl9vnDzXUA_VKxktccB8wBbi1M2evWM-0S7ljONURr2oBojp_kc4jopX9eJ-sYfrtF3nUEWLtf"
          }}>
          <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
          return actions.order.create({
          purchase_units: [
          {
          amount: {
          value: "10.05",
          },
          },
          ],
          });
          }}
          onApprove={handleApprove}
          onError={(err) => console.log(err)}
          />
          </PayPalScriptProvider>
          
          </div>
          <div style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1509881499954-4be7b4d33c3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbWlzc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex", 
      flexDirection: "column", 
      
      padding: "4em", 
      height: "100%", 
      width: "50%", 
      position: "relative",
      margin:'auto',
      marginRight:'-100vh'
    }} >
      
    </div>
  </div>

  <Link style={{backgroundColor: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      fontWeight: 'bold',
      color: '#000',
      textDecoration: 'none',
      marginTop: '50px',}} href="/">
    
      
    
      Volver a la página principal
    
  </Link>

</div>
);
};

export default HistorySection;
