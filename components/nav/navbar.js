import Link from "next/link";
import { useSignout } from "../../hooks/useSignout";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth_context";
import { useContext, useState } from "react";
import Image from "next/image";
import { GrUserSettings } from "react-icons/gr";
import { ExitIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import ThemeModeToggle from "../ui/custom/theme-mode-toggle.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger, } from '../ui/hover-card';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { getNameInitials } from "../../helpers";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { signout, error, isPanding } = useSignout();
  const router = useRouter();

  let admin = false;

  if (user.user?.role === "superAdmin" || user.user?.role === "admin") {
    admin = true;
  }

  const contextMenuData = [
    {
      id: 1,
      path: `/auth/${user.user.uid}`,
      title: 'Profile'
    },
    {
      id: 2,
      path: `/updatePassword`,
      title: 'Change Password'
    },
    {
      id: 3,
      path: `/admin`,
      title: 'Admin Panel'
    }
  ].filter(item => ((!admin && item.path !== "/admin") || (admin && item)));

  const navLinks = [
    {
      id: 1,
      path: `/home`,
      title: "Home",
      criteria: 'auth'
    },
    {
      id: 2,
      path: `/auth/sessionForm`,
      title: "Create Session",
      criteria: 'auth'
    },
    {
      id: 3,
      path: `/calender`,
      title: "Calender",
      criteria: 'auth'
    },
    {
      id: 4,
      path: `/`,
      title: "Coming Soon",
      criteria: 'auth'
    },
    {
      id: 5,
      path: `/`,
      title: "About us",
      criteria: 'un-auth'
    },
    {
      id: 6,
      path: `/`,
      title: "Pricing",
      criteria: 'un-auth'
    },
    {
      id: 7,
      path: `/`,
      title: "Become a member",
      criteria: 'un-auth'
    },
    {
      id: 8,
      path: `/`,
      title: "Contact",
      criteria: 'un-auth'
    },
    {
      id: 9,
      path: `/`,
      title: "Find a Mentor",
      criteria: 'all'
    },

  ].filter(item => (
    (user.user && (item.criteria === 'auth' || item.criteria === 'all'))
    ||
    (!user.user && (item.criteria === 'un-auth' || item.criteria === 'all'))
  ));


  return (
    <header className="sticky bg-background top-0 shadow-sm z-10 text-primary" >
      <div className="w-full">
        <div className="lg:mx-[60px] py-1 flex items-center justify-between">
          <Link href="/" className="min-w-[100px]">
            <div className="relative h-16 flex">
              <Image
                src="/img/logo.png"
                alt="logo image"
                width={100}
                height={100}
              />
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden mr-6 flex items-center gap-4"
          >
            <ThemeModeToggle /> <HamburgerMenuIcon className="h-8 w-8 text-primary" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:flex-row gap-4">
            {
              navLinks.map(item => {
                return (
                  <Link className="nav-item" key={item.id} href={item.path}>{item.title}</Link>
                );
              })
            }

          </div>

          <div className="hidden md:flex gap-4">

            <ThemeModeToggle />

            {!user.user &&
              <div className="flex items-center gap-6 ">
                <Button
                  onClick={() => { router.push('/auth'); }}
                  variant="outline"
                  className="text-primary"
                >
                  Sign Up
                </Button>

                <Button
                  onClick={() => { router.push('/loginPage'); }}
                  variant="outline"
                  className="text-background bg-primary"
                >
                  Sign In
                </Button>
              </div>
            }

            {user.user && (
              <div className="flex justify-center gap-[10px] items-center">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage className='' src={user.user.summry?.image} />
                      <AvatarFallback className="text-xs font-semibold uppercase">{getNameInitials(user.user.summry?.displayName)}</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60 mr-4">
                    <div className="flex flex-col gap-2" >
                      {
                        contextMenuData.map(item => (
                          <Link
                            key={item.id}
                            href={item.path}
                            className="text-primary hover:underline"
                          >
                            {item.title}
                          </Link>
                        ))
                      }

                      <div className="flex justify-end" >
                        <Button
                          onClick={() => { signout(router); router.push('/loginPage'); }}
                          variant="outline"
                          className="text-primary"
                        >
                          Log Out <ExitIcon className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`fixed z-50 bg-background w-full min-h-screen top-0 flex flex-col justify-between p-6 ${open ? "left-0 transition-all ease-in" : "-left-full transition-all ease-out"}`}>
          <div>
            <div className="flex justify-between items-center mb-6" >
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  className="h-16"
                  src="/img/logo.png"
                  alt="logo image"
                  width={100}
                  height={100}
                />
              </Link>

              <Cross1Icon className="w-8 h-8 text-primary" onClick={() => setOpen(false)} />
            </div>

            <div className="flex flex-col gap-4 px-4" >
              <div className="flex flex-col gap-4">
                {
                  navLinks.map(item => {
                    return (
                      <Link className="nav-item" key={item.id} href={item.path} onClick={() => setOpen(false)}>{item.title}</Link>
                    );
                  })
                }
              </div>
            </div>
          </div>

          <div>
            {!user.user && (
              <div className="flex justify-center items-center gap-9">
                <Button
                  onClick={() => { router.push('/auth'); setOpen(false); }}
                  variant="outline"
                  className="text-primary"
                >
                  Sign Up
                </Button>

                <Button
                  onClick={() => { router.push('/loginPage'); setOpen(false); }}
                  variant="outline"
                  className="text-background bg-primary"
                >
                  Sign In
                </Button>
              </div>
            )}

            {user.user && (
              <div className="flex gap-[10px] items-center">
                <div className="relative group">
                  <Avatar className='h-10 w-10'>
                    <AvatarImage className='' src={user.user.summry?.image} />
                    <AvatarFallback className="text-xs uppercase">{getNameInitials(user.user.summry?.displayName)}</AvatarFallback>
                  </Avatar>

                  <Card className="p-4 hidden group-hover:block group-hover:absolute group-hover:-top-36 group-hover:left-10">
                    <div className="flex w-[175px] flex-col gap-3">
                      {
                        contextMenuData.map(item => (
                          <Link
                            onClick={() => { setOpen(false); }}
                            key={item.id}
                            href={item.path}
                            className="text-primary hover:underline"
                          >
                            {item.title}
                          </Link>
                        ))
                      }

                      <div className="flex justify-end" >
                        <Button
                          onClick={() => { signout(router); router.push('/loginPage'); }}
                          variant="outline"
                          className="text-primary"
                        >
                          Log Out <ExitIcon className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
