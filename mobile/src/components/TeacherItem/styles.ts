import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e6e6f3',
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    color: '#32264d',
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
  },

  subject: {
    marginTop: 4,
    color: '#6a6180',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },

  bio: {
    marginHorizontal: 24,
    color: '#6a6180',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
  },

  footer: {
    alignItems: 'center',
    marginTop: 24,
    padding: 24,
    backgroundColor: '#fafafc',
  },

  price: {
    color: '#6a6180',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },

  priceValue: {
    color: '#8257e5',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#8257e5',
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#04d361',
  },

  contactButtonText: {
    marginLeft: 16,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;