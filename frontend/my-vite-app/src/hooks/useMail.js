import { useState } from "react";
import toastHelpers from "../utils/utils";
import axios from "axios";

const useMail = () => {
  console.log("inside custom hook");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const sendEmail = async (formData) => {
    const success = handleInputErrors(formData);
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      console.log("calling api");
      const response = await axios.post('http://localhost:3000/sendEmail', formData);
      console.log("reponse getting from backend", response);

      console.log("response data", response.data);
      setData(response.data);
      setError(false);
    } catch (error) {
      console.log("error in fetching api in custom hook", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, sendEmail };
};

const handleInputErrors = (formData) => {
  console.log("form data in handleInput Error", formData);

  if (!formData.to || !formData.message || !formData.subject) {
    console.log("Toast all message required");
    toastHelpers.notifyError("All Fields Require");
    return false;
  }
  return true;
};

export default useMail;
