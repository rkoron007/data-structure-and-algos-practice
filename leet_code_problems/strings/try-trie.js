/**
 * Initialize your data structure here.
 */


class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, root=this.root) {
  let letter = word[0];

  if(!(letter in root.children)) {
    root.children[letter] = new Node();
  }

  if (word.length === 1) {
    root.children[letter].isTerminal = true;
  } else {
    this.insert(word.slice(1), root.children[letter])
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, root=this.root) {
  if (word.length === 0) {
    if (root.isTerminal) {
      return true;
    } else {
      return false;
    }
  }

  let letter = word[0];

  if (letter in root.children) {
    return this.search(word.slice(1), root.children[letter])
  } else {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, root=this.root) {
  if (prefix.length === 0) return true;
  
  let letter = prefix[0];

  if (letter in root.children) {
    return this.startsWith(prefix.slice(1), root.children[letter])
  } else {
    return false
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


const trie = new Trie();

console.log(trie.insert("apple"));
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
// trie.insert("app");
// trie.search("app");     // returns true