import React, { useState, useEffect } from 'react'
import { Button, Image, View, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

const App = () => {
  const [uri, setUri] = useState(null)

  useEffect(() => {
    getCameraPermissionAsync()
  }, [])

  const getCameraPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    status !== 'granted' && alert('Извините, но нам нужно ваше разрешение')
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })

      !result.cancelled && setUri(result.uri)
    } catch (error) {
      console.log(error)
    }
  }

  const saveImage = () => {
    MediaLibrary.saveToLibraryAsync(uri)
      .then(() => Alert.alert('Фотка сохранена'))
      .catch(error => console.log(error))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkslateblue' }}>
      <Button title="Сделать фото" onPress={pickImage} />
      {uri && <Image source={{ uri }} style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }} />}
      {uri && <Button title="Сохранить фото" onPress={saveImage} />}
    </View>
  )
}

export default App