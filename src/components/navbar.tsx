'use client'

import { usePathname } from 'next/navigation'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
// import Logo from '/logo.pejg'
import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from "@/components/icons";
import { useRouter } from "next/navigation";

export const Navbar = () => {


    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    );

    return (
        <NextUINavbar

            isBordered
            classNames={{

                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
        >
            <NavbarBrand className='h-full' >
                <img src="/logo.jpeg" alt=""    className='h-full' />
            </NavbarBrand>


            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                {siteConfig.navItems.map((item) => (
                    <NavbarItem className='' key={item.href}

                                isActive={usePathname()===item.href}
                    >

                        <NextLink
                            className={`text-${usePathname()===item.href?"primary":"foreground"} `}
                            href={item.href}
                        >
                            {item.label}
                        </NextLink>
                    </NavbarItem>
                ))}

            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                    {/*<ThemeSwitch />*/}
                </NavbarItem>
                {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}

            </NavbarContent>


            <NavbarContent className="sm:hidden  pl-4" justify="end">

                <NavbarMenuToggle />
            </NavbarContent>


            <NavbarMenu>
                {searchInput}
                <div className=" mt-2 flex flex-col gap-2 ">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className='pt-1 border-t px-4'>

                            <NextLink
                                className={`text-${usePathname()===item.href?"primary":"foreground"} `}
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>

                        </NavbarMenuItem>
                    ))}
                </div>
                <NavbarMenuItem className='flex justify-center gap-2 pt-4 border-t'>

                    <GithubIcon className="text-default-500" />
                    <TwitterIcon className="text-default-500" />
                    <DiscordIcon className="text-default-500" />
                    <div className="w-3"></div>
                    {/* <Link isExternal aria-label="Github" href={'#'}> */}
                    {/* </Link> */}
                    {/*<ThemeSwitch />*/}
                </NavbarMenuItem>
            </NavbarMenu>
        </NextUINavbar>
    );
};
