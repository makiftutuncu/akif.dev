import type {JSX} from "react";

export interface IconProps {
    name: string;
    icon: string;
    inlineIcon: boolean;
}

const Icon = ({name, icon, inlineIcon}: IconProps): JSX.Element => {
    return inlineIcon
        ? (<span className="mx-1">{icon}</span>)
        : (<img src={icon} className="w-6 h-6 mx-1" alt={name} />)
}

export const InlineIcon = ({icon}: { icon: string }): JSX.Element =>
    <Icon name={icon} icon={icon} inlineIcon />

export const SimpleIcon = ({name}: { name: string }): JSX.Element =>
    <Icon name={name} icon={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`} inlineIcon={false} />
