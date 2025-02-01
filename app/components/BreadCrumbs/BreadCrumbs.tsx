import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface BreadCrumbsProps {}

const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").join(" > ");
  return (
    <div className="flex items-baseline">
      <Link href="/" prefetch={false}>
        Home
      </Link>
      {pathNames}
    </div>
  );
};

export default BreadCrumbs;
