var findPosition = (str) => {
 return str.slice(0, str.lastIndexOf('is')).lastIndexOf('is');
}

console.log(findPosition("This is a beautiful day, is it?"));
