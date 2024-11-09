import { useId } from "react"
import s from "./SearchBox.module.css"

const SearchBox = ({value, onFilter}) => {
    const searchId = useId();
    return (
        <div className={s.wrapper}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input type="text" id={searchId} name="searchValue" value={value} onChange={(e) => onFilter(e.target.value)}/>
        </div>
    )
}

export default SearchBox