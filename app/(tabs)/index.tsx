import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-[blue] text-3xl font-bold">Welcome to movie</Text>
      {/* <Link href={'/onboard'}>Onboarding</Link>
      <Link href={'/movie/BlackPanther'}>Details</Link> */}
    </View>
  );
}
