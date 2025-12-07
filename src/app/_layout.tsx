import { Stack } from "expo-router"

const Layout = (): React.JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "#242424"
    },
    headerTintColor: "#ffffff",
    headerTitle: "InTRUTH.",
    headerBackTitle: "Back",
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: "bold"
    }
  }} />
}

export default Layout
