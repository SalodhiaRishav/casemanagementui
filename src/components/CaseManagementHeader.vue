<template>
  <div>
    <b-card no-body>
      <b-card-header
        header-tag="header"
        header-bg-variant="secondary"
        header-text-variant="white"
        class="p-1"
      >
        <appCaseHeader></appCaseHeader>
      </b-card-header>
      <b-tabs card>
        <b-tab title="Header" active>
          <appCaseManagement></appCaseManagement>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import CaseManagement from "@/components/CaseManagement.vue";
import CaseHeader from "@/components/CaseHeader.vue";

export default {
  components: {
    appCaseHeader: CaseHeader,
    appCaseManagement: CaseManagement
  }
};
</script>
