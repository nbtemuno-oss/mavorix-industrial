import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-signal text-white hover:bg-orange-600",
    secondary: "bg-white text-navy ring-1 ring-slate-200 hover:bg-slate-50",
    dark: "bg-navy text-white hover:bg-slate-800"
  };
  return (
    <Link href={href} className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
