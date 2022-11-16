function Deposit(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    const [amount, setAmount] = React.useState('');

    const ctx = React.useContext(UserContext);
    let user = ctx.user;

  
    return (
      <Card
        bgcolor="warning"
        header="Deposit"
        status={status}
        body={show ? 
          <DepositForm setShow={setShow} setStatus={setStatus}/> :
          <DepositMsg setShow={setShow} setStatus={setStatus}/>}
      />
    )
  }
  
  function DepositMsg(props){
    const ctx = React.useContext(UserContext);
    let user = ctx.user;
    return (<>
      <h5>Successful Deposit</h5>
      <h6>Current Balance: {user.balance}</h6>
      <button 
      type="submit" 
        className="btn btn-light" 
        onClick={() => {
            props.setShow(true);
            props.setStatus('');
        }}>
          Deposit More?
      </button>
    </>);
  } 
  
  function DepositForm(props){
    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    function handle(){
      let user = ctx.user;
      user.balance = Number(user.balance) + Number(amount);

      fetch(`/account/update/${user.email}/${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(data.amount));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit failed')
              console.log('err:', text);
          }
      });
    }
  
    return(<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Deposit</button>
  
    </>);
  }
