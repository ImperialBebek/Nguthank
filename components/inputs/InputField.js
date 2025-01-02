import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5DCC7',
  },
  input: {
    padding: 16,
    fontSize: 16,
  },
});

export default InputField;
