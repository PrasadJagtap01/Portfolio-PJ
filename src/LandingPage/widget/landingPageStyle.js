import { css } from "@emotion/react";
import { makeStyles } from "@mui/styles";

// export const landingStyle = makeStyles(() => ({
//   svgStyle: {
//     position: "relative",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "200px",
//     height: "200px",
//     background:
//       "radial-gradient(circle, rgba(64, 0, 128, 1) 0%, rgba(0, 0, 0, 1) 100%)",
//     borderRadius: "50%",
//   },
// }));

export const h1Style = css({
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  });
