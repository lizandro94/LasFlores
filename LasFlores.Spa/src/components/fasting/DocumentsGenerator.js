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

  const findMember = memberId => {
    const member = members.find(member => member.id === memberId);
    return member;
  }

  return (
    <div className="App">
      <h1>Generador de documentos para ayuda de almacén</h1>
      <Picker
        membersList={members}
        picker={picker}
        setPicker={setPicker}
        findMember={findMember} />
      <Beneficiaries
        membersList={members}
        beneficiary={beneficiary}
        setBeneficiary={setBeneficiary}
        findMember={findMember} />
      <Button style={{ marginTop: 100 }} type="primary">Generar</Button>
    </div>
  );
};

export default DocumentsGenerator;