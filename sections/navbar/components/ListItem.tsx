import { NavigationMenuLink } from "@/shared/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
  title: string;
  description?: string
  reference: string
  className: string
}

const ListItem = ({ title, description, reference, className, ...props }: Props) => {
  return (
    <li className={className} {...props}>
      <NavigationMenuLink asChild>
        <Link href={reference}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-extrabold text-white">{title}</div>
            <div className="text-muted-foreground line-clamp-2 text-gray-300">{description}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )

}

export default ListItem;