const Route      = ReactRouterDOM.Route;
const Link       = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWaLhfoSYCWE_TJmcqNVkicnOMA1y3vGU",
  authDomain: "badbankfinalcapstone.firebaseapp.com",
  projectId: "badbankfinalcapstone",
  storageBucket: "badbankfinalcapstone.appspot.com",
  messagingSenderId: "1033110673105",
  appId: "1:1033110673105:web:0185ff387d639b6d2357f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
