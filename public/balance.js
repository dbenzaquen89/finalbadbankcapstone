function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [email, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);
  let user = ctx.user;

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  function handle(){
    let user = ctx.user;
    ctx.user.email = user.email;
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.balance));
            props.setShow(false);
            
            console.log('JSON:', data);
        } catch(err) {
            setStatus("")
            console.log('err:', text);
        }
    });
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}
