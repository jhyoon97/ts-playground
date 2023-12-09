/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import HashTableWithLinkedList from "structures/HashTableWithLinkedList";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const table = new HashTableWithLinkedList();
table.set("Gandalf", "gandalf@email.com");
table.set("John", "john@email.com");
table.set("Tyrion", "tyrion@email.com");

table.set("asd", "collision!!!!!!!!");

table.remove("asd");

console.log(table.getTable());

const HashTableWithLinkedListPage = () => {
  return <div css={box} />;
};

export default HashTableWithLinkedListPage;
