<template>
  <div id="app">
    <appClient></appClient>
    <!-- <appCaseInformation></appCaseInformation> -->
    <!-- <appNotes></appNotes> -->
  </div>
</template>

<script>
import Client from "@/components/Client.vue";
// import CaseInformation from "@/components/CaseInformation.vue";
// import Notes from "@/components/Notes.vue";

export default {
  name: "app",
  components: {
    appClient: Client
    // appCaseInformation: CaseInformation,
    // appNotes:Notes
  }
};
</script>
