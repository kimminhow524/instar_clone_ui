import axios from "axios";
import { createStore } from "vuex";
import sampleData from "./sampleData";
import instarFilter from "./instarFilter";
const store = createStore({
  state() {
    return {
      sampleData,
      workStep: 0,
      moreCount: 0,
      tmpWrting: {},
      instarFilter,
      imgUrl: "",
      useFilter: "",
      writeText:"",
    };
  },
  mutations: {
    setMore(state, data) {
      state.sampleData.push(data);
    },
    ChangeWorkStep(state, data) {
      state.workStep = data;
    },
    plusDataCount(state) {
      state.moreCount++;
    },
    setImageUrl(state, data) {
      state.imgUrl = data;
    },
    setFilter(state, data) {
      state.useFilter = data;
    },
    setWriteText(state,data){
      state.writeText = data;
    },
  },
  actions: {
    async getData(context) {
      await axios
        .get(
          `https://codingapple1.github.io/vue/more${this.state.moreCount}.json`
        )
        .then((a) => {
          context.commit("setMore", a.data);
          context.commit("plusDataCount");
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
});

export default store;
