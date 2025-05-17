import React from 'react';

function Ammar() {
  // دالة للتمرير إلى أعلى الصفحة smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '20px', paddingTop: '80px', direction: 'rtl', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <h2 style={{ textAlign: 'center' }}>مرحباً بك في صفحة عمار</h2>
      <p style={{ textAlign: 'center' }}>
        هذه الصفحة تحتوي على معلومات منظمة في جداول بالإضافة إلى بعض الصور.
      </p>

      <h3 style={{ marginTop: '30px' }}>الجدول الأول: معلومات شخصية</h3>
      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>المعلومة</th>
            <th>التفاصيل</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الاسم</td>
            <td>عمار</td>
          </tr>
          <tr>
            <td>العمر</td>
            <td>28 سنة</td>
          </tr>
          <tr>
            <td>المهنة</td>
            <td>مهندس برمجيات</td>
          </tr>
        </tbody>
      </table>

      <h3>الجدول الثاني: المهارات</h3>
      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>المهارة</th>
            <th>المستوى</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>متقدم</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>متوسط</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>متقدم</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginBottom: '20px' }}>صور من أعمال عمار</h3>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Image/01.jpeg`}
          alt="صورة 1"
          style={{ width: '45%', maxWidth: '400px', borderRadius: '8px' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Image/02.jpeg`}
          alt="صورة 2"
          style={{ width: '45%', maxWidth: '400px', borderRadius: '8px' }}
        />
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

export default Ammar;
