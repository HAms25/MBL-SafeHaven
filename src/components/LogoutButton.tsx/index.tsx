import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import supabase from "../../lib/supabase";

const LogoutButton = () => {
  return (
    <TouchableOpacity
      onPress={() => supabase.auth.signOut()}
      style={{ marginRight: 7 }}
    >
      <MaterialCommunityIcons name="logout" size={35} color="#00726D" />
    </TouchableOpacity>
  );
};

export default LogoutButton;