import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import styles from '../styles/VisualProfileStyles';

const VisualProfile = () => {
  const [name, setName] = useState('Juan');
  const [surname, setSurname] = useState('Pérez');
  const [birthDate, setBirthDate] = useState('15/05/1995');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newSurname, setNewSurname] = useState(surname);
  const [newBirthDate, setNewBirthDate] = useState(birthDate);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleUpdateProfile = () => {
    const today = new Date();
    const [day, month, year] = newBirthDate.split('/');
    const birthDateObj = new Date(`${year}-${month}-${day}`);

    const age = today.getFullYear() - birthDateObj.getFullYear();
    if (age >= 18 && age <= 50) {
      setName(newName);
      setSurname(newSurname);
      setBirthDate(newBirthDate);
      handleCloseModal();
    } else {
      alert('La fecha de nacimiento debe estar entre 18 y 50 años');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <Text style={styles.label}>Nombre: {name}</Text>
        <Text style={styles.label}>Apellido: {surname}</Text>
        <Text style={styles.label}>Fecha de Nacimiento: {birthDate}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>Actualizar Perfil</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            <Text style={styles.modalTitle}>Actualizar Perfil</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={newName}
              onChangeText={setNewName}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={newSurname}
              onChangeText={setNewSurname}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
              value={newBirthDate}
              onChangeText={setNewBirthDate}
            />

            <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VisualProfile;
