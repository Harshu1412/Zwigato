import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewCard = () => {
  return (
    <Text
      style={{
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        alignSelf: "center",
        fontWeight: "500",
      }}
    >
      Add New Card
    </Text>
  );
}

export default NewCard

const styles = StyleSheet.create({})