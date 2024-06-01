# Installations

- npx create-expo-app@latest ecom-app --template blank
- cd ecom-app
- npm run start
- npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
- Added this in package.json
  main": "expo-router/entry"
- Created app/index.js

# Custom Fonts

- npx expo install @expo-google-fonts/inter expo-font
- On top of file
  import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter"
- Inside the component of same file,
  let [fontsLoaded] = useFonts({ Inter_600SemiBold })

  if (!fontsLoaded) {
  return null
  }

- Then apply fonts
  <Text style={{ fontFamily: "Inter_600SemiBold" }}>Ecom App</Text>
