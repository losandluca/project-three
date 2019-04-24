import axios from "axios";

export default {
  //saves new user to the db
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },

  //take user to their lobby with given id
  existingUser: function(user) {
    // console.log(user);
    return axios.post("/api/login", user)
  },

  //delete a user's acct with given id
  deleteUser: function(id) {
    return axios.delete(" " + id);
  },

  //get all registered users
  allUsers: function() {
    return axios.get("/api/users");
  }

};
