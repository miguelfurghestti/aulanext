import React from "react";

function MostrarNome(props) {
  // ou function MostrarNome({nome, cargo}) {
  return (
    <span>
      Logado como: {props.nome} - {props.cargo}
      {/* Logado como: {nome} - {cargo} */}
    </span>
  );
}

export default MostrarNome;
