<template>
  <div id="app">
    <appCaseManagement></appCaseManagement>
    <!-- <appReferences></appReferences> -->
    <!-- <appAssignedTo></appAssignedTo> -->
    <!-- <appCaseStatus></appCaseStatus> -->
    <!-- <appClient></appClient> -->
    <!-- <appCaseInformation></appCaseInformation> -->
    <!-- <appNotes></appNotes> -->
  </div>
</template>

<script>
// import Client from "@/components/Client.vue";
// import AssignedTo from "@/components/AssignedTo.vue";
// import References from "@/components/References.vue";
import CaseManagement from "@/components/CaseManagement.vue";
// import CaseStatus from "@/components/CaseStatus.vue";
// import CaseInformation from "@/components/CaseInformation.vue";
// import Notes from "@/components/Notes.vue";

export default {
  name: "app",
  components: {
    // appClient: Client
    // appCaseInformation: CaseInformation,
    // appNotes:Notes,
    // appCaseStatus:CaseStatus,
    // appAssignedTo: AssignedTo,
    // appReferences: References,
    appCaseManagement: CaseManagement
  }
};
</script>
