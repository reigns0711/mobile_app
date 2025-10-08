import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { cssInterop } from "react-native-css-interop";

const TabIcon = ({
  focused,
  imageSrc,
  text,
}: {
  focused: any;
  imageSrc: any;
  text: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row justify-center items-center mt-4 overflow-hidden min-w-[116px] min-h-12 rounded-full"
      >
        <Image
          source={imageSrc}
          tintColor={"#1454FE"}
          className="size-5 mr-1"
        />
        <Text>{text}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View>
        <Image
          source={imageSrc}
          tintColor={"#1454FE"}
          className="size-5 mr-1 mt-2"
        />
      </View>
    );
  }
};

const _layout = () => {
  // Enable Tailwind className support:
  cssInterop(ImageBackground, { className: "style" });
  cssInterop(Image, { className: "style" });
  cssInterop(Text, { className: "style" });
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: 36,
          height: 60,
          paddingHorizontal: 20,
          borderWidth: 1,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageSrc={icons.home} text="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageSrc={icons.search} text="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="selected"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageSrc={icons.save} text="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageSrc={icons.person} text="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

// const styles = StyleSheet.create({});
