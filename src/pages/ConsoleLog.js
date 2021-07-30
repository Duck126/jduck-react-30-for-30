import { useEffect } from "react";

const ConsoleLog = () => {
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
        const p = document.querySelector('p');
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    }

    useEffect(() => {
        console.clear();
        // Regular
        console.log('hello dere');

        // Interpolated
        console.log('Hello dere I am a %s string!', '💩');

        // Styled
        // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

        // warning!
        console.warn('%c OH NOOO THAT DOESNT LOOK GOOD', 'font-size:25px; color:orange;');

        // Error :|
        console.error('%c FOR THE LOVE OF BISCUITS THIS IS CHAOS', 'font-size:25px; color:red;');

        // Info
        console.info('Crocodiles eat 3-4 people per year');

        // Testing
        const p = document.querySelector('p');

        //console.assert(p.classList.contains('ouch'), 'That is wrong!');

        // clearing
        //console.clear();

        // Viewing DOM Elements
        console.log(p);
        console.dir(p);

        //console.clear();

        // Grouping together
        dogs.forEach(dog => {
            console.groupCollapsed(`${dog.name}`);
            console.log(`This is ${dog.name}`);
            console.log(`${dog.name} is ${dog.age} years old`);
            console.log(`${dog.name} is ${dog.age * 7} dog years old`);
            console.groupEnd(`${dog.name}`);
        });

        // counting

        console.count('Wes');
        console.count('Wes');
        console.count('Steve');
        console.count('Steve');
        console.count('Wes');
        console.count('Steve');
        console.count('Wes');
        console.count('Steve');
        console.count('Steve');
        console.count('Steve');
        console.count('Steve');
        console.count('Steve');

        // timing
        console.time('fetching data');
        fetch('https://api.github.com/users/wesbos')
            .then(data => data.json())
            .then(data => {
                console.timeEnd('fetching data');
                console.log(data);
            });

        console.table(dogs);
    })

    return (
        <>
            <h2>Open the Console :)</h2>

            <p onClick={makeGreen}>×BREAK×DOWN×</p>
        </>
    )
}

export default ConsoleLog;