import React from 'react';
import { Table, Button } from 'antd';

import { PeopleModel } from 'types';
import { ColumnsType } from 'antd/lib/table';

type Porops = {
  dataSource?: PeopleModel[];
};
const PeopleTable = ({ dataSource }: Porops) => {
  const columns: ColumnsType<PeopleModel> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Birth Year',
      dataIndex: 'birthYear',
      key: 'birthYear',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Home World',
      dataIndex: 'homeworld',
      key: 'homeworld',
      render: (_, row) => <>{row?.homeworld?.name}</>,
    },
    {
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
      render: (_, row) => <>{row?.species?.name || '-'}</>,
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
    />
  );
};

export default PeopleTable;
