function Login(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
   
    const ctx = React.useContext(UserContext);
    let user = ctx.user;

    return (
      <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={show ? 
          <LoginForm setShow={setShow} setStatus={setStatus}/> :
          <LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }
  
  function LoginMsg(props){
    const ctx = React.useContext(UserContext);
    let user = ctx.user;

    
    return(<>
      <h5>You are logged in</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>
          Authenticate again
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [status, setStatus] = React.useState('');
    const [show, setShow] = React.useState(true);
   
    const ctx = React.userContext(UserContext);
    let user = ctx.user;

    function handle(){
  

      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
      fetch(`/account/login/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
              const data = JSON.parse(text);
              props.setStatus('');
              props.setStatus(JSON.stringify(data.name));
              props.setShow(false);
              console.log('JSON:', data);
              ctx.user.name = data.name;
              ctx.user.email = data.email;
              ctx.user.balance = data.balance;



          })
          .catch((err) => {
              props.setStatus(text)
              console.log('err:', text);
          });
      }
    })
    promise.catch((e) => console.log('FAILURE IN LOGIN', e.message));
    }
  
    function handleGoogleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          const gmail = encodeURI(result.additionalUserInfo.profile.name);
          console.log(gmail);
          fetch(`/account/login/${gmail}/${gmail}`)
          .then(response => response.text())
          .then(async (text) => {
              try {
                  const data = JSON.parse(text);
                  setStatus('');
                  setShow(false);
                  setUser(data);
                  console.log('JSON:', data);
              } catch(err) {
                console.log(err);
                  setStatus(text)
                  console.log('err:', text);
                  
                  const url = `/account/create/${gmail}/${gmail}/${gmail}`;
                  await fetch(url);
                  const res = await fetch(`/account/login/${gmail}/${gmail}`)
                  const text = await res.text();
                  const data = JSON.parse(text);
                        setStatus('');
                        setShow(false);
                        setUser(data);
              }
          })
          console.log(ctx);
        })
        .catch(function (error) {
          console.log(error.code);
          console.log(error.message);
        });
      }
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button 
      type="submit" 
      className="btn btn-light" 
      disabled={(password && email) ?false:true}
      onClick={handle}>Login</button>
     
     <button
     type="submit" 
     className="btn btn-light" 
     disabled={(password && email) ?false:true}
     onClick={handleGoogleLogin}>Login using Google</button>
    </>)}
  
