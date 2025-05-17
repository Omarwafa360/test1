import React from 'react';

function Hamas() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      padding: '20px',
      paddingTop: '100px',
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    }}>
      <h2 style={{ textAlign: 'center' }}>welcom every body with Mr.Hamas</h2>
      
      <p style={{ textAlign: 'center' }}>
        في هذه الصفحة، نعرض مجموعة من الصور الجميلة، جدول معلومات، وفيديو تعريفي.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          maxWidth: '530px',
          margin: 'auto',
          marginBottom: '30px',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Image/09.jpeg`}
          alt="صورة 09"
          style={{ width: '250px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Image/10.jpeg`}
          alt="صورة 10"
          style={{ width: '250px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Image/01.jpeg`}
          alt="صورة 01"
          style={{ width: '250px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Image/02.jpeg`}
          alt="صورة 02"
          style={{ width: '250px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <h3>معلومات مهمة</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>العنصر</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>الوصف</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>الصور</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>مجموعة من الصور المميزة</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>الفيديو</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>مقطع تعريفي بالصفحة</td>
          </tr>
        </tbody>
      </table>

      <h3>فيديو تعريفي</h3>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/7I4Rr1nC-Mc"
          title="فيديو تعريفي"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
        ></iframe>
      </div>

      {/* زر العودة إلى الأعلى */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '12px 18px',
          borderRadius: '50%',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 1000,
        }}
        aria-label="العودة إلى الأعلى"
        title="العودة إلى الأعلى"
      >
        ↑
      </button>
    </div>
  );
}

export default Hamas;
