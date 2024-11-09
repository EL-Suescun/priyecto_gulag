import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CountrySelect = ({ country, setCountry, department, setDepartment, city, setCity }) => {
  const [cityOptions, setCityOptions] = useState([]);

  const departmentsData = {
    Antioquia: ["Medellín", "Envigado", "Bello"],
    Cundinamarca: ["Bogotá", "Soacha", "Chía"],
    Valle: ["Cali", "Palmira", "Buenaventura"]
  };

  useEffect(() => {
    if (department && departmentsData[department]) {
      setCityOptions(departmentsData[department]);
      setCity(departmentsData[department][0]); 
    }
  }, [department]);

  return (
    <View>
      <Text>País</Text>
      <Picker selectedValue={country} onValueChange={(value) => setCountry(value)}>
        <Picker.Item label="Colombia" value="Colombia" />
      </Picker>

      <Text>Departamento</Text>
      <Picker selectedValue={department} onValueChange={(value) => setDepartment(value)}>
        <Picker.Item label="Antioquia" value="Antioquia" />
        <Picker.Item label="Cundinamarca" value="Cundinamarca" />
        <Picker.Item label="Valle" value="Valle" />
      </Picker>

      <Text>Ciudad</Text>
      <Picker selectedValue={city} onValueChange={(value) => setCity(value)}>
        {cityOptions.map((cityName) => (
          <Picker.Item key={cityName} label={cityName} value={cityName} />
        ))}
      </Picker>
    </View>
  );
};

export default CountrySelect;
