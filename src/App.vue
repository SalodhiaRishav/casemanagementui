<template>
  <div id="app">
    <appOpenCases></appOpenCases>
    <!-- <appCaseManagementHeader></appCaseManagementHeader> -->
    <!-- <appReferences></appReferences> -->
    <!-- <appAssignedTo></appAssignedTo> -->
    <!-- <appCaseStatus></appCaseStatus> -->
    <!-- <appClient></appClient> -->
    <!-- <appCaseInformation></appCaseInformation> -->
    <!-- <appNotes></appNotes> -->
  </div>
</template>

<script>
import OpenCases from "@/components/OpenCases.vue";
// import CaseManagementHeader from "@/components/CaseManagementHeader.vue";
// import Client from "@/components/Client.vue";
// import AssignedTo from "@/components/AssignedTo.vue";
// import References from "@/components/References.vue";
// import CaseManagement from "@/components/CaseManagement.vue";
// import CaseStatus from "@/components/CaseStatus.vue";
// import CaseInformation from "@/components/CaseInformation.vue";
// import Notes from "@/components/Notes.vue";

export default {
  name: "app",
  components: {
    appOpenCases: OpenCases
    // appClient: Client,
    // appCaseInformation: CaseInformation,
    // appNotes:Notes,
    // appCaseStatus:CaseStatus,
    // appAssignedTo: AssignedTo,
    // appReferences: References,
    // appCaseManagementHeader: CaseManagementHeader
  }
};
</script>

<style>
@import url(./GlobalStyle.css);
</style>
