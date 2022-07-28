import { useState, useEffect } from "react";

function App() {
  return (
    <div className="display">
      <Sidebar></Sidebar>
      <ToDo></ToDo>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="/logo192.png"
        alt="placeholder logo"
        className="placeholder-logo"
      ></img>
      <ul className="link-list">
        <li>
          <SidebarLink href="Board" text="Board"></SidebarLink>
        </li>
        <li>
          <SidebarLink href="Issues" text="Issues"></SidebarLink>
        </li>
        <li>
          <SidebarLink href="Add Issue" text={<b>+ Add Issue</b>}></SidebarLink>
        </li>
      </ul>
      <img src="/logo512.png" alt="avatar" className="avatar"></img>
    </div>
  );
}
function SidebarLink(props) {
  return (
    <a className="sidebar-link" href={props.href}>
      {props.text}
    </a>
  );
}

function ToDo() {
  return (
    <div className="tasks">
      <ul>
        To Do<li></li>
      </ul>
      <ul>
        In Review<li></li>
      </ul>
      <ul>
        In Progress<li></li>
      </ul>
    </div>
  );
}
export default App;
