import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navigation() {
  const [activePage, setActivePage] = useState("My Story");

  const pages = [
    "My Story",
    "Priming",
    "Enter Framer",
    "For the no coders Framer is for you",
    "For the code saavy Framer is for you",
    "My Sweet Spot How Our Team is Using Framer",
    "Figma",
    "My Framer Desktop",
    "Tight Developer Schedule",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id.replace(/-/g, " "));
          }
        });
      },
      { threshold: 1 }
    );

    pages.forEach((page) => {
      const id = page.replace(/[\s:.]/g, "-");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      pages.forEach((page) => {
        const id = page.replace(/[\s:.]/g, "-");
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pages]);

  return (
    <ul>
      {pages.map((page) => (
        <li key={page} className={page === activePage ? "selected" : ""}>
          <Link
            to={page.replace(/[\s:.]/g, "-")}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setActivePage(page)}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
