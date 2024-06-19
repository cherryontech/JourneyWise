import React, { useState } from 'react';
import emailjs from  '@emailjs/browser';
import html2canvas from './../../../node_modules/html2canvas';
import jsPDF from '../../../node_modules/jspdf';
import axios from 'axios';
import Buttons from '../Buttons/Buttons';
import './emailResult-custom.css'

const EmailResult = () => {
  const [email, setEmail] = useState('');
  console.log(html2canvas)

  const capturePdf = async (element) => {
    const canvas = await html2canvas(element, {
      width: element.offsetWidth,  // Capture width
      height: element.offsetHeight, // Capture height
      scrollY: -window.scrollY,     // Adjust for scroll position
      scrollX: -window.scrollX,
    });
  
    const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, canvas.width, canvas.height)
    
    return pdf;
  };
  

  const uploadFileToCloudinary = async (file) => {
    try {
      
      const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'doctyxnj');
      formData.append('tags', 'browser_upload');
      formData.append('resource_type', 'auto');  // Ensures Cloudinary auto-detects the file type
      
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
      throw new Error('Failed to upload file to Cloudinary');
    }
  };

  const handleEmailResult = async (e) => {
    e.preventDefault();
    const element = document.getElementById('result-container');

    try {
      const pdf = await capturePdf(element);
      const pdfBlob = pdf.output('blob');

      // Upload the PDF to Cloudinary
      const fileUrl = await uploadFileToCloudinary(new File([pdfBlob], 'result.pdf', { type: 'application/pdf' }));
      console.log('File URL:', fileUrl);

      // Send the email with the PDF link
      const templateParams = {
        user_email: email,
        message: 'Here is your result',
        link: fileUrl
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_ID,
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error generating or sending email:', error);
      alert('Failed to generate or send email.');
    }
  };

  return (
      <form onSubmit={handleEmailResult}>
        <div id="emailResultContainer">
          <img src="mdi_email-plus.svg" /> 
          <p>Input your email below and we’ll email you a printable PDF of your results.</p>
          <input className ="border border-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Email"
          /> 
            <Buttons className="w-[242px] h-[42px] mt-[42px]" primary rounded type="submit">
              SEND RESULTS
            </Buttons>
        </div>
      </form>
  );
};

export default EmailResult;