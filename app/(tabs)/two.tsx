import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import {Text, View} from "../../components/Themed";
import {Ionicons} from "@expo/vector-icons";
import useCartStore from "../../store/cartStore";
import { Product } from "../../store/interface";

export default function TabTwoScreen() {

  const {reduceProduct, addProduct, products} = useCartStore();

  const renderItems: ListRenderItem<Product & {quantity: number}> = ({
    item,
  }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{uri: item.image}} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => reduceProduct(item)}
        >
          <Ionicons name="remove" size={24} color={"#000"} />
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => addProduct(item)}
        >
          <Ionicons name="add" size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <FlatList data={products} renderItem={renderItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  cartItemImage: {
    width: 50,
    height: 50,
  },

  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
