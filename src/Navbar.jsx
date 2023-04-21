import React from "react";

export default function Navbar() {
  return (
    <section className="header">
      <div className="logo">
        <img
          src="https://img.icons8.com/ios-filled/128/ffc451/source-code.png"
          alt=""
        />
      </div>
      <p className="name">
        Code<span>Crushers</span>
      </p>
      <div className="nav-menu">
        <a href="/">Main</a>
        <a href="/Project">Project</a>
        <a href="/Achievement">Achievement</a>

      </div>
      <div className="mobile-nav">
        <i className="mobile-menu fa-solid fa-bars "></i>
      </div>
    </section>
  );
}
