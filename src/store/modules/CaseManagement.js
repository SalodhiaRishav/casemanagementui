const state = {
  assignedToCpaForm: {
    organizationalUnit: null,
    cpa: null
  },
  caseInformation: {
    description: "",
    messageFromClient: "",
    priority: null
  },
  statusForm: {
    status: null
  },
  references: [],
  notesForm: {
    notesByCpa: ""
  },
  clientDetails: {
    clientIdentifier: "",
    identifierType: null,
    name: "",
    address: "",
    postalCode: "",
    city: "",
    country: null,
    email: ""
  }
};

const getters = {
  assignedToCpaForm: state => {
    return state.assignedToCpaForm;
  },
  caseInformation: state => {
    return state.caseInformation;
  },
  clientDetails: state => {
    return state.clientDetails;
  },
  notesForm: state => {
    return state.notesForm;
  },
  statusForm: state => {
    return state.statusForm;
  },
  references: state => {
    return state.references;
  }
};

const mutations = {};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions
};
