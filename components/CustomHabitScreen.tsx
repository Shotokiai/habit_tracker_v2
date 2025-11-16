import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native"

interface CustomHabitScreenProps {
  habitType: "make" | "break"
  onHabitCreate: (habitName: string) => void
  onBack: () => void
}

export default function CustomHabitScreen({
  habitType,
  onHabitCreate,
  onBack,
}: CustomHabitScreenProps) {
  const [habitText, setHabitText] = useState("")

  const heading =
    habitType === "make"
      ? "What are you really good at? but not consistent with it..."
      : "What are the bad habits which you are trying to break?"

  const handleLetsBuild = () => {
    if (!habitText.trim()) {
      Alert.alert("Error", "Please describe your habit")
      return
    }

    onHabitCreate(habitText.trim())
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.heading}>{heading}</Text>

        {/* Text Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Describe in an one line"
            placeholderTextColor="#bbb"
            value={habitText}
            onChangeText={setHabitText}
            multiline
            maxLength={200}
          />
          <Text style={styles.charCount}>{habitText.length}/200</Text>
        </View>

        {/* Let's Build Button */}
        <TouchableOpacity
          style={[styles.letsBuildButton, !habitText.trim() && styles.letsBuildButtonDisabled]}
          onPress={handleLetsBuild}
          disabled={!habitText.trim()}
        >
          <Text style={styles.letsBuildButtonText}>Let's Build →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 24,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
    minHeight: 100,
    textAlignVertical: "top",
  },
  charCount: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
    marginTop: 4,
  },
  letsBuildButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  letsBuildButtonDisabled: {
    backgroundColor: "#ccc",
  },
  letsBuildButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
