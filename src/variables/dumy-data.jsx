// ##############################
// // // table head data and table body data for Tables view
// #############################
const thead = ["Campaign Name", "Results", "Reach", "Cost", ""];
const tbody = [
  {
    className: "table-success",
    data: ["Careem", "912 clicks", "15000", "EGP 6,738"]
  },
  {
    className: "",
    data: ["Noon", "1500 clicks", "34000", "EGP 3,789"]
  },
  {
    className: "table-info",
    data: ["Uber", "200 clicks", "23488", "EGP 6,142"]
  },
  {
    className: "",
    data: ["SWVL", "1020 clicks", "8972", "EGP 8,735"]
  },
  {
    className: "table-danger",
    data: ["Super-Market", "300 clicks", "1231", "EGP 3,542"]
  },
  {
    className: "table-warning",
    data: ["TEDx", "120 clicks", "8900", "EGP 8,615"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
