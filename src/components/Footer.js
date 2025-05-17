import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ Khaled B Group</p>
      <p>للتواصل: info@example.com | 01012345678</p>
    </footer>
  );
};

export default Footer;
