import React from "react";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
// import { Layout, Menu, Icon, Divider } from "antd";
// const { Content, Footer, Sider } = Layout;

// import styles from "./styles";

export default function Home() {
  let { path, url } = useRouteMatch();
  return <div>Home</div>;
}
