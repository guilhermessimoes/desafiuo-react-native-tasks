import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30,    
    height: 80,
    padding: 14
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  CheckedName: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
    textDecorationLine: 'line-through'
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})