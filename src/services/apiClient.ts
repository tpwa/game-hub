import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c28cd4be1659406ea101ef82f8fdb410",
  },
});


//Use fetch instead?:

// fetch('"https://api.rawg.io/api?' + new URLSearchParams({
//   key: 'c28cd4be1659406ea101ef82f8fdb410',
// }))