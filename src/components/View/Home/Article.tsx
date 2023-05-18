import ArticleCard from "#/components/common/Card";
import articleItem from "#mocks/article.json";

const article = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-14 text-left">{articleItem.article.title}</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {articleItem?.article?.card?.map((article: any) => (
          <ArticleCard
            id={article.id}
            thumb={article.thumb}
            title={article.title}
            desc={article.desc}
            btn={article.btn}
            title_style="text-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default article;
