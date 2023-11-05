import React from 'react';

const EmployeeCard = ({ foto, nome, subobjeto, email }) => {
  return (
    <div style={{ width: '250px', textAlign: 'center', backgroundColor: 'black' }}>
      <img src={foto} alt={nome} style={{ width: '100%' }} />
      <p style={{ padding: '10px', fontFamily: 'Arial', color: 'white' }}>{nome}</p>
      <p style={{ padding: '10px', fontFamily: 'Arial', color: 'white' }}>{subobjeto.propriedade1}</p>
      <p style={{ padding: '10px', fontFamily: 'Arial', color: 'white' }}>{subobjeto.propriedade2}</p>
      <a href={`mailto:${email}`} style={{ backgroundColor: 'gray', fontFamily: 'Verdana', color: 'white', display: 'block', padding: '10px' }}>{email}</a>
    </div>
  );
}

export default EmployeeCard;
