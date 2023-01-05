import { View, Text, TouchableOpacity, Pressable  } from 'react-native'
import { styles } from './styles'
import IconFeather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  name: string
  onRemove: () => void
  onDone: () => void
}

const Task = (props: Props) => {
  const { name, onRemove, onDone } = props 
  const [checked, setChecked] = useState(false);

  return(
    <View style={styles.container}>
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => setChecked(!checked)}>
          {checked && <Ionicons name="checkmark" size={14} color="white" />}
        </Pressable>
      <Text style={checked ? styles.CheckedName: styles.name }>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <IconFeather name="trash-2" size={22} color="#808080"/>
      </TouchableOpacity>
    </View>


  )
}


export default Task