import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeScreenProps {
  /** Texto a mostrar (puede tener varias líneas separadas con \n) */
  text?: string;
  /** Tiempo total que se ve la pantalla antes de desvanecerse (ms) */
  visibleDuration?: number;
  /** Callback cuando termina la animación */
  onFinish?: () => void;
}

export default function WelcomeScreen({
  text = "Welcome to\nAndres Gomes",
  visibleDuration = 3800,
  onFinish,
}: WelcomeScreenProps) {
  const [show, setShow] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setShow(false);
    }, visibleDuration);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [visibleDuration]);

  const lines = text.split("\n");

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-ink"
        >
          {/* === FONDO AURORA === */}
          {/* Mancha dorada superior izquierda */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-gold"
            style={{
              width: "55vw",
              height: "55vw",
              filter: "blur(110px)",
              opacity: 0.18,
              top: "-15%",
              left: "-10%",
            }}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, 60, 30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Mancha violeta/púrpura inferior derecha */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              width: "60vw",
              height: "60vw",
              background: "rgb(80, 30, 150)",
              filter: "blur(120px)",
              opacity: 0.22,
              bottom: "-20%",
              right: "-15%",
            }}
            animate={{
              x: [0, -60, 40, 0],
              y: [0, -40, -70, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Mancha azul central — más profundidad */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              width: "45vw",
              height: "45vw",
              background: "rgb(0, 80, 180)",
              filter: "blur(100px)",
              opacity: 0.15,
              top: "30%",
              left: "30%",
            }}
            animate={{
              x: [0, -50, 60, 0],
              y: [0, 50, -30, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Capa oscura sutil para que el texto destaque siempre */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-ink/40"
          />

          {/* === CONTENIDO === */}
          <div className="relative z-10 text-center px-8">
            {lines.map((line, lineIdx) => (
              <h1
                key={lineIdx}
                className={`font-serif font-bold leading-[1.1] tracking-[-0.02em] ${
                  lineIdx === 0 ? "text-white/90" : "text-gold italic"
                }`}
                style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
              >
                {line.split("").map((char, i) => {
                  // Calcular el delay acumulado: línea anterior completa + posición en línea actual
                  const previousChars = lines
                    .slice(0, lineIdx)
                    .reduce((acc, l) => acc + l.length, 0);
                  const totalIndex = previousChars + i;

                  return (
                    <motion.span
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 30,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3 + totalIndex * 0.06,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </h1>
            ))}

            {/* Línea decorativa que aparece al final */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: "easeOut",
              }}
              className="mx-auto mt-8 h-px w-24 bg-gold/60 origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/50"
            >
              Frontend Developer · Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
