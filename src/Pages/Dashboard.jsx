import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';

const udashboard = () => {
  const [data, setData] = useState({
    totalApplications: 0,
    statusCount: { approved: 0, pending: 0, rejected: 0 },
    departmentCount: {},
    dateWiseCount: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/udashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for visualizations
  const statusChartData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [
      {
        label: 'Status Count',
        data: Object.values(data.statusCount),
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
      }
    ]
  };

  const departmentChartData = {
    labels: Object.keys(data.departmentCount),
    datasets: [
      {
        label: 'Department Count',
        data: Object.values(data.departmentCount),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4CAF50']
      }
    ]
  };

  const dateChartData = {
    labels: Object.keys(data.dateWiseCount),
    datasets: [
      {
        label: 'Applications Over Time',
        data: Object.values(data.dateWiseCount),
        backgroundColor: '#42A5F5'
      }
    ]
  };

  return (
    <div>
      <h1>Medical Records Dashboard</h1>
      <h2>Total Applications: {data.totalApplications}</h2>
      
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h3>Status Distribution</h3>
        <Pie data={statusChartData} />
      </div>

      <div style={{ width: '50%', margin: '0 auto', marginTop: '2rem' }}>
        <h3>Department Distribution</h3>
        <Bar data={departmentChartData} />
      </div>

      <div style={{ width: '50%', margin: '0 auto', marginTop: '2rem' }}>
        <h3>Applications Over Time</h3>
        <Bar data={dateChartData} />
      </div>
    </div>
  );
};

export default udashboard;


 
