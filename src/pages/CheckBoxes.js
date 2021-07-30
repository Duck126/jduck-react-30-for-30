import { useEffect, useState } from 'react';
import '../styles/CheckBoxes.css';

const CheckBoxes = () => {

    const allboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    const [boxes, checkTheBoxes] = useState(() => [
        {
            id: "0",
            checked: false,
            text: "This is an inbox layout",
        },
        {
            id: "1",
            checked: false,
            text: "Check on item",
        },
        {
            id: "2",
            checked: false,
            text: "Hold down your Shift key",
        },
        {
            id: "3",
            checked: false,
            text: "Check a lower Item",
        },
        {
            id: "4",
            checked: false,
            text: "Everthing in between should also be set to checked",
        },
        {
            id: "5",
            checked: false,
            text: "Try to do it without any libraries",
        },
        {
            id: "6",
            checked: false,
            text: "Just React",
        },
        {
            id: "7",
            checked: false,
            text: "Good Luck!",
        },
        {
            id: "8",
            checked: false,
            text: "Don't forget to Tweet about it!",
        },
    ])


    useEffect(() => {
        allboxes.forEach(checkbox => checkbox.addEventListener('click', handleChange));
    })

    const checkIndex = [];    

    const handleChange = (e) => {
        
        if(e.shiftKey && e.target.checked) {
            console.log(e.target.id);
            let thisBox = e.target.id;
            checkIndex.push(...thisBox);
            const tempValues = checkIndex.slice(-2)
            console.log(tempValues);
            boxes.map((item, index) => {
                if(item.id >= tempValues[0] && item.id <= tempValues[1]) {
                    checkTheBoxes(prevState => {
                       return console.log(prevState);
                    })
                }
                return boxes;
            })
            console.log(boxes);
        }
    }
    return (
        
        <>
            {console.log(boxes)}
            <div className="inbox">
                {boxes.map((item, index) => {
                    return (
                        <div className="itemBody" key={index}>
                            <input id={item.id} onChange={(e) => handleChange(e)} checked={item.checked} type="checkbox" className="box"></input>
                            <p className="itemText">{item.text}</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default CheckBoxes;