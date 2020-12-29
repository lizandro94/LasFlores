import React from 'react';
import { Input, Divider } from "antd";
import MembersSelect from './MembersSelect';

const Picker = ({ membersList, picker, onChangePicker }) => {

  return (
    <>
      <Divider>Persona que recoge</Divider>
      <MembersSelect onChange={onChangePicker} membersList={membersList} />
      <Input style={{ width: 200, marginRight: 10 }} placeholder="Cédula" value={picker.identification} />
      <Input style={{ width: 150 }} placeholder="Teléfono" value={picker.phone} />
    </>
  );
};

export default Picker;