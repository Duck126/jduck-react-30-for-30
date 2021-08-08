import "../styles/Home.css"

const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <div className="homepage">
                    <div className="description">
                        <h2 className="homeTitle">30 JavaScript Challenges in React JS - No packages!</h2>
                        <span>
                            <p>Original projects inspired by <a className="homelink" href="https://javascript30.com/">#JavaScript30 Challenges</a> from Wes Bos!</p>
                        </span>
                        <span >
                            <p className="noteSection">Notes: A few projects print results to the developer console, for the best experience it's recommended to use a Desktop Browser. If you're unfamiliar with Browser tools to open the console you can use the shortcut Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux). </p> 
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;