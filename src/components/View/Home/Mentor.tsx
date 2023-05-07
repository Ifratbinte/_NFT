import MentorCard from "#/components/common/MentorCard";
import mentor from "#mocks/mentor.json";

const Mentor = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-10 text-left">{mentor.title}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {mentor.mentors.map((mentor: any) => {
          return <MentorCard key={mentor.id} avatar={mentor.avatar} name={mentor.name} designation={mentor.designation} />;
        })}
      </div>
    </div>
  );
};

export default Mentor;
