var ui = {};

ui.navigation = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onClick={defaultModule();}>BadBank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadCreateAccount()} id="createAccount">Create Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadLogin()} id="login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadDeposit()}>Deposit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadWithdraw()}>Withdraw</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadBalance()}>Balance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={loadAllData()}>AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
  `;
  var navigation = document.getElementById('navigation');
  navigation.innerHTML += ui.navigation;

ui.createAccount = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            Name<br>
            <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password <br>
            <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onClick={create();}>Create Account</button>
            <div id='createStatus'></div>
  </div>
</div>
`;

ui.login = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="loginEmail" placeholder="Enter email"><br>
            Password <br>
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onClick={login();}>Login</button>
            <div id='loginStatus'></div>
  </div>
</div>
`;

ui.deposit = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            Email address<br>
            <input type="input" class="form-control" id="DepositEmail" placeholder="Enter email"><br>
            Amount <br>
            <input type="number" class="form-control" id="DepositAmount" placeholder="Enter amount"><br>
            <button type="submit" id="submit" class="btn" onClick={deposit();}>Deposit</button>
            <div id='depositStatus'></div>
  </div>
</div>
`;

ui.withdraw = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="BalanceEmail" placeholder="Enter email"><br>
            Amount <br>
            <input type="number" class="form-control" id="WithdrawAmount" placeholder="Enter amount"><br
            <button type="submit" id="submit" class="btn" onClick={balance();}>Show Balance</button>
            <div id='balanceStatus'></div>
  </div>
</div>
`;

ui.balance = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="DepositEmail" placeholder="Enter email"><br>
            <button type="submit" id="submit" class="btn" onClick={balance();}>Show Balance</button>
            <div id='balanceStatus'></div>
  </div>
</div>
`;

ui.default = `
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Welcome to the Bad Bank</div>
        <div class="card-body">
            <h5 class="card-title">Welcome to the bank</h5>
            <p class="card-text">Move around the site using the Navigation Bar.</p>
            <img src="bank.png" class="img-fluid" alt="Responsive image">
  </div>
</div>
`;

ui.allData = `
    <h5>All Data in Store</h5>
    <button type="button" class="btn btn-secondard" onClick={allData()}>Show All Data</button>
    <div id ="allDataStatus"></div>
    `;

    var loadCreateAccount = function(){
        target.innerHTML = ui.createAccount;
    };

    var loadLogin = function(){
        target.innerHTML = ui.login;
    };

    var loadDeposit = function(){
        target.innerHTML = ui.deposit;
    };

    var loadWithdraw = function(){
        target.innerHTML = ui.withdraw;
    };

    var loadBalance = function(){
        target.innerHTML = ui.balance;
    };
    var defaultModule = function(){
        target.innerHTML = ui.default;
    };

    var loadAllData = function(){
        target.innerHTML = ui.allData;
    };

defaultModule();