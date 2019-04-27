import axios from "axios";

export default {
//saves new user to the db
  saveUser: function(userData) {
    // console.log("saveUser api getting hit");
    return axios.post("/api/users", userData);
  },
//log in user to their lobby with given id
  currentUser: function(user) {
    // console.log("currentUser api being hit");
    return axios.post("/api/login", user)
  },
//delete a user's acct with given id
  deleteUser: function(id) {
    return axios.delete(" " + id);
  },
//get all registered users
  allUsers: function() {
    console.log("allUsers api being hit");
    return axios.get("/api/usersRegistered");
  }

};
