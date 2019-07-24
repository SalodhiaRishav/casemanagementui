<template>
  <div id="app">
    <!-- <appClient></appClient> -->
    <appCaseInformation></appCaseInformation>
  </div>
</template>

<script>
// import Client from "@/components/Client.vue";
import CaseInformation from "@/components/CaseInformation.vue";

export default {
  name: "app",
  components: {
    // appClient: Client,
    appCaseInformation: CaseInformation
  }
};
</script>
