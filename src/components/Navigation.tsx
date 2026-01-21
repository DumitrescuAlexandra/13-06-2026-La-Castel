import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = React.useState<string>("details");

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.99);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (
            !bestEntry ||
            entry.intersectionRatio > bestEntry.intersectionRatio
          ) {
            bestEntry = entry;
          }
        });

        if (bestEntry) {
          const id = bestEntry.target.getAttribute("data-section");
          if (id) setActive(id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (!show) return null;
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 24 }}>
        {[
          ["Cine, ce & unde?", "about"],
          ["Detaliile evenimentului", "details"],
          ["Confirmare prezenta", "rsvp"],
          ["Galerie", "gallery"],
        ].map(([label, id]) => (
          <Button
            key={id}
            onClick={() => {
              setActive(id);
              scrollTo(id);
            }}
            sx={{
              position: "relative",
              marginTop: "48px",
              fontFamily: '"Gwendolyn", cursive',
              fontWeight: "600",
              fontSize: "48px",
              textTransform: "none",
              background:
                "linear-gradient(135deg, #0b3d2e 0%, #1f6f54 50%, #0b3d2e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: "8px",
                width: active === id ? "75%" : "0%",
                height: "2px",
                background:
                  "linear-gradient(135deg, #fff1b8, #d4af37, #fff1b8)",
                transform: "translateX(-50%)",
                transition: "width 0.35s ease",
              },

              "&:hover::after": {
                width: "75%",
              },

              "&:hover": {
                textShadow: "0 0 12px rgba(212,175,55,0.8)",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
