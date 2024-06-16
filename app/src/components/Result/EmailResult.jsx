import React, { useState } from 'react';
import emailjs from  '@emailjs/browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import Buttons from '../Buttons/Buttons';

const EmailResult = () => {
  const [email, setEmail] = useState('');

  const capturePdf = async (element) => {
    const canvas = await html2canvas(element);
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), 
    pdf.internal.pageSize.getHeight());
    return pdf;
  };

  const uploadFileToCloudinary = async (file) => {
    try {
      console.log(import.meta.env.VITE_SERVICE_ID)
      const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;
      console.log(url)
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
    <div className = "">
      <form onSubmit={handleEmailResult}>
        <div className ="flex flex-col itesm-center justify-center gap-5">
        <div className = "px-[20px]">
          <div className ="mb-[20px] flex justify-center items-center">
        <label>
          Enter your email </label>
          </div>
          <div>
          <input className ="border border-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
         </div>
        </div >
        <div className="flex justify-center">
            <Buttons className="w-[100px]" primary rounded type="submit">
              Send
            </Buttons>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailResult;