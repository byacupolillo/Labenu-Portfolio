import React from "react";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h1>INFORMAÇÕES GERAIS DE ENSINO</h1>
        <div>
          <p>5. Por que você não terminou o curso superior?</p>
          <input />
        </div>
        <div>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="Não">
              Não
            </option>
            <option value="Sim">
              Sim
            </option>
           </select>
        </div>
      </div>
    );
  }
}

export default Etapa3;