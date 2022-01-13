import '@expo/match-media'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native'
import { useMediaQuery } from "react-responsive"
import imgSrc from './assets/czu.jpg'

export default function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [birthDate, setBirthDate] = useState()
  const [nameValid, setNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [birthDateValid, setBirthDateValid] = useState(true)

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 640px)"
  })

  const onSubmitFormPress = () => {
    const isNameValid = validateText(name)
    const isEmailValid = validateEmail(email)
    const isBirthDateValid = validateBirthDate(birthDate)

    setNameValid(isNameValid)
    setEmailValid(isEmailValid)
    setBirthDateValid(isBirthDateValid)

    if (!isEmailValid || !isEmailValid || !isBirthDateValid) {
      return
    }

    //pokracovani v potvrzeni formulare
  }

  const validateText = (val) => val && val.length > 0 && !/[^a-zA-Z]/.test(val)

  const validateEmail = (val) => val && val.length > 0 && /\S+@\S+\.\S+/.test(val)

  const validateBirthDate = (val) => val && val.split('.').length === 3

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!isTabletOrMobileDevice &&
          <Image
            resizeMode='center'
            style={styles.logo}
            source={{
              uri: imgSrc
            }}
          />}
        <View>
          <Text style={styles.headerText}>Zkouška Internetové technologie - Jakub Mužík</Text>
        </View>
      </View>

      <View style={[styles.body, { flexDirection: isTabletOrMobileDevice ? 'column' : 'row' }]}>
        <View style={[styles.menu, { flexDirection: isTabletOrMobileDevice ? 'row' : 'column' }]}>
          <TouchableOpacity style={styles.menuItem}>
            <Text>
              Položka 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text>
              Položka 2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text>
              Položka 3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text>
              Položka 4
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.content}>
            {!isTabletOrMobileDevice && <View style={{ position: 'absolute', right: 0, top: 0 }}>
              <Image
                resizeMode='center'
                style={styles.logo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>}
            <Text>
              Jméno
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setName(val)}
            />
            {!nameValid && <Text style={styles.errorMessage}>
              Zadejte správný formát jména
            </Text>}

            <Text>
              Email
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setEmail(val)}
            />
            {!emailValid && <Text style={styles.errorMessage}>
              Zadejte správný formát emailu
            </Text>}

            <Text>
              Datum narození
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setBirthDate(val)}
            />
            {!birthDateValid && <Text style={styles.errorMessage}>
              Zadejte správný formát datumu narození
            </Text>}

            <View style={styles.submitButton}>
              <Button
                onPress={onSubmitFormPress}
                title="Ok"
              />
            </View>
          </View>
          {!isTabletOrMobileDevice && <View style={styles.footer}>
            <Text>Zapati</Text>
          </View>}
        </View>
        {
          isTabletOrMobileDevice && <View style={styles.footer}>
            <Text>Zapati</Text>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10
  },
  headerText: {
    fontSize: 25
  },
  logo: {
    width: 150,
    height: 150
  },
  body: {
    flex: 1
  },
  menu: {
    backgroundColor: '#d5dce6'
  },
  main: {
    flex: 1,
    padding: 10
  },
  content: {
    flex: 1
  },
  menuItem: {
    padding: 20
  },
  footer: {
    justifyContent: 'flex-end'
  },
  input: {
    height: 20,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    width: 200,
    marginVertical: 20
  },
  errorMessage: {
    color: 'red'
  }
})
