export default function Title({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`text-6xl font-bold ${className}`}>{children}</div>;
}
