export default function LinkIcon({ id }: { id: string }) {
  switch (id) {
    case "youtube":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <rect x="1" y="4" width="22" height="16" rx="5" fill="#FF0000" />
          <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#ffffff" />
        </svg>
      );
    case "naver-tv":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <rect x="2" y="5" width="20" height="13" rx="2" fill="none" stroke="#03C75A" strokeWidth="2" />
          <path d="M8 21h8M12 18v3" stroke="#03C75A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "blog":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="#03C75A" strokeWidth="2" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="#03C75A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
