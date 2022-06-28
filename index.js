class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize (string){
    let titled;
    if (string !== "the" && string !== "at" && string !== "a" && string !== "but" && string !== "but" && string !== "of" && string !== "and" && string !== "for" && string !== "at" && string !== "by" && string !== "from") {
      titled = string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
    return titled 
  }
}