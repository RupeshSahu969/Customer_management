import React from 'react';
import useSWR from 'swr';
import fetcher from '../Lib/fetcher';
import { Skeleton, Table, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';

const Customers = () => {
  const { data, error, isLoading, mutate } = useSWR('/customer', fetcher); // mutate helps to revalidate after delete

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`/customer/${id}`);
      message.success('Customer deleted successfully');
      mutate(); // revalidate after delete
    } catch (err) {
      message.error('Failed to delete customer');
    }
  };

  const columns = [
    {
      key: 'fullname',
      title: 'Fullname',
      dataIndex: 'fullname',
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'mobile',
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      key: 'action',
      title: 'Action',
      render: (item) => (
        <div className='space-x-3'>
          <Button
            icon={<EditOutlined />}
            type="default"
            style={{ color: 'violet', borderColor: 'violet' }}
          />
          <Button
            onClick={() => deleteCustomer(item._id)}
            icon={<DeleteOutlined />}
            danger
          />
        </div>
      ),
    },
  ];

  if (isLoading) return <Skeleton active />;
  if (error) return <div>Error loading customers.</div>;

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data} // assuming data is an array
        rowKey="_id"
      />
    </div>
  );
};

export default Customers;
