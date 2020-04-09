class Node {
  constructor() {
    this.isTerminal = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(str, root = this.root) {
    let letter = str[0];

    // will set the last letter in the word
    if (!letter) {
      root.isTerminal = true;
      return;
    }

    // if I don't have this letter add a new node
    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    // move on in my string with my new node
    this.insertRecur(str.slice(1), root.children[letter]);
  }

  insertIter(word) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!(letter in root.children)) {
        root.children[letter] = new Node();
      }

      root = root.children[letter];
    }

    root.isTerminal = true;
  }

  searchRecur(str, root = this.root) {
    // 1. if this is the end of the word
    // 1. return true if the node is terminal or false if not
    // 2. if this is any other point in teh word
    let letter = str[0];

    // end of word
    if (!letter) {
      // if this root is terminal the word is in my tree
      if (root.isTerminal) return true;
      return false;
    }

    // otherwise I have a word:
    // A. if this letter in is the root's children we
    // recursively slicing off this letter
    if (letter in root.children) {
      return this.searchRecur(str.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  searchIter(str) {
    let root = this.root;
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];

      if (!(letter in root.children)) return false;
      root = root.children[letter];
    }

    return root.isTerminal;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (!prefix.length) {
      let allWords = [];
      if (root.isTerminal) allWords.push("");

      for (let letter in root.children) {
        let child = root.children[letter];

        let wordCombos = this.wordsWithPrefix(prefix, child);

        let fullWords = wordCombos.map((suffix) => letter + suffix);

        allWords.push(...fullWords);
      }

      return allWords;
    } else {
      let letter = prefix[0];
      let child = root.children[letter];

      if (!child) {
        return [];
      } else {
        let suffixes = this.wordsWithPrefix(prefix.slice(1), child);

        let words = suffixes.map((suff) => letter + suff);
        return words;
      }
    }
  }
}

let myT = new Trie();

myT.insertRecur("tea");
myT.insertRecur("ten");
myT.insertRecur("tek");

console.log(myT.wordsWithPrefix(""));

// console.log(myT);

module.exports = {
  Node,
  Trie,
};
