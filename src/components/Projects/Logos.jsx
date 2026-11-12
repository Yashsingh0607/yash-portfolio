// Custom logo marks for each project, drawn in the site's gold and wine.

export function ResolveAILogo({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} role="img" aria-label="ResolveAI logo">
      <defs>
        <linearGradient id="raGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4C95D" />
          <stop offset="1" stopColor="#D4A017" />
        </linearGradient>
      </defs>
      <path d="M60 4 108 31V89L60 116 12 89V31Z" stroke="#D4A017" strokeOpacity=".35" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M60 14 99 36V84L60 106 21 84V36Z" fill="url(#raGold)" />
      <path d="M38 63 53 78 77 49" stroke="#090B10" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85 29 87.4 35.6 94 38 87.4 40.4 85 47 82.6 40.4 76 38 82.6 35.6Z" fill="#8B1E2D" />
    </svg>
  );
}

export function EncrypterLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} role="img" aria-label="Secure File Encrypter logo">
      <defs>
        <linearGradient id="enGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4C95D" />
          <stop offset="1" stopColor="#D4A017" />
        </linearGradient>
      </defs>
      <path
        d="M60 4 108 22V60C108 88 88 108 60 117 32 108 12 88 12 60V22Z"
        stroke="#D4A017"
        strokeOpacity=".35"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M60 14 98 28V60C98 82 82 99 60 107 38 99 22 82 22 60V28Z" fill="url(#enGold)" />
      <circle cx="60" cy="52" r="12" fill="#090B10" />
      <path d="M54 60H66L70 84H50Z" fill="#090B10" />
      <circle cx="60" cy="52" r="4.5" fill="#D4A017" />
    </svg>
  );
}
