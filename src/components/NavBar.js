import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // تأكد من المسار الصحيح

function NavBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      padding: '0px',
      backgroundColor: '#eee',
      display: 'flex',
      alignItems: 'center',
      direction: 'ltr',
      fontSize: '18px',
      margin: 0,
      boxShadow: '0 2px 4px hsla(246, 81.30%, 51.80%, 0.10)',
    }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '60px',
          width: '60px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginRight: '15px',
        }}
      />
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px', direction: 'rtl' }}>
        <Link to="/">الرئيسية</Link>
        <Link to="/omar">عمر</Link>
        <Link to="/hesham">هشام</Link>
        <Link to="/ammar">عمار</Link>
        <Link to="/nedal">نضال</Link>
        <Link to="/hamas">حماس</Link>
        <Link to="/khaled">خالد</Link>
        <Link to="/statistics">إحصائيات</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/contact">تواصل معنا</Link>
      </div>
    </nav>
  );
}

export default NavBar;
