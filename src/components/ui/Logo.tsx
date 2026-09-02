export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-heading text-2xl md:text-[1.65rem] font-medium tracking-[0.08em] text-mehendi">
        GAURI<span className="text-gold">É</span>
      </span>
    </span>
  );
}

export function LogoLight({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-heading text-2xl md:text-[1.65rem] font-medium tracking-[0.08em] text-ivory">
        GAURI<span className="text-gold">É</span>
      </span>
    </span>
  );
}
