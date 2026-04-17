import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Text style={styles.copy}>
        Este app native está em modo experimental e ainda não acompanha os fluxos
        principais do produto web.
      </Text>
      <Pressable
        onPress={() => {
          console.log('Native shell pressed');
          alert('Native shell pressed');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Abrir shell experimental</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 36,
  },
  copy: {
    maxWidth: 320,
    textAlign: 'center',
    color: '#475569',
    marginBottom: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
