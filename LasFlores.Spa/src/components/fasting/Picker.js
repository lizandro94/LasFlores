import React from 'react';
import { Select, Input, Divider } from "antd";

const Picker = () => {
  const { Option } = Select;

  return (
    <>
      <Divider>Persona que recoge</Divider>
      <Select style={{ width: 300, marginRight: 10 }} placeholder="Nombre">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Input style={{ width: 300, marginRight: 10 }} placeholder="Cédula" />
      <Input  style={{ width: 300 }} placeholder="Teléfono" />
    </>
  );
};

export default Picker;