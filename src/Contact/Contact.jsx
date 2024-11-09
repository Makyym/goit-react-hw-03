import s from "./Contact.module.css"

const Contact = ({data, onDelete, contactId}) => {
    const { name, number } = data;
    return (
        <div className={s.item}>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => onDelete(contactId)}>Delete</button>
        </div>
    )
}

export default Contact