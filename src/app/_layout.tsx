import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false}}/>; //removes the 'index' at the top of the screen on mobile
}
