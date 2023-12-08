type Element = string | number;

interface Items {
  [key: string]: string | number;
}

export default class Set {
  items: Items = {};

  add(element: Element) {
    if (!this.has(element)) {
      this.items[element] = element;

      return true;
    }

    return false;
  }

  remove(element: Element) {
    if (this.has(element)) {
      delete this.items[element];

      return true;
    }

    return false;
  }

  has(element: Element) {
    return element in this.items;
  }

  clear() {
    this.items = {};
  }

  getSize() {
    return Object.keys(this.items).length;
  }

  getItems() {
    return Object.keys(this.items);
  }

  union(otherSet: Set) {
    // 합집합
    const newSet = new Set();
    const items = this.getItems().concat(otherSet.getItems());

    items.forEach((item) => newSet.add(item));

    return newSet;
  }

  intersection(otherSet: Set) {
    // 교집합
    const newSet = new Set();
    const items = this.getItems();

    items.forEach((item) => {
      if (otherSet.has(item)) {
        newSet.add(item);
      }
    });

    return newSet;
  }

  difference(otherSet: Set) {
    // 차집합
    const newSet = new Set();
    const items = this.getItems();

    items.forEach((item) => {
      if (!otherSet.has(item)) {
        newSet.add(item);
      }
    });

    return newSet;
  }

  symmetricDifference(otherSet: Set) {
    const intersectionSet = this.intersection(otherSet);
    const unionSet = this.union(otherSet);
    const newSet = new Set();

    unionSet.getItems().forEach((item) => {
      if (!intersectionSet.has(item)) {
        newSet.add(item);
      }
    });

    return newSet;
  }

  isSubset(otherSet: Set) {
    // 부분집합
    const items = this.getItems();

    return items.every((item) => otherSet.has(item));
  }

  isSuperset(otherSet: Set) {
    const items = otherSet.getItems();

    return items.every((item) => this.has(item));
  }

  isDisjoint(otherSet: Set) {
    return this.getItems().every((item) => !otherSet.has(item));
  }
}
