// src/pages/FetchConfig.jsx
import React, { useState } from 'react';
import axios from 'axios';

function FetchConfig() {
  const [configId, setConfigId] = useState('');
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setResult(res.data);
    } catch (err) {
      alert("No data found for this configId");
      setResult([]);
    }
  };

  return (
    <div>
      <h2>Fetch Configuration</h2>
      <input
        type="text"
        placeholder="Enter Config ID"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <button onClick={fetchData}>Submit</button>

      {result.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {result.map((row, index) => (
            <div key={index}>{row.join(', ')}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchConfig;
