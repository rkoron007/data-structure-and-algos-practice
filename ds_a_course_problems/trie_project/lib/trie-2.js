/**
 * Initialize your data structure here.
 */

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
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, root = this.root) {
  let letter = word[0];

  if (!letter) {
    root.isTerminal = true;
    return;
  }

  if (!(letter in root.children)) {
    root.children[letter] = new Node();
  }

  this.insert(word.slice(1), root.children[letter]);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let root = this.root;

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!(letter in root.children)) {
      return false;
    }
    root = root.children[letter];
  }

  return root.isTerminal;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, root = this.root) {
  let letter = prefix[0];
  if (!letter) return true;

  if (letter in root.children) {
    return this.startsWith(prefix.slice(1), root.children[letter]);
  } else {
    return false;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const t = new Trie();

t.insert("app");
t.insert("apl");
// console.log(t.search("app"));
// console.log(t.search("ap"));
// console.log(t.startsWith("ap"));
