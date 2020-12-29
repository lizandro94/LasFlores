import React, { useEffect, useState } from 'react';
import Picker from './Picker';
import Beneficiaries from './Beneficiaries';
import { Button } from "antd";
import { getMembers } from '../../api/members/membersClient';
import "antd/dist/antd.css";

const DocumentsGenerator = () => {
  const [members, setMembers] = useState([]);
  const [picker, setPicker] = useState({});
  const [beneficiary, setBeneficiary] = useState({});

  useEffect(() => {
    const fillMembers = async () => {
      const list = await getMembers();
      setMembers(list);
    }

    fillMembers();
  }, []);

  const onChangePicker = (pickerId) => {
    const selectedPicker = members.find(member => member.id === pickerId);
    if (selectedPicker) {
      setPicker(selectedPicker);
    }
  }

  const onChangeBeneficiary = (beneficaryId) => {
    const selectedBeneficiary = members.find(member => member.id === beneficaryId);
    if (selectedBeneficiary) {
      setBeneficiary(selectedBeneficiary);
    }
  }


  return (
    <div className="App">
      <h1>Generador de documentos para ayuda de almacén</h1>
      <Picker onChangePicker={onChangePicker} membersList={members} picker={picker} />
      <Beneficiaries onChangeBeneficiary={onChangeBeneficiary} membersList={members} beneficiary={beneficiary} />
      <Button style={{ marginTop: 100 }} type="primary">Generar</Button>
    </div>
  );
};

export default DocumentsGenerator;