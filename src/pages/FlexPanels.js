import "../styles/FlexPanels.css"
import { useState } from 'react';

const FlexPanels = () => {

    const [state, setState] = useState({
        objects: [
            {
                id: 1,
                isActive: false,
                textOne: 'Hey',
                textTwo: 'Lets',
                textThree: 'Dance',
                classNames: 'panel panel1',
            },
            {
                id: 2,
                isActive: false,
                textOne: 'Give',
                textTwo: 'Take',
                textThree: 'Recieve',
                classNames: 'panel panel2',
            },
            {
                id: 3,
                isActive: false,
                textOne: 'Experience',
                textTwo: 'It',
                textThree: 'Today',
                classNames: 'panel panel3',
            },
            {
                id: '4',
                isActive: false,
                textOne: 'Give',
                textTwo: 'All',
                textThree: 'You can',
                classNames: 'panel panel4',
            },
            {
                id: '5',
                isActive: false,
                textOne: 'Life',
                textTwo: 'In',
                textThree: 'Motion',
                classNames: 'panel panel5',
            },

        ]
    });

    function toggleActive(index) {
        const panels = [...state.objects];
        console.log(panels[index].isActive);
        panels[index].isActive
            ? (panels[index].isActive = false)
            : (panels[index].isActive = true);

        setState({ ...state, objects: panels });
    }

    function handleStyles(index) {
        if (state.objects[index].isActive) {
            return "open open-active"
        } else {
            return ""
        }
    }

    return (
        <>
            <div className="panels">
                {state.objects.map((item, index) => {
                    return (
                        <div key={index} className={`${item.classNames} ${handleStyles(index)}`} onClick={() => toggleActive(index)}>
                            <p>{item.textOne}</p>
                            <p>{item.textTwo}</p>
                            <p>{item.textThree}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FlexPanels;