// src/App.jsx
import React from 'react';
import FetchConfig from './pages/FetchConfig';
import UpdateRemark from './pages/UpdateRemark';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>CodeRower Assignment - Frontend</h1>
      <FetchConfig />
      <hr style={{ margin: '20px 0' }} />
      <UpdateRemark />
    </div>
  );
}

export default App;

