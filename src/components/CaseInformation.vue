<template>
  <div>
    <div role="tablist">
      <b-card no-body>
        <b-card-header
          header-tag="header"
          header="Client Information"
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
                id="description"
                label="Description"
                label-for="descriptionInput"
              >
                <b-form-textarea
                  id="descriptionInput"
                  v-model="caseInformation.description"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group
                id="messageFromClient"
                label="Messsage from client"
                label-for="messageFromClientInput"
              >
                <b-form-textarea
                  id="messageFromClientInput"
                  v-model="caseInformation.messageFromClient"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group
                id="priority"
                label="Priority"
                label-for="priorityInput"
              >
                <b-form-select
                  id="priorityInput"
                  v-model="caseInformation.priority"
                  :options="priorities"
                  required
                ></b-form-select>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseInformation: {
        description: "",
        messageFromClient: "",
        priority: null
      }
    };
  },
  computed: {
    priorities: () => {
      return [
        { text: "Select priority", value: null },
        "High",
        "Medium",
        "Low"
      ];
    }
  }
};
</script>
