import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import Task from '../../components/Task';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';

export const Home = () => { 
  const [tasks, setTasks] = useState<string[]>([]) 
  const [taskName, setTaskName] = useState('')
  const [qtdeTask, setQtdeTask] = useState(0)
  
  const handleTaskAdd = () =>{
    if (tasks.includes(taskName)) {
        return Alert.alert('Task Existe', 'Já existe uma task na lista com esse nome.')
    }

    setTasks(prevState => [...prevState, taskName])
    setQtdeTask(qtdeTask+1)
    setTaskName('')
  }

  const handleTaskRemove = (name: string) => {
    Alert.alert("Remover", `Remover o particpante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    setQtdeTask(qtdeTask-1)       
  }

  const handleCompleteTask = (name: string) => {
    // onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
  }

  return (
    <View style={styles.container}>      
      <View style={styles.logo}> 
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.containerList}> 
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}><Icon name="plus" size={30} color="#fff" /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listagem}>
          <Text style={styles.criada}>Criadas <Text style={styles.qtde}>{qtdeTask}</Text></Text>
          <Text style={styles.concluida}>Concluidas <Text style={styles.qtde}>0</Text></Text>
        </View>
        <FlatList 
          data={tasks}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)}
              onDone={() => handleCompleteTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <>          
              <View style={styles.lineStyle} />        
              <Text style={styles.msg}>
                <IconFeather name="clipboard" color="#808080" size={90}/>
              </Text>  
              <Text style={styles.msg}>
                <Text style={styles.msgNaoCadastrada}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.msgOrganize}> Crie tarefas e organize seus itens a fazer.</Text>
              </Text>
            </>          
          )}        
        />
      </View>
    </View>
  );
}