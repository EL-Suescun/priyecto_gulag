import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import styles from '../styles/VisualProfileStyles'; // Importamos el archivo de estilos

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

      <Button title="Actualizar Perfil" onPress={handleOpenModal} />

      {/* Modal para actualizar datos */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
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

          <Button title="Guardar" onPress={handleUpdateProfile} />
          <Button title="Cancelar" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

export default VisualProfile;
