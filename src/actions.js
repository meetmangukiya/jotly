const notebook_action = (cmd) => {
  if (cmd.ls) {
    console.log("Listing notebooks...");
  }
  if (cmd.create) {
    if (!cmd.name) {
      console.error("Name is requried");
      return;
    }
    console.log("creating notebook", cmd.name);
  }
  if (cmd.show_index) {
    if (!cmd.name) {
      console.error("Name is required");
      return;
    }
    console.log("Index of notebook ", cmd.name);
  }
}

module.exports = {
  notebook: notebook_action,
}
