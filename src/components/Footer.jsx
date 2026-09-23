import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-neutral-600">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
