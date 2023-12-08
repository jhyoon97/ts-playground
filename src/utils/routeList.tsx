import StackBasic from "pages/StackBasic";
import StackNumberBase from "pages/StackNumberBase";
import QueueBasic from "pages/QueueBasic";
import PriorityQueue from "pages/PriorityQueue";
import SingleLinkedList from "pages/SingleLinkedList";
import DoublyLinkedList from "pages/DoublyLinkedList";
import DoublyCircularLinkedList from "pages/DoublyCircularLinkedList";
import Set from "pages/Set";
import Map from "pages/Map";

// types
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

interface Route {
  path: string;
  title: string;
  component: EmotionJSX.Element;
}

const routeList: Array<Route> = [
  {
    path: "/stack-basic",
    title: "Stack - 진수변환",
    component: <StackBasic />,
  },
  {
    path: "/stack-number-base",
    title: "Stack - basic",
    component: <StackNumberBase />,
  },
  {
    path: "/queue-basic",
    title: "Queue - basic",
    component: <QueueBasic />,
  },
  {
    path: "/priority-queue",
    title: "우선순위 Queue",
    component: <PriorityQueue />,
  },
  {
    path: "/single-linked-list",
    title: "단방향 링크드 리스트",
    component: <SingleLinkedList />,
  },
  {
    path: "/doubly-linked-list",
    title: "양방향 링크드 리스트",
    component: <DoublyLinkedList />,
  },
  {
    path: "/doubly-circular-linked-list",
    title: "양방향+순환 링크드 리스트",
    component: <DoublyCircularLinkedList />,
  },
  {
    path: "/set",
    title: "Set",
    component: <Set />,
  },
  {
    path: "/map",
    title: "Map",
    component: <Map />,
  },
];

export default routeList;
