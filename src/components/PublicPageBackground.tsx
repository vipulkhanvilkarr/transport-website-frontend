/**
 * 3D-style floating shapes in the background for all public pages.
 * Uses CSS transforms and gradients for a subtle depth effect.
 */
export default function PublicPageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft gradient orbs only – keep background calm */}
      <div className="absolute -left-48 -top-32 h-96 w-96 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -right-48 top-1/3 h-80 w-80 rounded-full bg-secondary/[0.05] blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-3xl" />
    </div>
  )
}
