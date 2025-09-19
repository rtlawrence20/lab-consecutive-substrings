function consecutiveSubstrings(string) {
  // type your code here
  const result = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['t', 'tr', 'tri', 'triv', 'trivi', 'trivia', 'trivial',"+
     "'r', 'ri', 'riv', 'rivi', 'rivia', 'rivial', 'i', 'iv', 'ivi', 'ivia', 'ivial', 'v', 'vi', 'via', 'vial', 'i', 'ia', 'ial', 'a', 'al', 'l']");
  console.log("=>", consecutiveSubstrings("trivial"));

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


