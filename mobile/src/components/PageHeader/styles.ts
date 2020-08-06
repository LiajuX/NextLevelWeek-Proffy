import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    maxWidth: 180,
    marginVertical: 40,
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;