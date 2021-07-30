import { useEffect, useState } from "react"
import "../styles/LocalStorage.css"

const LocalStorage = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    useEffect(() => {
        const data = localStorage.getItem('items');
        if(data) {
            setItems(JSON.parse(data));
        } 
    },[])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    })

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function addItem(e) {
        e.preventDefault();
        const currentItem = {
            plate: inputValue,
            done: false,
        }
       setItems(prevItems => [...prevItems, currentItem]);
    }

    function toggleDone(e) {
        if (!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        setItems(items => items);
        localStorage.setItem('items', JSON.stringify(items));
    }


    return (
        <div className="localContainer">
            <div className="wrapper">
                <h2>LOCAL ITEMS</h2>
                <p></p>
                <ul className="plates">
                    <li>*Saved Local Items*</li>
                    {items.map((item, index) => {
                        const isChecked = item.done ? 'checked' : '';
                        return(
                            <li key={index}>
                                <input onChange={(e) => toggleDone(e)}  className="itemCheckBox" type="checkbox" data-index={index} id={`item:` + index} value={item.done} defaultChecked={isChecked} ></input>
                                <label htmlFor={`item` + index}>{item.plate}</label>
                            </li>
                        )
                    })}
                </ul>
                <form className="add-items">
                    <input type="text" name="item" value={inputValue} onChange={(e) => handleChange(e)} placeholder="Item Name" required></input>
                    <input type="submit" value="+ Add Item" onClick={(e) => addItem(e)}></input>
                </form>
            </div>
        </div>
    )
}

export default LocalStorage;