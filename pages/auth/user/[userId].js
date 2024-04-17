import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../contexts/auth_context';
import { getNameInitials, getUsersCountFormat } from '../../../helpers';
import { getSingleUser } from '../../../utils_firebase/users';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PiUserListFill } from "react-icons/pi";
import { LuActivity } from "react-icons/lu";
import { IoMdTrophy } from "react-icons/io";
import { RiCalendarScheduleFill } from "react-icons/ri";


const index = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();

  const redirectedUserId = router.query.userId;

  const tabsData = [
    {
      id: 1,
      title: 'About',
      value: 'about',
      icon: <PiUserListFill className='w-full h-full' />,
      content: <p>About Section</p>
    },
    {
      id: 2,
      title: 'Activity',
      value: 'activity',
      icon: <LuActivity className='w-full h-full' />,
      content: <p>Activity Section</p>
    },
    {
      id: 3,
      title: 'Rewards',
      value: 'rewards',
      icon: <IoMdTrophy className='w-full h-full' />,
      content: <p>Rewards Section</p>
    },
    {
      id: 4,
      title: 'My Schedule',
      value: 'schedule',
      icon: <RiCalendarScheduleFill className='w-full h-full' />,
      content: <p>My Schedule Section</p>
    }
  ];


  useEffect(() => {
    if (user.user.uid === redirectedUserId) {
      getSingleUser(user.user.uid).then((user) => {
        setCurrentUser(user);
      });
    } else {
      getSingleUser(redirectedUserId).then((user) => {
        setCurrentUser(user);
      });
    }
  }, [redirectedUserId]);



  console.log(currentUser);
  return (
    <section className='min-h-scree'>
      <div className='relative' >
        <div className="w-full h-60">
          <Image src="/img/Frame 83.png" alt="img" fill />
        </div>
        <div className='left-10 -bottom-1/4 absolute bg-background p-[6px] rounded-full ' >
          <Avatar className='h-40 w-40'>
            <AvatarImage className='' src={currentUser?.summry?.image} />
            <AvatarFallback className="text-xs font-semibold uppercase">{getNameInitials(currentUser?.summry?.displayName)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className='px-6 lg:px-10 flex flex-col gap-4' >

        <div className='mt-12 lg:mt-0 lg:ml-[10.5rem] py-2 flex justify-between items-center' >
          <h2 className='text-lg lg:text-xl font-bold line-clamp-1' >{currentUser?.summry.displayName}</h2>
          <div className="flex items-center gap-6 lg:gap-8 text-sm" >
            <p>{getUsersCountFormat(currentUser?.followers.length, 'Follower')}</p>
            <p>{getUsersCountFormat(currentUser?.following.length, 'Following')}</p>
          </div>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full h-16" >
            {
              tabsData.map(tabItem => (
                <TabsTrigger
                  key={tabItem.id}
                  value={tabItem.value}
                  className="flex gap-2 items-center"
                >
                  <span className='h-8 w-8'>{tabItem.icon}</span>
                  <span className=''>{tabItem.title}</span>
                </TabsTrigger>

              ))
            }
          </TabsList>

          {
            tabsData.map(tabItem => (
              <TabsContent key={tabItem.id} value={tabItem.value} className="">{tabItem.content}</TabsContent>
            ))
          }
        </Tabs>

      </div>

    </section >
  );
};

export default index;