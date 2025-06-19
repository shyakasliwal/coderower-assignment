// src/pages/UpdateRemark.jsx
import React, { useState } from 'react';
import axios from 'axios';

function UpdateRemark() {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const updateData = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
        remark,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error updating remark");
    }
  };

  return (
    <div>
      <h2>Update Remark</h2>
      <input
        type="text"
        placeholder="Enter Config ID"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Enter your remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      ></textarea>
      <br />
      <button onClick={updateData}>Submit</button>
      <div>{message}</div>
    </div>
  );
}

export default UpdateRemark;
