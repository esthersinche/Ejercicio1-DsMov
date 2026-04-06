import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,TextInput,Button, } from 'react-native';

export default function App() {
  const [nom, setNom] = useState('');
  const [sueldoBase, setSueldoBase] = useState('');
  const [venta1, setVenta1] = useState('');
  const [venta2, setVenta2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const sBase = parseFloat(sueldoBase);
    const v1 = parseFloat(venta1);
    const v2 = parseFloat(venta2);

    if (isNaN(sBase) || isNaN(v1) || isNaN(v2)) {
      setResultado('Por favor ingresa valores válidos');
      return;
    }

    const comision1 = v1 * 0.05;
    const comision2 = v2 * 0.05;
    const totalComisiones = comision1 + comision2;
    const sueldoTotal = sBase + totalComisiones;

    setResultado(
      `Vendedor: ${nom}\n` +
      `Comisión total: S/ ${totalComisiones.toFixed(2)}\n` +
      `Sueldo total: S/ ${sueldoTotal.toFixed(2)}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Ventas</Text>

      <TextInput
        placeholder="Nombre del vendedor"
        style={styles.input}
        onChangeText={setNom}
      />

      <TextInput
        placeholder="Sueldo base"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setSueldoBase}
      />

      <TextInput
        placeholder="Venta 1"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setVenta1}
      />

      <TextInput
        placeholder="Venta 2"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setVenta2}
      />

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});