// src/Statistics.js
import React from 'react';

const Statistics = () => {
  // بيانات تجريبية
  const data = [
    { id: 1, name: 'نضال', age: 30, income: 5000 },
    { id: 2, name: 'حماس', age: 28, income: 4500 },
    { id: 3, name: 'هشام', age: 35, income: 6000 },
    { id: 4, name: 'عمر', age: 24, income: 4800 },
  ];

  // حساب بعض الإحصائيات
  const totalIncome = data.reduce((sum, person) => sum + person.income, 0);
  const averageAge = (data.reduce((sum, person) => sum + person.age, 0) / data.length).toFixed(1);

  // دالة الرجوع لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        padding: '20px',
        direction: 'rtl',
        fontFamily: 'Arial, sans-serif',
        marginTop: '80px', // لتفادي تغطية النافبار
        position: 'relative',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>البيانات الإحصائية</h2>
      <p>📊 مجموع الدخل: <strong>{totalIncome}</strong> دولار</p>
      <p>📈 متوسط العمر: <strong>{averageAge}</strong> سنة</p>

      <table
        style={{
          borderCollapse: 'collapse',
          marginTop: '20px',
          width: '100%',
          textAlign: 'center',
          fontSize: '16px',
        }}
      >
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th style={cellStyle}>معرف</th>
            <th style={cellStyle}>الاسم</th>
            <th style={cellStyle}>العمر</th>
            <th style={cellStyle}>الدخل</th>
          </tr>
        </thead>
        <tbody>
          {data.map(person => (
            <tr key={person.id}>
              <td style={cellStyle}>{person.id}</td>
              <td style={cellStyle}>{person.name}</td>
              <td style={cellStyle}>{person.age}</td>
              <td style={cellStyle}>{person.income}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* زر العودة إلى الأعلى */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '40px',
          backgroundColor: '#28a745',
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
};

// تنسيق الخلايا
const cellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
};

export default Statistics;
