import React from 'react';
import { Input, Divider } from "antd";
import MembersSelect from './MembersSelect';

const Picker = ({ membersList, picker, setPicker, findMember }) => {

  const onChangePicker = (pickerId) => {
    const selectedPicker = findMember(pickerId);
    if (selectedPicker) {
      setPicker(selectedPicker);
    }
  }

  const onChangeIdentification = event => {
    const newIdentification = event.target.value;
    const updatedPicker = { ...picker, identification: newIdentification };
    setPicker(updatedPicker);
  }

  const onChangePhone = event => {
    const newphone = event.target.value;
    const updatedPicker = { ...picker, phone: newphone };
    setPicker(updatedPicker);
  }

  return (
    <>
      <Divider>Persona que recoge</Divider>
      <MembersSelect onChange={onChangePicker} membersList={membersList} />
      <Input
        style={{ width: 200, marginRight: 10 }}
        placeholder="Cédula"
        value={picker.identification}
        onChange={onChangeIdentification} />
      <Input
        style={{ width: 150 }}
        placeholder="Teléfono"
        value={picker.phone}
        onChange={onChangePhone} />
    </>
  );
};

export default Picker;