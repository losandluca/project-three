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
//remove a user's friend from friends list with given id
  deleteFriend: function(id) {
    return axios.delete(" " + id);
  },
//get all registered users
  allUsers: function() {
    // console.log("allUsers api being hit");
    return axios.get("/api/usersRegistered");
  },
//gets the user thats currently logged in
  onlineUser: function(user) {
    return axios.get("/api/online", user);
  },
//add a friend to user's list of friends
  addFriend: function(friendData) {
    return axios.post("/api/friendRequest", friendData);
  }

};
