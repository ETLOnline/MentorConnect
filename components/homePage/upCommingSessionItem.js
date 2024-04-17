import Image from "next/image";

import { useRouter } from "next/navigation";
import dayjs from 'dayjs';

import { WidthIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials, getUsersCountFormat } from "../../helpers";

const SessionItem = ({ session }) => {
  const router = useRouter();

  const { instructor } = session;

  return (
    <Card className="hover:scale-105 hover:shadow-lg transition-all duration-300 overflow-hidden" >
      <CardHeader className='p-0 relative' >
        <Image
          src={session.image || '/img/mentor-fallback.jpg'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-52 object-cover cursor-pointer"
          onClick={() => { router.push(`/session/${session.id}`); }}
        />
      </CardHeader>
      <CardContent className="p-3 grid gap-2">
        <div className="grid grid-cols-10 gap-2" >
          <div className="col-span-2 flex flex-col justify-center items-center" >
            <Avatar className='h-9 w-9'>
              <AvatarImage className='' src={instructor.summry.image} />
              <AvatarFallback className="text-xs font-semibold uppercase">{getNameInitials(instructor.summry.displayName)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="col-span-8" >
            <div>
              <div className={`h-8 ${session.title.length > 24 ? '' : 'flex items-end'}`} >
                <h2 className="text-text text-xs font-semibold line-clamp-2 leading-tight capitalize">
                  {session.title} {' '}
                </h2>
              </div>
              <p className="text-xs text-text/75 mt-1 leading-tight capitalize">
                {instructor.summry.displayName}
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px]" >
              <p>{getUsersCountFormat(instructor.followers.length, 'Follower')}</p>
              <p>{getUsersCountFormat(session.students.length, 'Attendee')}</p>
            </div>
          </div>
        </div>
        <div className="border border-border w-full" ></div>

        <div className="flex justify-between items-center text-primary text-[9px]" >
          <p className="flex items-center gap-2">
            <span>{dayjs((session.startTime.seconds + session.startTime.nanoseconds) * 1000).format('hh:mm A')}</span>
            <span>{dayjs((session.startTime.seconds + session.startTime.nanoseconds) * 1000).format('DD MMM YY')}</span>
          </p>
          <WidthIcon />
          <p className="flex items-center gap-2">
            <span>{dayjs((session.endTime.seconds + session.endTime.nanoseconds) * 1000).format('hh:mm A')}</span>
            <span>{dayjs((session.endTime.seconds + session.endTime.nanoseconds) * 1000).format('DD MMM YY')}</span>
          </p>
        </div>
      </CardContent>
    </Card>


  );
};

export default SessionItem;


// const temp = <Link
//   href={`/session/${id}`}
//   className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%] "
// >
//   <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px]">
//     <div
//       className=" h-[206px] w-full bg-[length:100%_206px]  bg-no-repeat rounded-xl "
//       style={{
//         backgroundImage: "url(" + session?.image + ")",
//       }}
//     >
//     </div>

//     <div className="flex flex-col  mx-3">
//       <div className="flex flex-row mb-3 justify-between">
//         <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
//           {session?.students?.length} +Attendees
//         </p>
//         <p className="text-[16px] font-medium leading-[20px] font-['Raleway'] text-[#8B8B8B]">
//           {new Date(
//             session?.startTime?.seconds * 1000
//           ).toLocaleDateString()}
//         </p>
//       </div>
//       <div className=" mb-4 max-h-[30px] ">
//         <p className="text-[20px] hover:text-clip overflow-hidden ... truncate xs:text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
//           {session?.title}
//         </p>
//       </div>

//       <div className="flex  gap-2 mb-4 h-[32px]">
//         <Image
//           src={session?.instructor?.summry?.image}
//           alt=""
//           height={32}
//           width={32}
//           className="rounded-[50px] object-cover"
//         />
//         <p className="text-[16px] leading-[19px] font-medium text-[#8B8B8B] pt-2">
//           {session?.instructor?.summry?.displayName}
//         </p>
//       </div>
//     </div>
//   </div>
// </Link >;