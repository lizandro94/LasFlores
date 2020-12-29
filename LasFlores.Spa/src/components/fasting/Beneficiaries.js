import React from 'react';
import { Input, Divider, Table, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import MembersSelect from './MembersSelect';

const Beneficiaries = ({ membersList, beneficiary, onChangeBeneficiary }) => {

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
      <MembersSelect membersList={membersList} onChange={onChangeBeneficiary} />
      <Input style={{ width: 200, marginRight: 10 }} placeholder="N° miembro" value={beneficiary.memberNumber} />
      <Input style={{ width: 150, marginRight: 20 }} placeholder="Teléfono" value={beneficiary.phone} />
      <Button type="primary" shape="circle" icon={<PlusOutlined />} />

      <br /><br />
      <Table style={{ paddingLeft: 300, paddingRight: 300 }} dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Beneficiaries;