import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
  title: string;
  description?: string
  reference: string
}

const ListItem = ({ title, description, reference, ...props }: Props) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={reference}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{description}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )

}

export default ListItem;