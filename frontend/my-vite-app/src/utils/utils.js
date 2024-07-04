import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastHelpers = {
  notifyDefault: (message) => {
    toast(message);
  },
  notifySuccess: (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  },
  notifyError: (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  },
  notifyWarning: (message) => {
    toast.warn(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000,
    });
  },
  notifyInfo: (message) => {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  },
};

export function showCustomizedAlert(errorMessage) {
  Swal.fire({
    title: "Error!",
    text: errorMessage,
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "#008B8B",
    background: "#FFFFFF",
    width: "300px",
    padding: "10px",
    customClass: {
      confirmButton: "custom-swal-confirm", // Apply custom class to the confirm button
      icon: "icon-swal",
      title: "title-swal",
      text: "text-swal",
    },
  });
}

export function showToast(message) {
  var toast = document.getElementById("toastMessage");
  toast.innerText = message; // Set the message text
  toast.style.display = "block";

  return new Promise((resolve) => {
    setTimeout(function () {
      toast.style.display = "none";
      resolve(); // Resolve the promise after hiding the toast
    }, 2500); // Hide the toast after 3 seconds
  }); // Hide the toast after 3 seconds
}

export default toastHelpers;
