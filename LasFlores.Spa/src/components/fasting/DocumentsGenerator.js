import React from 'react';
import Picker from './Picker';
import Beneficiaries from './Beneficiaries';
import { Button } from "antd";
import "antd/dist/antd.css";

const DocumentsGenerator = () => {
  return (
    <div className="App">
      <h1>Generador de documentos para ayuda de almacén</h1>
      <Picker />
      <Beneficiaries />
      <Button style={{ marginTop: 100 }} type="primary">Generar</Button>
    </div>
  );
};

export default DocumentsGenerator;