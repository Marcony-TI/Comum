import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [resultado, setResultado] = useState("");
  const [jogadaUsuario, setJogadaUsuario] = useState("");
  const [jogadaComputador, setJogadaComputador] = useState("");

  const opcoes = ["Pedra", "Papel", "Tesoura"];

  const jogar = (escolha) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    setJogadaUsuario(escolha);
    setJogadaComputador(escolhaComputador);

    if (escolha === escolhaComputador) {
      setResultado("Empate!");
    } else if (
      (escolha === "Pedra" && escolhaComputador === "Tesoura") ||
      (escolha === "Papel" && escolhaComputador === "Pedra") ||
      (escolha === "Tesoura" && escolhaComputador === "Papel")
    ) {
      setResultado("Você ganhou! 🎉");
    } else {
      setResultado("Você perdeu! 😢");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
      <View style={styles.botoes}>
        {opcoes.map((opcao) => (
          <Button key={opcao} title={opcao} onPress={() => jogar(opcao)} />
        ))}
      </View>
      <Text style={styles.texto}>Você: {jogadaUsuario}</Text>
      <Text style={styles.texto}>Computador: {jogadaComputador}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginVertical: 5,
  },
  resultado: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
});
