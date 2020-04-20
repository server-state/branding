import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: '/colors',
    title: 'Colors',
    content: pageLoader(() => import('./COLORS.md'))
  },
  {
    path: '/logos',
    title: 'Logos',
    content: pageLoader(() => import('./LOGOS.md'))
  },
  {
    path: '/shapes',
    title: 'Shapes',
    content: pageLoader(() => import('./SHAPES.md'))
  },
  {
    path: '/language',
    title: 'Language',
    content: pageLoader(() => import('./LANGUAGE.md'))
  }
];

ReactDOM.render(
  <Catalog title="Server State Branding" pages={pages} logoSrc='logos/color-light.svg' theme={{

    // Used in PageHeader
    pageHeadingBackground: "#fff",
    pageHeadingTextColor: "#000",
    textColor: '#000',

    lightColor: "#e6e6e6",
    brandColor: "#000",

    bgLight: "#e6e6e6",
    bgDark: "#808080",
    linkColor: "#ffc107",
    sidebarColorTextActive: '#ffc107',
    sidebarColorActive: '#808080',
    fontFamily: '"Libre Franklin", sans-serif',
    fontHeading: '"Libre Franklin", sans-serif',
  }} />,
  document.getElementById("catalog")
);
