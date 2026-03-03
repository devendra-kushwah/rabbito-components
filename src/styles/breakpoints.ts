
export const breakpoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
};

type Breakpoint = keyof typeof breakpoints;

export const media = {
    min: (bp: Breakpoint) => `@media (min-width: ${breakpoints[bp]}px)`,
    max: (bp: Breakpoint) => `@media (max-width: ${breakpoints[bp] - 1}px)`,
};


//   import { media } from "@/theme/styles/breakpoints";
//   const Box = styled.div`
//     color: black;
//     ${media.min("md")} {
//       color: blue;
//     }
//     ${media.max("sm")} {
//       color: red;
//     }
//   `;
