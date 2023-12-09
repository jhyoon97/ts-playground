/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import CollisionHashTable from "structures/CollisionHashTable";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const table = new CollisionHashTable();
table.set("Gandalf", "gandalf@email.com");
table.set("John", "john@email.com");
table.set("Tyrion", "tyrion@email.com");

table.set("asd", "collision!!!!!!!!");

console.log(table.getTable());

const CollisionHashTablePage = () => {
  return <div css={box} />;
};

export default CollisionHashTablePage;
