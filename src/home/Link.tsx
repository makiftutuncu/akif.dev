import type {JSX} from "react";

export interface LinkProps {
    href: string;
    className?: string;
    children?: string | JSX.Element | (string | JSX.Element)[];
}

const Link = ({href, className, children}: LinkProps): JSX.Element => (
    <a href={href} className={className} target="_blank">
        {children}
    </a>
)

export default Link
