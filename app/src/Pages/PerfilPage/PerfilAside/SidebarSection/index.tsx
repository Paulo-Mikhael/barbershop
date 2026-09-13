export default function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 text-sm font-semibold dark:text-typo-400 uppercase">
        {title}
      </h3>

      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}