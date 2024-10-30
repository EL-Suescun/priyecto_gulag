import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CountrySelect = ({ country, setCountry, department, setDepartment, city, setCity }) => {
  return (
    <View>
      <Text>País</Text>
      <Picker selectedValue={country} onValueChange={(value) => setCountry(value)}>
        <Picker.Item label="Colombia" value="Colombia" />
      </Picker>

      <Text>Departamento</Text>
      <Picker selectedValue={department} onValueChange={(value) => setDepartment(value)}>
        <Picker.Item label="Antioquia" value="Antioquia" />
        <Picker.Item label="Bogotá" value="Bogotá" />
        {/* Agrega más departamentos según sea necesario */}
      </Picker>

      <Text>Ciudad</Text>
      <Picker selectedValue={city} onValueChange={(value) => setCity(value)}>
        <Picker.Item label="Medellín" value="Medellín" />
        <Picker.Item label="Bogotá" value="Bogotá" />
        {/* Agrega más ciudades según el departamento seleccionado */}
      </Picker>
    </View>
  );
};

export default CountrySelect;
