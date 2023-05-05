import React, { useState, useEffect, useContext } from "react";
import VideoCardItem from "../../components/homePage/videoCardItem";
import { getAllPastSessionsWithLink } from "../../utils_firebase/sessions";
import SkillCard from "../../components/homePage/skillCard";
import { getAllSkillsWithImage } from "../../utils_firebase/skills";
import { getPastSessionByUserSkills } from "../../utils_firebase/sessions";
import { AuthContext } from "../../contexts/auth_context";

const PastSessions = () => {
  const { user } = useContext(AuthContext);
  const [pastSessions, setPastSessions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  useEffect(() => {
    getAllPastSessionsWithLink().then((data) => {
      setPastSessions(data);
      // console.log(data, "past sessions");
    });
    getAllSkillsWithImage().then((data) => {
      setSkills(data);
    });
  }, []);

  if (!user.user) {
    return (
      <div className=" text-center h-[30vh] items-center text-5xl mb-20 mt-20">
        <p>First Login Please</p>
        <p>Loading.... </p>
      </div>
    );
  }
  const onClickSkills = (ele, exist) => {
    let arr = [...selectedSkill];
    // if (arr.find((data) => data == ele) == ele) {
    // }

    if (exist) {
      setSelectedSkill((prev) => {
        arr.push(ele);
        return [ele, ...prev];
      });
      getPastSessionByUserSkills(arr).then((data) => {
        setPastSessions(data);
      });
    } else {
      arr = arr.filter((data) => ele != data);
      setSelectedSkill(arr);
      getPastSessionByUserSkills(arr).then((data) => {
        setPastSessions(data);
      });
    }
    // console.log(ele, selectedSkill, exist, arr);
  };

  return (
    <div className="mx-[32px] mt-[32px] min-h-[70vh]">
      <SkillCard
        onClickSkills={onClickSkills}
        skills={skills}
        page={"pastSession"}
      />
      <div className="flex justify-between ml-3 mb-[32px] ">
        <h2 className="text-3xl font-bold">Past Sessions</h2>
      </div>

      <div className=" w-full">
        <div className="flex flex-wrap gap-[2.42%] justify-center ">
          {pastSessions == undefined || pastSessions.length == 0 ? (
            <h2 className="flex justify-center text-[50px]">
              No Past Session On this Skill
            </h2>
          ) : (
            pastSessions.map((pastSession) => (
              <VideoCardItem
                key={pastSession.id}
                link={pastSession.videoUrl}
                title={pastSession.title}
                instructorName={pastSession.instructor.summry.displayName}
                instructorImage={pastSession.instructor.summry.image}
              />
            ))
          )}
          {/* {pastSessions.length > 0 &&
            pastSessions.map((pastSession) => (
              <VideoCardItem
                link={pastSession.videoUrl}
                title={pastSession.title}
                instructorName={pastSession.instructor.summry.displayName}
                instructorImage={pastSession.instructor.summry.image}
              />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default PastSessions;
