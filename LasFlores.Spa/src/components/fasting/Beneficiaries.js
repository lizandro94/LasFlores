import React from 'react';
import { Input, Divider, Table } from "antd";
import MembersSelect from './MembersSelect';

const Beneficiaries = ({ membersList }) => {

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
      <MembersSelect membersList={membersList} />
      <Input style={{ width: 300, marginRight: 10 }} placeholder="N° miembro" />
      <Input style={{ width: 300 }} placeholder="Teléfono" />

      <br /><br />
      <Table style={{ paddingLeft: 300, paddingRight: 300 }} dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Beneficiaries;