import React from 'react';
import { Select, Input, Divider, Table } from "antd";

const Beneficiaries = () => {
  const { Option } = Select;

  const dataSource = [];
  
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Numero miembro',
      dataIndex: 'memberNumber',
      key: 'memberNumber',
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

  return (
    <>
      <Divider>Beneficiarios</Divider>
      <Select style={{ width: 300, marginRight: 10 }} placeholder="Nombre">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Input style={{ width: 300, marginRight: 10 }} placeholder="N° miembro" />
      <Input style={{ width: 300 }} placeholder="Teléfono" />

      <br /><br />
      <Table style={{paddingLeft: 300, paddingRight: 300}} dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Beneficiaries;