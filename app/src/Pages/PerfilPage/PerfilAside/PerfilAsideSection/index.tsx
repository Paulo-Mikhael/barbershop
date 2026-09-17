import AsideSectionItem from "./AsideSectionItem";

function AsideSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ul className="mt-8">
      <h3 className="mb-3 text-sm font-semibold dark:text-typo-400 uppercase">
        {title}
      </h3>

      <li className="space-y-1">
        {children}
      </li>
    </ul>
  );
}

AsideSection.Item = AsideSectionItem;

export default AsideSection;