import { useState } from "react";
import { Text, View, CheckBox, Button} from "react-native";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { LoginScreen } from "./LoginScreen";




export function FormularioScreen() {


  const [isSelected, setSelection] = useState(false);
  const [nome,] = useState("");

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Formulario {nome}</Text>

      <TextInput style={styles.label}
        label="Nome"

      />
      <br />
      <TextInput style={styles.label}
        label="Sobrenome"

      />

      <br />
      <TextInput style={styles.label}
        label="Email"

      />
      <br />
      <TextInput style={styles.label}
        label="Senha"

      />
      <br />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.com}>Junte-se a Comunidade</Text>


      </View>

        
      <View style={styles.botao}>
        <Button
          title="Enviar"  
        />
      </View>
      <Text style={styles.text}>Ja é membro? Faça login</Text>
      <br />
      <Text style={styles.envio} >Obrigado pelo envio!</Text >

      
    </View>



  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  envio: {
    color: "red",
    textAlign: "center",
  },

  title: {
    fontSize: "30px",
  },

  label: {
    width: "20%",
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,

  },

  com: {
    fontSize: "15px",
  },

  botao: {
    backgroundColor: "black"
  }











});






