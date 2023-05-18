import SliderOptions from "#/helpers/slider-init-value";
import { PersonInterface } from "#/interface";
import ReviewCard from "#components/common/Review";
import reviewItem from "#mocks/review.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Review = () => {
  const slide = {
    ...SliderOptions,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2
  };
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-10 text-left">{reviewItem.title}</h1>
      <div className=" gap-10">
        <Slider {...slide}>
          {reviewItem.reviews.map((review: PersonInterface) => {
            return <ReviewCard key={review.id} avatar={review.avatar} name={review.name} designation={review.designation} review={review.content} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
