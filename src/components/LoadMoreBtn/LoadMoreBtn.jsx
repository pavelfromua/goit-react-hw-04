import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({handleChangePage}) {
    return (
        <div className={s.loadMore}>
            <button className={s.loadMoreButton} onClick={handleChangePage} type="button">Load more</button>
        </div>
    );
}