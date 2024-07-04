import React, { useEffect, useState } from "react";
import toastHelpers from "../utils/utils";
import { Bounce, toast } from "react-toastify";
import useMail from "../hooks/useMail";

const SendMail = () => {
  const { loading, data, error, sendEmail } = useMail();

  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    //toastHelpers.notifyError("Erro in controller")
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(() => {
    if (data) {
      toastHelpers.notifySuccess(data.message);
    } else if (error) {
      toastHelpers.notifyError("Mail Not Sent. Something went wrong.");
    }
  }, [data, error]);
  const handleSubmit = async(e) => {
    console.log("hello");
    e.preventDefault();
    console.log("hello");
    console.log("formData", formData);
   await sendEmail(formData);

    //check for error
    console.log("err", error, "data", data, "loading", loading);
  };

  return (
    <div className="flex max-w-4xl flex-col items-center justify-center min-h-screen bg-green-400 p-4">
        <h5 className="font-bold font-serif">Send Email</h5>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mt-4">
        <div className="mb-4 flex justify-center items-center gap-4 p-5 rounded-lg">
          <label htmlFor="to" className="block text-gray-700 mb-2">
            To:{" "}
          </label>
          <input
            type="email"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recipient's email"
          />
        </div>

        <div className="mb-4 flex justify-center items-center gap-4 p-5 rounded-lg">
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject of the email"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
