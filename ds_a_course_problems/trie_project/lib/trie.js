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

  insertRecur(word, root = this.root) {
    let letter = word[0];

    if (!letter) {
      root.isTerminal = true;
      return;
    }

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }
    this.insertRecur(word.slice(1), root.children[letter]);
  }

  insertIter(word) {
    let root = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!(letter in root.children)) {
        root.children[letter] = new Node();
      }
      root = root.children[letter];
    }

    root.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    let letter = word[0];

    if (!letter) {
      if (root.isTerminal) return true;
      return false;
    }

    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  searchIter(word) {
    let root = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in root.children)) {
        return false;
      }

      root = root.children[letter];
    }

    return root.isTerminal;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (!prefix) {
      let allSuff = [];
      if (root.isTerminal) allSuff.push("");

      for (let letter in root.children) {
        let child = root.children[letter];
        let suffixes = this.wordsWithPrefix(prefix, child);

        let words = suffixes.map((suffix) => letter + suffix);
        allSuff.push(...words);
      }

      return allSuff;
    } else {
      let letter = prefix[0];
      let child = root.children[letter];

      if (!child) {
        return [];
      } else {
        let suffixes = this.wordsWithPrefix(prefix.slice(1), child);

        let words = suffixes.map((suffix) => letter + suffix);
        return words;
      }
    }
  }
}

let trie = new Trie();
trie.insertRecur("ten");
trie.insertRecur("tea");
console.log(trie.wordsWithPrefix("te"));

// console.log(myT);

module.exports = {
  Node,
  Trie,
};
