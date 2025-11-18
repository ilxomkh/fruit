export default function GlassFilters() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0 select-none" aria-hidden="true">
      <defs>
        <filter id="lg-dist">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.013"
            numOctaves="3"
            seed="14"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

