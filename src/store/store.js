import Vue from "vue";
import Vuex from "vuex";
import CaseManagement from "@/store/modules/CaseManagement";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CaseManagement
  }
});
