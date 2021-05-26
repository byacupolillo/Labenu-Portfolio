import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>DADOS GERAIS</h1>
        <div>
          <p>1. Qual é o seu nome?</p>
          <input />
        </div>
        <div>
          <p>2. Qual é a sua idade?</p>
          <input />
        </div>
        <div>
          <p>3. Qual é o seu e-mail?</p>
          <input />
        </div>
        <div>
          <p>4. Qual é a sua escolaridade?</p>
          <select>
            <option value="Ensino médio incompleto">
              Ensino médio incompleto
            </option>
            <option value="Ensino médio completo">
              Ensino médio completo
            </option>
            <option value="Ensino superior incompleto">
              Ensino superior incompleto
            </option>
            <option value="Ensino superior completo">
              Ensino superior completo
            </option>
          </select>
        </div>
      </div>
    );
  }
}

export default Etapa1;