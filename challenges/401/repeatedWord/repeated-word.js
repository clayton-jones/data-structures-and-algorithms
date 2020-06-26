'use strict';

function repeatedWord(str) {
  if (typeof str !== 'string') return null;

  let map = new Array(1024);

  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    let string = normalizeString(strArr[i]);

    let index = hash(string);

    if (contains(map, index, string)) {
      return string;
    } else {
      add(map, index, string);
    }
  }

  return null;
}

function hash(key) {
  let val = 0;

  for( let i = 0; i < key.length; i++ ) {
    val =+ key.charCodeAt(i) * (i + 1);
  }

  val *= 599;

  val %= 1024;

  return val;
}

function add(map, index, string) {
  if (!map[index]) {
    map[index] = { key: string, next: null };
  } else {
    let current = map[index];
    while(current.next) {
      current = current.next;
    }
    current.next = { key: string, next: null };
  }
}

function normalizeString(str) {
  let string = str.replace(',', '');
  string = string.replace('.', '');
  string = string.toLowerCase();

  return string;
}

function contains(map, index, string) {
  if (!map[index]) { return false; }
  else {
    let current = map[index];

    while (current) {
      if (current.key === string) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = repeatedWord;