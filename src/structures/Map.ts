interface Items<T> {
  [key: string]: T;
}

export default class Map<T> {
  items: Items<T> = {};

  set(key: string, value: T) {
    this.items[key] = value;
  }

  remove(key: string) {
    if (this.has(key)) {
      delete this.items[key];

      return true;
    }

    return false;
  }

  has(key: string) {
    return key in this.items;
  }

  get(key: string) {
    return this.items[key];
  }

  clear() {
    this.items = {};
  }

  getSize() {
    return Object.keys(this.items).length;
  }

  getKeys() {
    return Object.keys(this.items);
  }

  getValues() {
    return Object.values(this.items);
  }

  getItems() {
    return { ...this.items };
  }
}
