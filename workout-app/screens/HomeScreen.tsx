
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutItem from "../components/WorkoutItem";
import { useWorkouts } from "../hook/useWorkouts";
import { ThemeText } from "../components/styled/Text";
import { RootStackParamList } from "../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function HomeScreen({ navigation }: Props) {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <ThemeText style={styles.header}>New Workouts</ThemeText>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetail", { slug: item.slug })
              }
            >
              <WorkoutItem
                item={item}
              />
            </Pressable>
          )
        }}
        keyExtractor={item => item.slug}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  }
})