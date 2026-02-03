// import { Box } from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Snowfall from "react-snowfall";

// function About() {
//   const scrollToNext = () => {
//     document.getElementById("details")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <Box
//       id="about"
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "100dvh",
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         component="img"
//         src="https://i.postimg.cc/xjJkYFpy/Group-2.jpg"
//         alt=""
//         sx={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           display: "block",
//           zIndex: 1,
//         }}
//       />
//       <Snowfall
//         snowflakeCount={90}
//         color="rgba(212, 175, 55, 0.8)"
//         radius={[1.5, 3]}
//         speed={[0.5, 1.75]}
//         wind={[0, 0.2]}
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           zIndex: 3,
//           textAlign: "center",
//         }}
//       >
//         <Box
//           sx={{
//             fontFamily: '"Gwendolyn", cursive',
//             fontSize: { xs: "104px", md: "136px" },
//             fontWeight: 200,

//             background:
//               "linear-gradient(135deg, #fff1b8 0%, #e6c36a 25%, #d4af37 50%, #e6c36a 75%, #fff1b8 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",

//             textShadow: "0 0 25px rgba(212,175,55,0.45)",

//             lineHeight: 1,
//             px: 2,
//           }}
//         >
//           Emilian & Alexandra
//         </Box>
//         <Box
//           sx={{
//             marginTop: "24px",
//             fontFamily: "Tangerine",
//             fontSize: { xs: "48px", md: "72px" },
//             fontWeight: 200,

//             background:
//               "linear-gradient(135deg, #fff1b8 0%, #e6c36a 25%, #d4af37 50%, #e6c36a 75%, #fff1b8 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",

//             textShadow: "0 0 25px rgba(212,175,55,0.45)",

//             lineHeight: 1,
//             px: 2,
//           }}
//         >
//           13 Iunie 2026 | La Castel | Brasov
//         </Box>
//       </Box>
//       <Box
//         onClick={scrollToNext}
//         sx={{
//           position: "absolute",
//           bottom: "32px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 4,
//           width: "64px",
//           height: "64px",
//           borderRadius: "50%",
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transition: "all 0.3s ease",
//           border: "2px solid #fff1b8",
//           paddingBottom: "12px",
//           "&:hover": {
//             transform: "translateX(-50%) translateY(6px)",
//             boxShadow: "0 0 40px rgba(212,175,55,0.6)",
//           },
//         }}
//       >
//         {/* Outer gradient border */}
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             borderRadius: "50%",
//             padding: "1px", // thickness of border
//             // background: "linear-gradient(135deg, #fff1b8, #d4af37, #fff1b8)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Inner circle (transparent background) */}
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               borderRadius: "50%",
//               backgroundColor: "transparent",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <ArrowBackIosIcon
//               sx={{
//                 transform: "rotate(270deg)", // points down
//                 fontSize: "32px",
//                 color: "#d4af37", // golden arrow
//               }}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default About;

import { Box, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Snowfall from "react-snowfall";

type HeroProps = {
  onScrollToAbout?: () => void;
};

function About({ onScrollToAbout }: HeroProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "100svh",
          md: "100dvh",
        },
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src="https://i.postimg.cc/xjJkYFpy/Group-2.jpg"
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: { xs: "center top", md: "center" },
          display: "block",
          zIndex: 1,
        }}
      />

      {/* Snow effect */}
      <Snowfall
        snowflakeCount={isMobile ? 50 : 90}
        color="rgba(212, 175, 55, 0.8)"
        radius={[1.5, 3]}
        speed={[0.5, 1.75]}
        wind={[0, 0.2]}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Center content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          textAlign: "center",
          px: { xs: 1, sm: 2 },
          transform: { xs: "translateY(-20px)", md: "none" },
        }}
      >
        {/* Names */}
        <Box
          sx={{
            fontFamily: '"Gwendolyn", cursive',
            fontSize: { xs: "64px", sm: "84px", md: "136px" },
            fontWeight: 200,
            lineHeight: { xs: 1.05, md: 1 },
            background:
              "linear-gradient(135deg, #fff1b8 0%, #e6c36a 25%, #d4af37 50%, #e6c36a 75%, #fff1b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(212,175,55,0.45)",
            px: { xs: 2, sm: 4 },
            maxWidth: "100%",
            wordBreak: "break-word",
          }}
        >
          Emilian & Alexandra
        </Box>

        {/* Date & location */}
        <Box
          sx={{
            mt: { xs: "12px", md: "24px" },
            fontFamily: "Tangerine",
            fontSize: { xs: "32px", sm: "48px", md: "72px" },
            fontWeight: 200,
            lineHeight: 1.1,
            background:
              "linear-gradient(135deg, #fff1b8 0%, #e6c36a 25%, #d4af37 50%, #e6c36a 75%, #fff1b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(212,175,55,0.45)",
            px: 2,
          }}
        >
          13 Iunie 2026 | La Castel | Brasov
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box
        onClick={onScrollToAbout}
        sx={{
          position: "absolute",
          bottom: { xs: "20px", md: "32px" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          width: { xs: "48px", md: "64px" },
          height: { xs: "48px", md: "64px" },
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #fff1b8",
          paddingBottom: "10px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateX(-50%) translateY(6px)",
            boxShadow: "0 0 40px rgba(212,175,55,0.6)",
          },
        }}
      >
        <ArrowBackIosIcon
          sx={{
            transform: "rotate(270deg)",
            fontSize: { xs: "24px", md: "32px" },
            color: "#d4af37",
          }}
        />
      </Box>
    </Box>
  );
}

export default About;
