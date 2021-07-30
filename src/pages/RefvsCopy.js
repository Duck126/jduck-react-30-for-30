import "../styles/RefCopy.css"

const RefvsCopy = () => {

    //console.clear();
    // start with strings, numbers and booleans
    console.log('%c Strings and numbers', 'font-size:25px; color:red;');
    console.log('%c Set age2 = age;', 'font-size:15px; color:green;');
    let age = 100;
    let age2 = age;
    console.log({age, age2});
    console.log('%c age = 200;', 'font-size:15px; color:green;');
    age = 200;
    console.log('%c age2 is unchanged', 'font-size:15px; color:green;');
    console.log({age, age2});
    console.log('%c name2 = name;', 'font-size:15px; color:green;');
    let name = 'Duck';
    let name2 = name;
    console.log({name, name2});
    console.log('%c name = "John D";', 'font-size:15px; color:green;');
    name = 'John D';
    console.log({name, name2});
    console.log('%c name2 is unchanged', 'font-size:15px; color:green;');
    // Let's say we have an array
    console.log('%c Arrays', 'font-size:25px; color:red;');
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    console.log({players});
    console.log('%c Copy an array: const team = players;', 'font-size:15px; color:green;');
    // and we want to make a copy of it.
    const team = players;
    console.log({players, team});
    // You might think we can just do something like this:
    console.log('%c But when you try to update this copy it changes the original as well! team[3] = "Lux";', 'font-size:15px; color:green;');
    //team[3] = 'Lux';
    // console.log({team, players});

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    console.log('%c To fix this you can separate the copy from the original: const team = players.slice();', 'font-size:15px; color:green;');
    // one way

    // or create a new array and concat the old one in
    console.log('%c Or create a new array and concat the original: const team = [].concat(players);', 'font-size:15px; color:green;');

    // const team3 = [].concat(players);
    // or use the new ES6 Spread
    console.log('%c Or use the ES6 spread operator const team4 = [...players];', 'font-size:15px; color:green;');
    console.log('%c team4[3] = "heeee hawww";', 'font-size:15px; color:green;');
    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object
    console.log('%c Objects', 'font-size:25px; color:red;');
    // with Objects
    const person = {
        name: 'John Duck',
        age: 80
    };
    console.log({person});
    // and think we make a copy:
    console.log('%c You can copy object using const captain = person; But still this changes the original object as well.', 'font-size:15px; color:green;');

    const captain = person;
    captain.number = 99;
    captain.age = 55;
    console.log({captain, person});

    // how do we take a copy instead?
    console.log('%c Instead we can use something like: const cap2 = Object.assign({}, person, { number: 99, age: 12 });  ', 'font-size:15px; color:green;');

    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    const jduck = {
        name: 'John',
        age: 100,
        social: {
            twitter: '@duckdevelops',
            facebook: 'john.duck'
        }
    };

    //console.clear();
    console.log(jduck);

    return (
        <>
            <div className="refcontainer">
                <h2 className="heading">JavaScript Reference VS Copies - Check Developer Console!</h2>
                
            </div>

        </>
    )
}

export default RefvsCopy;