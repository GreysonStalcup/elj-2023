export default function Nav() {
  return (
    <nav className="relative items-center pt-12 pb-6 font-medium bg-[#2A4C59] text-white">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#ffff"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-lg font-bold text-center">
        <a href="/">An Evening in La Jolla</a>
      </h1>
    </nav>
  );
}
