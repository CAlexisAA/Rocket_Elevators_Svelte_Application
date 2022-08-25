
NFTs (Non-Fungible Tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.

<!-- <button>CLICK TO GET YOURS</button> -->
<body>
<button id="connect-button">Connect METAMASK</button>
    <script>
      document.getElementById('connect-button').addEventListener('click', event => {
        let account;
        let button = event.target;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
          account = accounts [0];
          console.log(account)
          button.textContent = account;
          ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result => {
            console.log(result)
            let wei = parseInt(result,16);
            let balance = wei / (10**18);
            console.log(balance + " ETH")
          });
        });
      });
    </script>
</body>