import ReactDOM from "react-dom";
import App from 'App';

const container = document.getElementById('root');

function Spa(){
    return (
        <HashRouter>
            <div>
                <NavBar/>
                <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
                <div className="container" style={ {padding: "20px"}}>
                    <Route path= "/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/Withdraw/" component={Withdraw} />
                    <Route path="/balance/" component={Balance} />
                    <Route path="/alldata/" component={AllData}/>
                </div>
                </UserContext.Provider>
            </div>
        </HashRouter>
    )
}

ReactDOM.createRoot(<Spa/>,
    document.getElementById('root')
);
