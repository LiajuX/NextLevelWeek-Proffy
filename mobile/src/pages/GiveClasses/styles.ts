import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 190,
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    fontFamily: 'Archivo_700Bold',
  },

  description: {
    maxWidth: 240,
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
  },

  okButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    marginVertical: 40,
    borderRadius: 8,
    backgroundColor: '#04d361',
  },

  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  },
});

export default styles;