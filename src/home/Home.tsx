import Button, {type ButtonProps} from "./Button.tsx";
import {InlineIcon, SimpleIcon} from "./Icon.tsx";
import Link from "./Link.tsx";
import type {ReactNode} from "react";

interface PersonalInfo {
    name: string;
    photoUrl: string;
    position: string;
    company: string;
    companyUrl: string;
    highlights: ReactNode[];
}

const Home = () => {
    const bio: PersonalInfo = {
        name: "Mehmet Akif Tütüncü",
        photoUrl: "https://gravatar.com/avatar/7874b1a2b3af81d12643f8b6d9c828f5?s=480",
        position: "Senior Software Engineer",
        company: "bol",
        companyUrl: "https://bol.com",
        highlights: [
            <><InlineIcon icon="🎓"/>Izmir Institute of Technology</>,
            <><InlineIcon icon="❤️"/>Open source and functional programming advocate</>,
            <><InlineIcon icon="⌨️"/>Writes <SimpleIcon name="kotlin"/>Kotlin, <SimpleIcon name="scala"/>Scala, <SimpleIcon name="java"/>Java and <SimpleIcon name="go"/>Go</>
        ]
    }

    const buttons: ButtonProps[] = [
        {
            name: "E-Mail",
            icon: <SimpleIcon name="gmail" />,
            href: "mailto:mat@akif.dev"
        },
        {
            name: "GitHub",
            icon: <SimpleIcon name="github" />,
            href: "https://github.com/makiftutuncu"
        },
        {
            name: "GitLab",
            icon: <SimpleIcon name="gitlab" />,
            href: "https://gitlab.com/makiftutuncu"
        },
        {
            name: "LinkedIn",
            icon: <SimpleIcon name="linkedin" />,
            href: "https://linkedin.com/in/makiftutuncu"
        },
        {
            name: "X",
            icon: <SimpleIcon name="x" />,
            href: "https://x.com/makiftutuncu"
        },
        {
            name: "Instagram",
            icon: <SimpleIcon name="instagram" />,
            href: "https://instagram.com/makiftutuncu"
        },
        {
            name: "Blog",
            icon: <SimpleIcon name="wordpress" />,
            href: "https://makiftutuncu.wordpress.com"
        },
        {
            name: "Blog",
            icon: <SimpleIcon name="devdotto" />,
            href: "https://dev.to/makiftutuncu"
        },
        {
            name: "Blog",
            icon: <SimpleIcon name="blogger" />,
            href: "https://androidce.blogspot.com"
        },
        {
            name: "Telegram",
            icon: <SimpleIcon name="telegram" />,
            href: "https://t.me/makiftutuncu"
        },
        {
            name: "YouTube",
            icon: <SimpleIcon name="youtube" />,
            href: "https://www.youtube.com/c/mehmetakiftutuncu"
        },
        {
            name: "Patreon",
            icon: <SimpleIcon name="patreon" />,
            href: "https://www.patreon.com/bePatron?u=41213628"
        },
        {
            name: "Buy Me a Coffee",
            icon: <SimpleIcon name="buymeacoffee" />,
            href: "https://www.buymeacoffee.com/akif"
        },
    ]

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-8 mt-8">
                    {/*Photo Section*/}
                    <div className="col-span-3 md:col-span-4 flex justify-center align-items">
                        <img src={bio.photoUrl}
                             className="w-50 h-50 md:w-75 md:h-75 lg:w-120 lg:h-120 xl:w-120 xl:h-120 rounded-[50%]"
                             alt="Profile Photo"/>
                    </div>

                    {/*Text Content Section*/}
                    <div className="col-span-5 md:col-span-4 flex flex-col self-center md:ml-2 mt-8 lg:mt-0">
                        {/*Header*/}
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl mt-0 mb-2">
                                {bio.name}
                            </h1>
                        </div>

                        {/*Bio Section*/}
                        <div className="flex flex-col items-center lg:items-start text-md md:text-base mt-5 md:mt-6">
                            <div className="flex items-center my-0.5">
                                <InlineIcon icon="👨🏻‍💻"/>
                                {bio.position} at&nbsp;<Link href={bio.companyUrl} className="no-underline">{bio.company}</Link>
                            </div>
                            {bio.highlights.map((h, index) => (
                                <div key={`highlight-${index}`} className="flex items-center my-0.5">{h}</div>
                            ))}
                        </div>

                        {/*Links Section*/}
                        <div className="flex flex-wrap justify-center lg:justify-start mt-5 md:mt-6 md:px-0 px-8">
                            {buttons.map((b) => (<Button key={b.href} name={b.name} icon={b.icon} href={b.href}/>))}
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="flex justify-center items-center gap-2 mt-8">
                    <SimpleIcon name="githubsponsors"/>
                    <Link href="https://github.com/makiftutuncu/akif.dev">
                        Contribute on <span className="font-semibold">Github</span>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Home
