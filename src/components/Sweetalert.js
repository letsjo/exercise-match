import React from 'react'
import Swal from "sweetalert2";

const Sweetalert = () => {
    
    
    
    const Alert = (e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    
    
  return (
    
    <div onClick={(e)=>{Alert(e)}}>Sweetalert</div>
  )
}

export default Sweetalert