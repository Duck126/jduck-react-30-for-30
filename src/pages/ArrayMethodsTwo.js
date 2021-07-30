import { useEffect } from "react";
import "../styles/ArrayMethodsTwo.css";

const ArrayMethodsTwo = () => {

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];

    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];

    const isOneAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    const comment = comments.find(comment => comment.id === 823423);
    const index = comments.findIndex(comment => comment.id === 823423);
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];
    useEffect(() => {
        console.clear();
        console.table(people);
        console.log("Is at least one person over 19? :", { isOneAdult });
        console.log("Is everyone 19 or older? :", { allAdults });
        console.table(comments);
        console.log("Here's a specific comment: ", {comment});
        console.log("Here are the newest comments: ", {newComments});
    });


    return (
        <div className='arraycontainer'>
            <h1 className="arrayHeading" >Array Methods 2 - ***See Developer Console***</h1>
        </div>
    )
}

export default ArrayMethodsTwo;