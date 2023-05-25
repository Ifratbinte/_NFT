import MentorCard from "#/components/common/MentorCard";
import SliderOptions from "#/helpers/slider-init-value";
import mentor from "#mocks/mentor.json";
import style from "#styles/home.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

const Mentor = () => {
  const slide = { ...SliderOptions, nextArrow: <FiChevronRight />, prevArrow: <FiChevronLeft /> };

  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-10 text-left">{mentor.title}</h1>
      <div className="gap-10">
        <Slider {...slide} className={`${style.slick_slide}`}>
          {mentor.mentors.map((mentor: any) => {
            return <MentorCard key={mentor.id} avatar={mentor.avatar} name={mentor.name} designation={mentor.designation} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Mentor;
