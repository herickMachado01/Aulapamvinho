import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // ou outra coleção de ícones


import styles from './estilo'

export default function TelaContato() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Entre em contato conosco para comprar nossos produtos</Text>
  
        <View style={styles.card}>
          <Icon name="phone" size={40} color="#800000" />
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.info}>+55 21 030000000</Text>
        </View>
  
        <View style={styles.card}>
          <Icon name="place" size={40} color="#800000" />
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.info}>Av. 123, 222 - Rio de Janeiro, RJ</Text>
        </View>
  
        <View style={styles.card}>
          <Icon name="email" size={40} color="#800000" />
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>preferida@adega.com.br</Text>
        </View>
  
        <View style={styles.card}>
          <Icon name="instagram" size={40} color="#800000" />
          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.info}>@adegapreferida</Text>
        </View>
      </View>
    );
  }
  

