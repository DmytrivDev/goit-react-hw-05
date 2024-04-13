import css from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <div className="page">
      <div className="container">
          <div className={css.not__found}>
            <span>404</span>
            This page wasnt't found
          </div>
        </div>
    </div>
  );
}

export default NotFoundPage;
 