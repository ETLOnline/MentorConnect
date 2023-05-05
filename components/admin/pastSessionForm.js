import { Fragment, useState, useRef, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { getAllSkillsOnly } from "../../utils_firebase/skills";
import { getUsers } from "../../utils_firebase/users";
import Spinner from "../spinner";
import { toast } from "react-toastify";
import SkillTag from "../tiles/skillTag";
import { createNewPastSession } from "../../utils_firebase/sessions";

const PastSessionForm = (users) => {
  const { user } = useContext(AuthContext);
  const [skills, setskills] = useState([]);
  const [intrest, setintrest] = useState([]);
  // const [resetValue, setResetValue] = useState(false);

  const inputTitle = useRef("");
  const inputDescription = useRef("");
  const inputUrl = useRef("");
  const inputInstructor = useRef("");

  const handleSelectedChange = (selecteditem) => {
    // console.log(fillterSkills(seleteditem));
    setintrest(fillterSkills(selecteditem));
  };
  const fillterSkills = (data) => {
    return data.map((ele) => ele.value);
  };
  useEffect(() => {
    getAllSkillsOnly().then((data) => {
      setskills(data);
      // console.log(data);
    });
  }, []);

  // const resetValue = () => {
  //   return false;
  // };

  // console.log(users, "admin");
  let formData;
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredUrl = inputUrl.current.value;
    const enteredInstructor = inputInstructor.current.value;
    // const enteredInstructor = event.target.instructor.value;

    // console.log(enteredInstructor);
    const instructor = JSON.parse(enteredInstructor);
    const instructorId = instructor.instructorId;
    formData = {
      title: enteredTitle,
      description: enteredDescription,
      videoUrl: enteredUrl,
      instructor: instructor,
      tags: intrest,
      // instructor: enteredInstructor,
    };
    createNewPastSession(formData, instructorId);
    // console.log(formData, instructorId);
    inputTitle.current.value = "";
    inputDescription.current.value = "";
    inputUrl.current.value = "";
    inputInstructor.current.value = "";
    // setResetValue(true);

    toast.success("The past session created successfully");
    // console.log(JSON.parse(formData.instructor));
  };

  return (
    <Fragment>
      <div className="min-h-[700px] mt-5 bg-slate-50">
        <div className="w-11/12 ml-12 m-5">
          <div className="grid w-[60%] ">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Create Past Session
                </h3>
              </div>
              {/* form */}
              <div className="mt-5 md:grid md:col-span-1 md:mt-0">
                <form action="#" method="POST" onSubmit={submitHandler}>
                  <div className="shadow sm:overflow-hidden sm:rounded-md mt-5">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="title"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the Title"
                              ref={inputTitle}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="desc"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <textarea
                              name="desc"
                              id="desc"
                              rows={5}
                              className="block w-full pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the url"
                              ref={inputDescription}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="tags"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tags
                          </label>
                          {skills.length > 0 ? (
                            <SkillTag
                              handleSelectedChange={handleSelectedChange}
                              skills={skills}
                              // reset={resetValue}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="url"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Video Url
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="url"
                              id="url"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the url"
                              ref={inputUrl}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="instructor"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Instructor
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            {/* <input
                              type="text"
                              name="instructor"
                              id="instructor"
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Please entered the Instructor Name"
                              ref={inputInstructor}
                            /> */}
                            <select
                              id="instructor"
                              name="instructor"
                              ref={inputInstructor}
                              className="block w-full h-9 pl-[4px] flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option></option>
                              {users.users.map((data) => (
                                <option
                                  value={JSON.stringify({
                                    image: data.summry?.image,
                                    displayName: data.summry.displayName,
                                    instructorId: data.uid,
                                  })}
                                  key={Math.random()}
                                >
                                  {data.summry.displayName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Here is photo and coverphoto Start */}

                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Create Past Session
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PastSessionForm;
