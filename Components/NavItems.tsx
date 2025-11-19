"use client";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({handleClick}:{handleClick?:()=>void}) => {
  const user = {
    name: "Brian May",
    email: "brianmaygdae;.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
            LaaGAN.
        </h1>

      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 text-white": isActive,
                  })} onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 group-hover:invert size-6 ${
                      isActive ? "brightness-0 invert" : ""
                    }`}
                    
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "User"}
            className="size-8 rounded-full"
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            onClick={() => {
              console.log("logout");
            }}
            className="cursor-pointer"
          >
            <img src="/assets/icons/logout.svg" alt="log-out" className="size-6" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
