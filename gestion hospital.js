import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

const Recepcionista = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [horario, setHorario] = useState('');
  const [extension, setExtension] = useState('');

  const agregarRecepcionista = () => {
    console.log('Recepcionista agregada:', { nombre, apellido, edad, correo, horario, extension });
  };

  return (
    <Card title="Gestión de Recepcionistas">
      <Input label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <Input label="Apellido" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <Input label="Edad" type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <Input label="Correo electrónico" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <Input label="Horario laboral" type="text" value={horario} onChange={(e) => setHorario(e.target.value)} />
      <Input label="Extensión telefónica" type="text" value={extension} onChange={(e) => setExtension(e.target.value)} />
      <Button label="Agregar" onClick={agregarRecepcionista} />
      {/* Botones Modificar, Eliminar, Consultar */}
    </Card>
  );
};

export default Recepcionista;