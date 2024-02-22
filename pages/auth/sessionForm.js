import { Fragment, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { storage } from "../../utils_firebase/config";
import { createSession } from "../../utils_firebase/sessions";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth_context";
import Image from "next/image";
import { getAllSkillsOnly } from "../../utils_firebase/skills";
import SkillTag from "../../components/tiles/skillTag";
import firebase from "firebase";
import { getAllSessionsCalendar } from "../../utils_firebase/sessions";
import ErrorModal from "../../components/tiles/errorModal";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState();
  const [skills, setskills] = useState([]);
  const [intrest, setintrest] = useState([]);
  const [sessions, setSessions] = useState([]);

  const router = useRouter();

  const [file, setFile] = useState(null);
  const [fileSelect, setFileSelect] = useState(false);
  const [Url, setURL] = useState("");
  const inputStartTime = useRef();
  const inputEndTime = useRef();
  const inputTags = useRef();
  const inputPoints = useRef();
  const inputTitle = useRef();
  function handleChange(e) {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    setFile(file);
    setFileSelect(true);
  }
  async function handleUpload() {
    if (file) {
      const path = `/images/${file.name}`;
      const ref = storage.ref(path);
      await ref.put(file);
      const url = await ref.getDownloadURL();
      setURL(url);
      // console.log(url, "sasasa", Url);
    }
  }

  const handleSelectedChange = (seleteditem) => {
    // console.log(fillterSkills(seleteditem));
    setintrest(fillterSkills(seleteditem));
  };
  const fillterSkills = (data) => {
    return data.map((ele) => ele.value);
  };
  useEffect(() => {
    getAllSessionsCalendar().then((session) => {
      setSessions(session);
    });
    getAllSkillsOnly().then((data) => {
      setskills(data);
      // console.log(data);
    });
  }, []);
  let formData;
  function submitHandler(event) {
    event.preventDefault();
    const enteredStartTime = inputStartTime.current.value;
    const enteredEndTime = inputEndTime.current.value;
    // const enteredTags = inputTags.current.value;
    const enteredPoints = inputPoints.current.value;
    const enteredTiltle = inputTitle.current.value;

    // Spliting by comma...
    // const Tags = enteredTags.split(",");
    formData = {
      Title: enteredTiltle,
      StartTime: enteredStartTime,
      EndTime: enteredEndTime,
      Tags: intrest,
      Points: enteredPoints,
      Image: Url,
    };
    // console.log(formData);
    const start = new firebase.firestore.Timestamp.fromDate(
      new Date(formData.StartTime)
    );
    const end = new firebase.firestore.Timestamp.fromDate(
      new Date(formData.EndTime)
    );
    let match;
    sessions.forEach((session) => {
      if (
        (start >= session.startTime && start <= session.endTime) ||
        (end >= session.startTime && end <= session.endTime)
      ) {
        match = true;
      }
    });
    if (match == true) {
      setError({
        title: "Invalid Time",
        message: "This time slot is already reserved by another session",
      });
    } else {
      createSession(formData, user?.user.uid, router);
    }
  }
  const errorHandler = () => {
    setError(null);
  };

  // console.log(user.user.summry.displayName);

  return (
    <Fragment>
      <div className="px-6 md:px-10 py-6 md:py-10 font-montserrat">
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}

        <div className="grid md:grid-cols-3 gap-6 bg-white">
          <div className="md:col-span-1">
            {/* Look like Intro Card */}
            <div className="w-full rounded-md shadow h-[500px]">
              <div className="relative h-[200px]  mx-auto w-[200px]">
                <Image
                  src={user?.user?.summry.image}
                  fill
                  className="rounded-full my-[20px]"
                  alt="img"
                />
              </div>
              <div className="w-[84.61%] mx-auto flex justify-between my-[32px]">
                <p className="text-[24px] leading-[28px] font-semibold">
                  {user?.user?.summry?.displayName}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex mx-auto w-[69.5%] justify-between">
                  <p className="text-[32px] font-semibold leading-[38px] text-[#1C2D56] text-center">
                    {user?.user?.followers?.length}
                  </p>
                  <p className="text-[32px] leading-[38px] font-semibold text-[#1C2D56] text-center">
                    {user?.user?.points?.coachingPoint +
                      user?.user?.points?.learningPoint}
                  </p>
                </div>

                <div className="flex w-[70%] ml-[45px] justify-between">
                  <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                    Followers
                  </p>
                  <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
                    Points
                  </p>
                </div>
              </div>
              <div className="w-[48.07%] flex mx-auto justify-between mb-[32px] mt-[40px]">
                <Image
                  src="/img/LinkedIn.png"
                  alt="img"
                  height={32}
                  width={32}
                  className="object-cover"
                />
                <Image
                  src="/img/Discord.png"
                  alt="img"
                  height={32}
                  width={32}
                  className="object-cover"
                />
                <Image
                  src="/img/Github.png"
                  alt="img"
                  height={32}
                  width={32}
                  className="object-cover"
                />
                <Image
                  src="/img/Twitter (1).png"
                  alt="img"
                  height={32}
                  width={32}
                  className="object-cover"
                />
              </div>
            </div>
            {/* --- END Look like Intro Card --- */}
          </div>

          <div className="md:col-span-2 rounded-md shadow">
            <div className="py-8">
              <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-primary text-center">Create Session</h2>
              <p className="text-center text-primary text-base">Fill out the form to create a session</p>
            </div>

            <form action="#" method="POST" onSubmit={submitHandler}>
              <div className="space-y-6 px-4 sm:p-6">

                {/* title input*/}
                <div class="relative">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    ref={inputTitle}
                    class="peer w-full h-full bg-transparent text-primary font-montserrat font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder=" " />
                  <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    Title
                  </label>
                </div>

                {/* startTime Input */}
                <div class="relative">
                  <input
                    type="datetime-local"
                    name="startTime"
                    id="startTime"
                    ref={inputStartTime}
                    class="peer w-full h-full bg-transparent text-primary font-montserrat font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder=" " />
                  <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    StartTime
                  </label>
                </div>

                {/* endTime Input */}
                <div class="relative">
                  <input
                    type="datetime-local"
                    name="endTime"
                    id="endTime"
                    ref={inputEndTime}
                    class="peer w-full h-full bg-transparent text-primary font-montserrat font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder=" " />
                  <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    EndTime
                  </label>
                </div>

                {/* Pionts Input */}
                <div class="relative">
                  <select
                    type="datetime-local"
                    name="points"
                    id="points"
                    ref={inputPoints}
                    class="peer w-full h-full bg-transparent text-primary font-montserrat font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
                    placeholder=" " >
                    <option value="10">10 Points</option>
                    <option value="20">20 Points</option>
                    <option value="30">30 Points</option>
                    <option value="40">40 Points</option>
                    <option value="50">50 Points</option>
                    <option value="60">60 Points</option>
                    <option value="70">70 Points</option>
                    <option value="80">80 Points</option>
                    <option value="90">90 Points</option>
                    <option value="100">100 Points</option>
                  </select>
                  <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
                    Points
                  </label>
                </div>

                <div className="w-full">
                  {skills.length > 0 ? (
                    <SkillTag
                      handleSelectedChange={handleSelectedChange}
                      skills={skills}
                    />
                  ) : (
                    ""
                  )}
                </div>

                {/* Here is photo and coverphoto Start */}
                <div className="flex flex-col gap-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload photo
                  </label>
                  <div className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    {!Url ? (
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            {fileSelect ? (
                              <span onClick={handleUpload}>
                                Click to Upload file
                              </span>
                            ) : (
                              <>
                                <span>Select a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleChange}
                                />
                              </>
                            )}
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    ) : (
                      <Image src={Url} alt="" height={48} width={48} />
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  {Url ? (
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Create Session
                    </button>
                  ) : (
                    <p>Please Upload file First</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div >
    </Fragment >
  );
}
