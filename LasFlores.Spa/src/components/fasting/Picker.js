import React from 'react';
import { Input, Divider } from "antd";
import MembersSelect from './MembersSelect';

const Picker = ({ membersList }) => {

  return (
    <>
      <Divider>Persona que recoge</Divider>
      <MembersSelect membersList={membersList} />
      <Input style={{ width: 300, marginRight: 10 }} placeholder="Cédula" />
      <Input style={{ width: 300 }} placeholder="Teléfono" />
    </>
  );
};

export default Picker;