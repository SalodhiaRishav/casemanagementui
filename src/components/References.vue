<template>
  <div role="tablist">
    <b-card no-body>
      <b-card-header
        header-tag="header"
        header="References"
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
          <b-table fixed striped hover :items="references" :fields="fields">
            <template slot="index" slot-scope="data">
              {{ data.index + 1 }}
            </template>
            <template slot="#" slot-scope="data">
              <button @click="deleteReference(data.index)">Delete</button>
            </template>
          </b-table>
          <b-table fixed :fields="fields">
            <template slot="HEAD_identity" slot-scope="data">
              <b-form-input
                id="identityInput"
                :placeholder="data.label"
                v-model="referenceForm.identity"
              ></b-form-input>
            </template>
            <template slot="HEAD_type">
              <b-form-select
                id="referenceTypeInput"
                :options="referenceTypes"
                v-model="referenceForm.type"
              ></b-form-select>
            </template>
            <template slot="HEAD_comment" slot-scope="data">
              <b-form-input
                id="commentInput"
                :placeholder="data.label"
                v-model="referenceForm.comment"
              ></b-form-input>
            </template>
            <template slot="HEAD_index">
              {{&nbsp;}}
            </template>
            <template slot="HEAD_#">
              {{&nbsp;}}
            </template>
          </b-table>
          <b-button @click="addNewReference">Add</b-button>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showReferenceForm: false,
      fields: ["index", "type", "identity", "comment", "#"],
      references: [],
      referenceForm: {
        type: null,
        identity: "",
        comment: ""
      }
    };
  },
  computed: {
    referenceTypes: () => {
      return [
        { text: "Select reference type", value: null },
        "ABDC",
        "EFGH",
        "JKLM"
      ];
    }
  },
  methods: {
    deleteReference(index) {
      this.references.splice(index, 1);
    },
    resetReferenceForm: function() {
      this.referenceForm.type = null;
      this.referenceForm.identity = "";
      this.referenceForm.comment = "";
    },
    addNewReference: function() {
      this.showReferenceForm = true;
      if (
        this.referenceForm.type !== null &&
        this.referenceForm.identity !== "" &&
        this.referenceForm.comment !== ""
      ) {
        const newReferenceDetails = {
          type: this.referenceForm.type,
          identity: this.referenceForm.identity,
          comment: this.referenceForm.comment
        };
        this.references.push(newReferenceDetails);
        this.resetReferenceForm();
      }
    }
  }
};
</script>
