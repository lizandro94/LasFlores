import React, { useState } from 'react';
import { Input, Divider, Table, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import MembersSelect from './MembersSelect';

const Beneficiaries = ({ membersList, beneficiary, onChangeBeneficiary }) => {

  const [beneficiariesList, setBeneficiaries] = useState([]);

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

  const onAddBeneficiary = () => {
    if (!beneficiaryIsSelected()) {
      return;
    }
    if (isInList(beneficiary)) {
      updateBeneficiary(beneficiary);
    }
    else {
      addToList(beneficiary)
    }
  }

  const beneficiaryIsSelected = () => beneficiary.id;

  const isInList = beneficiaryToAdd => {
    return beneficiariesList
      .some(beneficiary => beneficiary.id === beneficiaryToAdd.id);
  }

  const addToList = newBeneficiary => {
    const listWithNewItem = [...beneficiariesList, newBeneficiary];
    setBeneficiaries(listWithNewItem);
  }

  const updateBeneficiary = beneficiary => {
    const beneficiaryToUpdate = beneficiariesList.find(b => b.id === beneficiary.id);
    beneficiaryToUpdate.phone = 'jaja';
    const updatedList = [...beneficiariesList];
    debugger;
  }

  return (
    <>
      <Divider>Beneficiarios</Divider>
      <MembersSelect membersList={membersList} onChange={onChangeBeneficiary} />
      <Input style={{ width: 200, marginRight: 10 }} placeholder="N° miembro" value={beneficiary.memberNumber} />
      <Input style={{ width: 150, marginRight: 20 }} placeholder="Teléfono" value={beneficiary.phone} />
      <Button onClick={onAddBeneficiary} type="primary" shape="circle" icon={<PlusOutlined />} />

      <br /><br />
      <Table style={{ paddingLeft: 300, paddingRight: 300 }} dataSource={beneficiariesList} columns={columns} rowKey="id" />
    </>
  );
};

export default Beneficiaries;