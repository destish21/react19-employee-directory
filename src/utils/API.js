import axios from "axios";

export default {
  getUsers: function() {
    return axios("https://randomuser.me/api/?results=35");
  }
};