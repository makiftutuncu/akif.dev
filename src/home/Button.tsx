import type {FC, JSX} from "react";
import Link from "./Link.tsx";

export interface ButtonProps {
    name: string;
    href: string;
    icon: JSX.Element;
}

const Button: FC<ButtonProps> = ({name, icon, href}): JSX.Element => (
    <Link href={href} className="flex items-center border border-black p-1 m-1">
        {icon}
        <span className="text-xs ml-1">{name}</span>
    </Link>
)

export default Button
