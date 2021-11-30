import { ref } from "vue";
import { projectFirestore } from "./config";

const menu = ref([]);

const load = async () => {
  try {
    const result = await projectFirestore
      .collection("Menu")
      .orderBy("name")
      .get();

    const final = [];

    for (let i = 0; i < 6; i++) {
      final[i] = { ...result.docs[i].data(), id: result.docs[i].id };
    }

    menu.value = final;
  } catch (err) {
    console.log(err);
  }
};

load();

export default menu;
