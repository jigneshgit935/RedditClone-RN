import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";
export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
