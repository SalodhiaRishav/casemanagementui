<template>
  <div role="tablist">
    <b-card no-body>
      <b-card-header
        header-tag="header"
        header="Case Status"
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
            <b-form-group id="status" label="Status" label-for="statusInput">
              <b-form-select
                id="statusInput"
                v-model="statusForm.status"
                :options="statusTypes"
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
      statusForm: {
        status: null
      }
    };
  },
  computed: {
    statusTypes: () => {
      const statusTypes = ["New", "In progress", "Closed"];
      return statusTypes;
    }
  }
};
</script>
