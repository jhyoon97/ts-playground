import SingleLinkedList from "./SingleLinkedList";

class Element<T> {
  key: string;

  value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}

export default class HashTableWithLinkedList<T> {
  table: Array<SingleLinkedList<Element<T>> | undefined> = [];

  set(key: string, value: T) {
    const hashedIndex = this.hash(key);
    const newElement = new Element(key, value);
    const list = this.table[hashedIndex];

    if (list) {
      list.append(newElement);
    } else {
      const newList = new SingleLinkedList<Element<T>>();
      this.table[hashedIndex] = newList;
      newList.append(newElement);
    }
  }

  remove(key: string) {
    const hashedIndex = this.hash(key);
    const list = this.table[hashedIndex];

    if (list) {
      const findIndex = list.findIndex((node) => node.element.key === key);

      if (findIndex > -1) {
        list.removeAt(findIndex);

        if (list.getIsEmpty()) {
          this.table[hashedIndex] = undefined;
        }

        return true;
      }

      return false;
    }

    return false;
  }

  // eslint-disable-next-line consistent-return
  get(key: string) {
    const hashedIndex = this.hash(key);
    const list = this.table[hashedIndex];

    if (list) {
      const findIndex = list.findIndex((node) => node.element.key === key);

      if (findIndex > -1) {
        return list.getNode(findIndex)?.element.value;
      }
    }
  }

  getTable() {
    return [...this.table];
  }

  private hash(key: string) {
    // 책 139페이지
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }
}
