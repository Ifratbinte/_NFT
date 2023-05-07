import { ReviewInterface } from "#/interface";
import ReviewCard from "#components/common/Review";
import reviewItem from "#mocks/review.json";

const Review = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-10 text-left">{reviewItem.title}</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {reviewItem.reviews.map((review: ReviewInterface) => {
          return <ReviewCard key={review.id} avatar={review.avatar} name={review.name} designation={review.designation} review={review.content} />;
        })}
      </div>
    </div>
  );
};

export default Review;
