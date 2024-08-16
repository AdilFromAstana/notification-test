import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function SendNotificationsScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { icon: "https://example.com/your-icon-url.png" },
        sound: true,
      },
      trigger: { seconds: 1 }, // Отправить немедленно для тестирования
    });
    alert("Notification sent!");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Send Notification</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 20, width: "80%" }}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={{ borderBottomWidth: 1, marginBottom: 20, width: "80%" }}
      />
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
}
