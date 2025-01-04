import s from "./ErrorMessage.module.css";

export default function ErrorMessage() {
    return (
        <p className={s.error}>Oops... Something wrong</p>
    );
}