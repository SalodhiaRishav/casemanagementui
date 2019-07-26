<template>
  <b-card-group columns>
    <appClient></appClient>
    <appCaseInformation></appCaseInformation>
    <appReferences></appReferences>
    <appNotes></appNotes>
    <appCaseStatus></appCaseStatus>
    <appAssignedTo></appAssignedTo>
  </b-card-group>
</template>

<script>
import Client from "@/components/Client.vue";
import AssignedTo from "@/components/AssignedTo.vue";
import References from "@/components/References.vue";
import CaseStatus from "@/components/CaseStatus.vue";
import CaseInformation from "@/components/CaseInformation.vue";
import Notes from "@/components/Notes.vue";
export default {
  components: {
    appClient: Client,
    appCaseInformation: CaseInformation,
    appNotes: Notes,
    appCaseStatus: CaseStatus,
    appAssignedTo: AssignedTo,
    appReferences: References
  }
};
</script>
