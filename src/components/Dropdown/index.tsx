import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';
// import styles from './style';
import supabase from '../../lib/supabase';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import styles from './style';

interface DropdownProps {
  selectedValue: string | null;
  onValueChange: (value: string | null) => void;
}

const Dropdown = ({ selectedValue, onValueChange }: DropdownProps) => {
  const [serviceOptions, setServiceOptions] = useState<Array<{ label: string; value: string; }>>([]);

  const placeholder = {
    label: 'Selecciona una opción...',
    value: null,
  };

  useEffect(() => {
    // Fetch service options from Supabase
    const fetchServiceOptions = async () => {
      try {
        const { data, error } = await supabase.from('services').select('name');
        if (error) {
          throw error;
        }
        const options = data.map((services) => ({
          label: services.name,
          value: services.name,
        }));
        setServiceOptions(options);
      } catch (error) {
        console.error('Error fetching service options:', error);
      }
    };

    fetchServiceOptions();
  }, []);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={placeholder}
        items={serviceOptions}
        onValueChange={(value) => onValueChange(value)}
        value={selectedValue}
        style={{
          inputIOS: {
            fontSize: 14,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            paddingRight: 30,
          },
          inputAndroid: {
            fontSize: 14,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            paddingRight: 30,
          },
        }}
      />
    </View>
  );
};

export default Dropdown;