import "../styles/ArrayMethods.css";
import { useEffect } from 'react';

const ArrayMethods = () => {

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

  useEffect(() => {
    //console.clear();
    console.table(data);
    console.table(inventors);
    console.table(people);
  });


  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

  const dateSorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

  const yearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  const ageSorted = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
  })

  const orderedPeople = people.sort((last, next) => {
    const [aLast] = last.split(', ');
    const [bLast] = next.split(', ');
    return aLast > bLast ? 1 : -1;
  })

  const reducedItems = data.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  return (
    <div className="arraycontainer">
      <h2 className="heading">Array Methods - Check Console for Initial Data :)</h2>
      <div className="methodContainer">
        <h3 className="methodHeading">Map Method for Inventor First and Last Names</h3>
        {inventors.map((inventor, index) => {
          return (
            <p key={index}>{inventor.first} {inventor.last}</p>
          )
        })}
      </div>

      <div className="methodContainer">
        <h3 className="methodHeading">Filter and Map for Inventors in 1500s</h3>
        {fifteen.map((inventor, index) => {
          return (
            <p key={index}>{inventor.first} {inventor.last}</p>
          )
        })}
      </div>

      <div className="methodContainer">
        <h3 className="methodHeading">Sort Inventors by Oldest</h3>
        {dateSorted.map((inventor, index) => {
          return (
            <p key={index}>{inventor.first} {inventor.last} | Age: {inventor.passed - inventor.year} | Born: {inventor.year}</p>
          )
        })}
      </div>

      <div className="methodContainer">
        <h3 className="methodHeading">Reduce Method to find total Age of Inventors</h3>
        <p>Total Years:{yearsLived}</p>
      </div>

      <div className="methodContainer">
        <h3 className="methodHeading">Sorted Inventors from Oldest to Youngest</h3>
        {ageSorted.map((inventor, index) => {
          return (
            <p key={index}>{inventor.first} {inventor.last} | Age {inventor.passed - inventor.year}</p>
          )
        })}
      </div>

      <div className="methodContainer">
        <h3 className="methodHeading">Array of people sorted Alphbetically by Last Name</h3>
        {orderedPeople.map((person, index) => {
          return (
            <p key={index}>{person}</p>
          )
        })}
      </div>
      <div className="methodContainer">
        <h3 className="methodHeading">Reduce Array to show quantity of Contents</h3>
        <p>Bikes: {reducedItems.bike}</p>
        <p>Cars: {reducedItems.car}</p>
        <p>Trucks: {reducedItems.truck}</p>
        <p>Walking: {reducedItems.van}</p>
        <p>Vans: {reducedItems.walk}</p>
        <p>PogoSticks: {reducedItems.pogostick}</p>
      </div>
    </div>
  )
}

export default ArrayMethods;