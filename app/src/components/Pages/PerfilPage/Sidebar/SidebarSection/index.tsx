export default function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 text-sm font-semibold text-typo-400">
        {title}
      </h3>

      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}