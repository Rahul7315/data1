import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home({ employees }) {
  return (
    <ul>
      {employees.map((emp) => (
        <li key={emp.id}>
          <strong>ID:</strong> {emp.id}, <strong>Name:</strong> {emp.name},{' '}
          <strong>email:</strong> {emp.email}, <strong>Location:</strong>{' '}
          {emp.email}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://rahul7315.github.io/JSON_API/db.json'
      );
      const jsonData = response.data;
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {data && data.Emp ? (
        <Home employees={data.Emp} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
