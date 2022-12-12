import React from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function ThankYou() {
  const idOrder = useParams().idOrder;

  const alert = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      text: 'El id de tu compra es:',
      footer: idOrder,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton:false,
    })
  }

  return (
    <div>
      {alert()}
    </div>
    );
}

export default ThankYou;