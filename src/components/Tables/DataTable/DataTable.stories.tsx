import React from 'react';
import DataTable from './index';

export default {
  title: 'Components/Tables/DataTable',
  component: DataTable,
};

const sample = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', createdAt: '2024-01-10' },
  { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'User', createdAt: '2024-02-20' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Editor', createdAt: '2024-03-05' },
];

export const Default = () => (
  <div style={{ padding: 20 }}>
    <DataTable data={sample} pageSize={5} selectable />
  </div>
);
