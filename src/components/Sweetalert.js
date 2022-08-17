import React from "react";
import Swal from "sweetalert2";

const Sweetalert = ({ comment = "Hello" }) => {

  const Alert = (e) => {
    e.preventDefault();
    Swal.fire(...comment);
  };

  // const Alert = (e)=>{
  //     e.preventDefault();
  //     Swal.fire(
        // 'Deleted!',
        // 'Your file has been deleted.',
        // 'success'
  //     )
  // }

  // const Alert = (e)=>{
  //     e.preventDefault();
  //     Swal.fire({
  //         title: 'Error!',
  //         text: 'Do you want to continue',
  //         icon: 'error',
  //         confirmButtonText: 'Cool'
  //       })
  // }

  return (
    <div
      onClick={(e) => {
        Alert(e);
      }}
    >
      Sweetalert
    </div>
  );
};

export default Sweetalert;
