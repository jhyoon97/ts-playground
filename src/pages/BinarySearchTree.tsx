/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import BinarySearchTree from "structures/BinarySearchTree";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const tree = new BinarySearchTree();
/* tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// tree.postOrderTraverse((node) => console.log(node.key));
tree.remove(15);
tree.insert(19); */

const BinarySearchTreePage = () => {
  return <div css={box} />;
};

export default BinarySearchTreePage;
