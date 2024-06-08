'use client'

import { usePathname } from 'next/navigation'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

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
import React from "react";
// import {useDisclosure} from "@nextui-org/react";

export const Navbar = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");
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
                    <div className="hover:cursor-pointer" onClick={onOpen}>

                        <TwitterIcon className="text-default-500" onClick={onOpen}/>
                    </div>

                    <div className="hover:cursor-pointer" onClick={onOpen}>

                        <DiscordIcon className="text-default-500" onClick={onOpen}/>
                    </div>
                    <div className="hover:cursor-pointer" onClick={onOpen}>
                        <GithubIcon className="text-default-500" onClick={onOpen}/>
                    </div>

                </NavbarItem>

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

                    <div className="hover:cursor-pointer" onClick={onOpen}>

                        <TwitterIcon className="text-default-500" onClick={onOpen}/>
                    </div>

                    <div className="hover:cursor-pointer" onClick={onOpen}>

                        <DiscordIcon className="text-default-500" onClick={onOpen}/>
                    </div>
                    <div className="hover:cursor-pointer" onClick={onOpen}>
                        <GithubIcon className="text-default-500" onClick={onOpen}/>
                    </div>

                    <div className="w-3"></div>
                    {/* <Link isExternal aria-label="Github" href={'#'}> */}
                    {/* </Link> */}
                    {/*<ThemeSwitch />*/}
                </NavbarMenuItem>
            </NavbarMenu>
            <Modal
                style={{direction:'rtl'}}
                className=''


                isOpen={isOpen}
                placement='center'
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 mx-2 ">Welcome</ModalHeader>
                            <ModalBody>
                                <p>
                                    هلا بك
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </ModalBody>
                            <ModalFooter className={'flex justify-start'}>
                                <Button color="primary" onPress={onClose}>
                                    جيد
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    اغلاق
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </NextUINavbar>

    );
};
