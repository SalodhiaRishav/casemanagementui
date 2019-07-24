<template>
  <div role="tablist">
    <b-card no-body>
      <b-card-header
        header-tag="header"
        header="Assigned to"
        header-bg-variant="secondary"
        header-text-variant="white"
        v-b-toggle.accordion-1
        class="p-1"
        role="tab"
      >
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-form>
            <b-form-group
              id="organizationalUnit"
              label="Organizational unit"
              label-for="organizationalUnitInput"
            >
              <b-form-select
                id="organizationalUnitInput"
                v-model="assignedToCpaForm.organizationalUnit"
                :options="organizationalUnits"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="assignedToCpa"
              label="Assigned to CPA"
              label-for="assignedToCpaInput"
            >
              <b-form-select
                id="assignedToCpaInput"
                v-model="assignedToCpaForm.cpa"
                :options="cpas"
                required
              ></b-form-select>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assignedToCpaForm: {
        organizationalUnit: null,
        cpa: null
      }
    };
  },
  computed: {
    organizationalUnits: () => {
      return [
        { text: "Select organizational unit", value: null },
        "KGHCS",
        "ABCD",
        "EFGH"
      ];
    },
    cpas: () => {
      return [{ text: "Select CPA", value: null }, "ABDC", "EFGH", "JKLM"];
    }
  }
};
</script>
