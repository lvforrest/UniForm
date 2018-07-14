import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getUserLogin: function(email, password){
    return axios.post("/login", {email: email, password: password});
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
   // Gets all Patrons 
   getPatrons: function() { 
    return axios.get("/api/patron"); 
  }, 
  // Gets the Patron with the given id 
  getPatron: function(id) { 
    return axios.get("/api/patron/" + id); 
  }, 
  // Deletes the Patron with the given id 
  deletePatron: function(id) { 
    return axios.delete("/api/patron/" + id); 
  },
  updatePatron: function(name,patronData) { 
    console.log(name) 
    return axios.put("/api/patron/" + name, patronData); 
  }, 
  getPatronName: function(name){ 
    console.log("getting patron name") 
    return axios.get("/api/patron/name/" + name) 
  }, 
  // Saves a Patron to the database 
  savePatron: function(PatronData) { 
    return axios.post("/api/patron", PatronData); 
  }, 
  // Gets all Templates
  getTemplates: function() {
    return axios.get("/api/template");
  },
  // Gets the Template with the given id
  getTemplate: function(id) {
    return axios.get("/api/template/" + id);
  },
  // Deletes the Template with the given id
  deleteTemplate: function(id) {
    return axios.delete("/api/template/" + id);
  },
  // Saves a Template to the database
  saveTemplate: function(templateData) {
    return axios.post("/api/template", templateData);
  },
  updateTemplate: function(id,templateData) {
    return axios.put("/api/template/" + id, templateData);
  },
  // Gets all Filleds
  getFilleds: function(data) {
    return axios.get("/api/filled", data);
  },
  // Gets the Filled with the given id
  getFilled: function(id) {
    return axios.get("/api/filled/" + id);
  },
  getFilledByTemplate: function(id) {
    return axios.get("/api/filled/template/" + id);
  },
  getFilledByPatron: function(id) {
    return axios.get("/api/filled/patron/" + id);
  },
  // Deletes the Filled with the given id
  deleteFilled: function(id) {
    return axios.delete("/api/filled/" + id);
  },
  // Saves a Filled to the database
  saveFilled: function(FilledData) {
    return axios.post("/api/filled", FilledData);
  },
};
