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
/* table.set("Gandalf", "간달프");
table.set("John", "존");
table.set("Tyrion", "티리온");
table.set("Aaron", "아론");
table.set("Donnie", "도니");
table.set("Ana", "애나");
table.set("Jonathan", "조나단");
table.set("Jamie", "제이미");
table.set("Sue", "슈");
table.set("Mindy", "민디");
table.set("Paul", "폴");
table.set("Nathan", "나단");

console.log(table.getTable()); */

const HashTableWithLinkedListPage = () => {
  return <div css={box} />;
};

export default HashTableWithLinkedListPage;
