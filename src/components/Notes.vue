<template>
  <div role="tablist">
    <b-card no-body>
      <b-card-header
        header-tag="header"
        header="Notes"
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
              id="notesByCpa"
              label="Notes by CPA"
              label-for="notesByCpaInput"
            >
              <b-form-textarea
                id="notesByCpaInput"
                v-model="NotesForm.notesByCpa"
              ></b-form-textarea>
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
      NotesForm: {
        notesByCpa: ""
      }
    };
  }
};
</script>
