import css from "./ReviewsItem.module.scss";

function ReviewsItem({ item }) {
  const { author, content, author_details } = item;

  return (
    <li className={css.review__item}>
      <div className={css.review__top}>
        <div className={css.review__avatar}>
          {author_details.avatar_path && (<img src={"https://image.tmdb.org/t/p/w500/" + author_details.avatar_path} alt={author} />)}
        </div>
        <div className={css.review__name}>{author}</div>
      </div>
      <p className={css.reviews__text}>
        {content}
      </p>
    </li>
  ); 
}

export default ReviewsItem;
