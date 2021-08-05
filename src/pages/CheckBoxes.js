import { useState } from 'react';
import '../styles/CheckBoxes.css';

const CheckBoxes = () => {

    const options = [
        {
            id: "0",
            checked: false,
            label: "This is an inbox layout",
        },
        {
            id: "1",
            checked: false,
            label: "Check on item",
        },
        {
            id: "2",
            checked: false,
            label: "Hold down your Shift key",
        },
        {
            id: "3",
            checked: false,
            label: "Check a lower Item",
        },
        {
            id: "4",
            checked: false,
            label: "Everthing in between should also be set to checked",
        },
        {
            id: "5",
            checked: false,
            label: "Try to do it without any libraries",
        },
        {
            id: "6",
            checked: false,
            label: "Just React",
        },
        {
            id: "7",
            checked: false,
            label: "Good Luck!",
        },
        {
            id: "8",
            checked: false,
            label: "Don't forget to Tweet about it!",
        },
    ];

    const [data, setData] = useState(options);
    const [previousCheck, setChecked] = useState(null);

    const toggle = (index, e) => {

        const newData = [...data];

        if (e.nativeEvent.shiftKey && !previousCheck) {
            console.log("This ran");
            setChecked(e.target.id);
        } else if (e.nativeEvent.shiftKey && previousCheck) {
            newData.forEach((item, index) => {
                if (item.id >= previousCheck && item.id <= e.target.id) {
                    newData.splice(index, 1, {
                        id: data[index].id,
                        checked: !data[index].checked,
                        label: data[index].label,
                    })
                }
            })
            setChecked(null);
        } else {
            newData.splice(index, 1, {
                id: data[index].id,
                checked: !data[index].checked,
                label: data[index].label,
            });
        }
        setData(newData);
    };


    return (
        <>
            <div className="inbox">
                {data.map((item, index) => {
                    return (
                        <div className="itemBody" key={index}>
                            <input id={item.id} onChange={(e) => toggle(item.id, e)} checked={item.checked} type="checkbox" className="box"></input>
                            <p className="itemText">{item.label}</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default CheckBoxes;