import { profile } from "../../data/portfolio";
import { Lozenge } from "../Ornament";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 text-center">
      <Lozenge centered />
      <p className="mt-6 font-display text-2xl font-semibold tracking-wide">{profile.name}</p>
      <p className="mt-1 text-sm text-mute">© {new Date().getFullYear()}</p>
      <p className="mt-3 text-xs tracking-wide text-mute">Built with React, Vite and Tailwind CSS</p>
      <a href="#home" className="mt-5 inline-block text-sm tracking-wide text-gold hover:text-gold-soft">
        Back to top ↑
      </a>
    </footer>
  );
}
