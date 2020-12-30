import React, { useState } from 'react';
import { Input, Divider, Table, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import MembersSelect from './MembersSelect';

const Beneficiaries = ({ membersList, beneficiary, setBeneficiary, findMember }) => {

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

  const onChangeBeneficiary = (beneficaryId) => {
    const selectedBeneficiary = findMember(beneficaryId);
    if (selectedBeneficiary) {
      setBeneficiary(selectedBeneficiary);
    }
  }

  const onChangeMemberNumber = event => {
    const newMemberNumber = event.target.value;
    const updatedPicker = { ...beneficiary, memberNumber: newMemberNumber };
    setBeneficiary(updatedPicker);
  }

  const onChangePhone = event => {
    const newphone = event.target.value;
    const updatedPicker = { ...beneficiary, phone: newphone };
    setBeneficiary(updatedPicker);
  }

  const onAddBeneficiary = () => {
    if (!beneficiaryIsSelected()) {
      return;
    }
    if (isInList(beneficiary)) {
      updateBeneficiary(beneficiary);
    }
    else {
      addToBeneficiariesList(beneficiary)
    }
  }

  const beneficiaryIsSelected = () => beneficiary.id;

  const isInList = beneficiaryToAdd => {
    return beneficiariesList
      .some(beneficiary => beneficiary.id === beneficiaryToAdd.id);
  }

  const updateBeneficiary = beneficiaryToUpdate => {
    let beneficiaryIndex = beneficiariesList.findIndex(b => b.id === beneficiaryToUpdate.id);
    const updatedList = getNewListWithUpdatedBeneficiary(beneficiaryIndex, beneficiaryToUpdate);
    setBeneficiaries(updatedList);
  }

  const getNewListWithUpdatedBeneficiary = (beneficiaryIndex, beneficiaryInState) => {
    const beneficiariesListCopy = [...beneficiariesList];
    beneficiariesListCopy.splice(beneficiaryIndex, 1, beneficiaryInState);
    return beneficiariesListCopy;
  }

  const addToBeneficiariesList = newBeneficiary => {
    const listWithNewItem = [...beneficiariesList, newBeneficiary];
    setBeneficiaries(listWithNewItem);
  }

  

  return (
    <>
      <Divider>Beneficiarios</Divider>
      <MembersSelect membersList={membersList} onChange={onChangeBeneficiary} />
      <Input
        style={{ width: 200, marginRight: 10 }}
        placeholder="N° miembro"
        onChange={onChangeMemberNumber}
        value={beneficiary.memberNumber} />
      <Input
        style={{ width: 150, marginRight: 20 }}
        placeholder="Teléfono"
        onChange={onChangePhone}
        value={beneficiary.phone} />
      <Button onClick={onAddBeneficiary} type="primary" shape="circle" icon={<PlusOutlined />} />

      <br /><br />
      <Table style={{ paddingLeft: 300, paddingRight: 300 }} dataSource={beneficiariesList} columns={columns} rowKey="id" />
    </>
  );
};

export default Beneficiaries;