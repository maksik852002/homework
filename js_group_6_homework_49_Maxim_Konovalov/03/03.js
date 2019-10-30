function chess(box) {
  var output = "";
  for(var i = 0; i < box; i++) {
    for(var j = 0; j < box / 2; j++) {
      if(i % 2 === 0) {
        output += "  ";
        output += "██";
      } else {
        output += "██";
        output += "  ";      
      }
    }
    output += "\n";
  }
  return output;
}
console.log(chess(8));


