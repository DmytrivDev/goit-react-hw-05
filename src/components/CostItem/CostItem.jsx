import css from "./CostItem.module.scss";

function CostItem({ item }) {
  const { character, name, profile_path } = item;

  return (
    <li className={css.movie__item}>
      <div className={css.person__img}>
        {profile_path && (
          <img
            src={"https://image.tmdb.org/t/p/w500/" + profile_path}
            alt={name}
          />
        )}
      </div>
      <div className={css.person__name}>{name}</div>
      <div className={css.person__char}>Character - {character}</div>
    </li>
  );
}

export default CostItem;
