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
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
   // Gets all Questrians 
   getQuestrians: function() { 
    return axios.get("/api/Questrian"); 
  }, 
  // Gets the Questrian with the given id 
  getQuestrian: function(id) { 
    return axios.get("/api/Questrian/" + id); 
  }, 
  // Deletes the Questrian with the given id 
  deleteQuestrian: function(id) { 
    return axios.delete("/api/Questrian/" + id); 
  }, 
  // Saves a Questrian to the database 
  saveQuestrian: function(QuestrianData) { 
    return axios.post("/api/Questrian", QuestrianData); 
  }, 
  updateQuestrian: function(id) { 
    return axios.put("/api/Questrian/" + id); 
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
  getFilleds: function() {
    return axios.get("/api/filled");
  },
  // Gets the Filled with the given id
  getFilled: function(id) {
    return axios.get("/api/filled/" + id);
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
