type Value = string | number;

interface Items {
  [key: string]: Value;
}

export default class Set {
  items: Items = {};

  add(value: Value) {
    if (!this.has(value)) {
      this.items[value] = value;

      return true;
    }

    return false;
  }

  remove(value: Value) {
    if (this.has(value)) {
      delete this.items[value];

      return true;
    }

    return false;
  }

  has(value: Value) {
    return value in this.items;
  }

  clear() {
    this.items = {};
  }

  getSize() {
    return Object.keys(this.items).length;
  }

  getValues() {
    return Object.keys(this.items);
  }

  union(otherSet: Set) {
    // 합집합
    const newSet = new Set();
    const values = this.getValues().concat(otherSet.getValues());

    values.forEach((value) => newSet.add(value));

    return newSet;
  }

  intersection(otherSet: Set) {
    // 교집합
    const newSet = new Set();
    const values = this.getValues();

    values.forEach((value) => {
      if (otherSet.has(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  difference(otherSet: Set) {
    // 차집합
    const newSet = new Set();
    const values = this.getValues();

    values.forEach((value) => {
      if (!otherSet.has(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  symmetricDifference(otherSet: Set) {
    const intersectionSet = this.intersection(otherSet);
    const unionSet = this.union(otherSet);
    const newSet = new Set();

    unionSet.getValues().forEach((value) => {
      if (!intersectionSet.has(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  isSubset(otherSet: Set) {
    // 부분집합
    const values = this.getValues();

    return values.every((value) => otherSet.has(value));
  }

  isSuperset(otherSet: Set) {
    const values = otherSet.getValues();

    return values.every((value) => this.has(value));
  }

  isDisjoint(otherSet: Set) {
    return this.getValues().every((value) => !otherSet.has(value));
  }
}
