import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="/notifications" />
      <Stack.Screen name="/profile" />
      <Stack.Screen name="/vendorPage" />
    </Stack>
  );
}
