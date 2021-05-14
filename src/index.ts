import type { TypographyOptions } from "typography";

const theme: TypographyOptions = {
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2.2,
  bodyColor: "#2c3e50",
  bodyWeight: "normal",
  boldWeight: 700,
  blockMarginBottom: 5 / 8,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Inter",
    "Roboto",
    "Oxygen",
    "Fira Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Inter",
    "Roboto",
    "Oxygen",
    "Fira Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  overrideStyles: ({ rhythm }) => ({
    "h1, h2, h3, h4, h5, h6,hr": {
      marginTop: rhythm(1.2),
      marginBottom: rhythm(5 / 8),
    },
    h1: {
      paddingBottom: rhythm(3 / 8),
    },
    h2: {
      borderBottom: "1px solid #eaecef",
      paddingBottom: rhythm(3 / 8),
    },
    "p,blockquote,ul,ol,dl,table": { margin: "0.8em 0" },
    "ol,ul": {
      paddingLeft: rhythm(1.2),
    },
    // children ol, ul
    "li>ol,li>ul": {
      margin: 0,
    },
    p: {
      marginTop: rhythm(5 / 8),
    },
    a: {
      color: "#42b983",
      textDecoration: "none",
      padding: "0 2px",
      fontWeight: 600,
    },
    "a:hover,a:active": {
      textDecoration: "underline",
    },
    blockquote: {
      borderLeft: `4px solid #42b983`,
      color: "#777",
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      padding: "10px 15px",
      backgroundColor: "rgba(66, 185, 131, .1)",
    },
    code: {
      color: "#476582",
      padding: ".25rem .5rem",
      margin: 0,
      fontSize: ".85em",
      backgroundColor: "rgba(27,31,35,.05)",
      borderRadius: "3px",
    },
    hr: {
      height: "2px",
      padding: 0,
      backgroundColor: "#e7e7e7",
      marginTop: rhythm(5 / 8),
      marginBottom: rhythm(5 / 8),
      border: "0 none",
      overflow: "hidden",
      boxSizing: "content-box",
    },
  }),
};

export default theme;
