function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 
 
  const ctx = React.useContext(UserContext);
 

  function validate(field, label) {
      if (!field) {
          setStatus(`Please enter a valid ${label}`);
          setTimeout(() => setStatus(''), 2000);
          return false;
      }
      return true;
  }
  
  function checkPassword(password) {
      if(password.length < 5){
          alert('Password must be at least 5 characters in length');
          return false;
      }
      return true;
  }

  function handleCreate() {
      console.log(name, email, password)
      if (!validate(name, 'name')){
           alert('Name is required');
          return;
      } 
      if (!validate(email, 'email')) {
          alert('Email is required')
          return;
      };
      if (!checkPassword(password, 'password')){  
          return;
      }

      const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => {
          e.message ? setShow(true) : setShow(false)
          setStatus(e.message)
          console.log(e.message)})

      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
          var res = await fetch('url', 
          {method: 'POST', 
          mode: 'cors',
         cache: 'no-cache',
        credentials: 'same-origin',
        });

          var data = await res.json();
          console.log(data);
          ctx.user.name = name;
          ctx.user.email = email;
          ctx.user.balance = 0;
          console.log('this is the ctx:', ctx);
          console.log('users name:',name);
          })();      
      setShow(false);
      setStatus('')
  }

  function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      
  }

  return (
  
      <Card 
      bgcolor="primary"
      txtcolor="white"
      header="Create Account"
      title="Interested in creating an account? Complete and submit the form below"
      status={status}
      body={show ? ( <>

          Name<br/>
          <input 
          type="input" 
          className="form-control" 
          id="name" 
          placeholder="Enter Your Name"
          value={name}
          onChange={e => setName(e.currentTarget.value)} /> <br/>

          Email
          <input 
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter Your email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)} /> <br/>

          Password
          <input 
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Your password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)} /> 
          <br/>
          <button 
          type="submit" 
          className="btn btn-light" 
          disabled={name === "" && email === "" && password === ""}
          onClick={handleCreate}>Create Account</button>
         
         </> ) : ( <>
         
          <h5>Success!</h5>
          <h6>Welcome {name}, you now have created an account</h6>
          <button 
          type="submit" 
          className="btn btn-light" 
          onClick={clearForm}
          disabled={name === "" && email === "" && password === ""}
          >Add another account</button>
          
          </> )
          }
      
      />
      ) 
}
