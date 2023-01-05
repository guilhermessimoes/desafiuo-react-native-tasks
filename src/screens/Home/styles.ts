import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  containerList: {
    padding: 24,
    marginTop: -90
  }, 
  logo: {
    flexDirection: 'row',
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 48,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#0D0D0D'
  },
  date: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width:'100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'

  },
  criada: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  concluida: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14
  },
  qtde: {
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  listagem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  msg:{
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',    
    marginBottom: 50,
  },
  msgNaoCadastrada:{
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14
  },
  msgOrganize: {
    color: '#808080',
    fontSize: 14
  },
  linha: {
    backgroundColor: '#808080',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#808080',
    margin:10,    
  },
  
})