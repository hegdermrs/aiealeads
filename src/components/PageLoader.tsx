type PageLoaderProps = {
  visible: boolean;
  exiting: boolean;
};

export default function PageLoader({ visible, exiting }: PageLoaderProps) {
  if (!visible && !exiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={exiting}
      aria-busy={!exiting}
      role="status"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div
          className="h-10 w-10 rounded-full border-2 border-white/10 border-t-emerald-400/90"
          style={{ animation: "page-loader-spin 0.85s linear infinite" }}
          aria-hidden="true"
        />

        <div>
          <p
            className="text-lg tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            AI Execution Accelerator
          </p>
          <p className="mt-2 text-sm text-white/50">Preparing your experience&hellip;</p>
        </div>
      </div>
    </div>
  );
}
