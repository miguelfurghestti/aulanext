import { useState } from "react";
import MostrarNome from "./components/MostrarNome";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  // const [user, setUser] = useState({
  //   nome: "Fulano",
  //   email: "fulano@gmail.com",
  //   idade: 11,
  // });

  // ou começar como um objeto vázio:
  const [user, setUser] = useState({});

  function handleChangeName(nome) {
    setNome(nome);
  }

  function handleRegister(e) {
    e.preventDefault();

    setUser({
      nome: nome,
      email: email,
      idade: idade,
    });
  }

  return (
    <div>
      <h1>Bem vindo ao meu projeto!</h1>
      <h2>Olá: {nome}</h2>
      {/* <MostrarNome nome="Miguel Furghestti" cargo="Admin" /> */}
      {/* <button onClick={handleChangeName("Miguel Furghestti")}> */}
      {/* Quando eu abrir parenteses após uma função, o navegador executa ela, como se eu estivesse chamando ela, para que isso não ocorra, utilizamos uma função anonima, dessa forma ela só será acionada mediante ação. */}
      <button onClick={() => handleChangeName("Miguel Furghestti")}>
        Mudar Nome
      </button>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>E-mail:</label>

        <input
          type="text"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Idade:</label>

        <input
          type="text"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
      Nome: {user.nome}
      <br />
      E-mail: {user.email}
      <br />
      Idade: {user.idade}
    </div>
  );
}

export default App;
