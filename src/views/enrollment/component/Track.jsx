import stem from "../../../assets/images/stem22.png";
import dataSci from "../../../assets/images/data.png";
import techTalent from "../../../assets/images/techtalent.png";
import useSetField from "../../../custom-hooks/UseSetField";
import { useEffect, useMemo } from "react";

function Track({ state, setState }) {
  const data = [
    {
      img: techTalent,
      title: "TECH-TALENT",
    },
    {
      img: stem,
      title: "STEM",
    },
    {
      img: dataSci,
      title: "DATA SCIENCE",
    },
  ];
  const { setRequest } = useSetField(setState);
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      programme: getProgrammeName(state.programmeId),
    }));
  }, [state.programmeId]);

  // Define a memoized function to calculate the programme name
  const getProgrammeName = useMemo(() => {
    return (programmeId) => {
      if (programmeId === 1) {
        return "Tech Talent";
      } else if (programmeId === 2) {
        return "Stem";
      } else {
        return "Data science";
      }
    };
  }, []);

  return (
    <div className="md:w-[40%] mx-auto grid gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => setRequest("programmeId", index + 1)}
          style={{ background: state.programmeId === index + 1 && "#41c0b7" }}
          className="flex gap-5 outline outline-1 outline-[#f5f5f5] cursor-pointer hover:shadow-md transition-all hover:scale-95 p-5 rounded-md items-center"
        >
          <img
            src={item.img}
            alt=""
            className="w-[9rem!important]  h-20 object-cover"
          />
          <p className="font-bold text-2xl">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Track;
