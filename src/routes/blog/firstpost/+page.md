---
layout: post
title: "Get yours"
slug: "GET"
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate voluptatem voluptate autem obcaecati possimus, sed ut debitis. Voluptas ut iste pariatur quia quos impedit? Itaque necessitatibus dolor repudiandae molestiae reprehenderit accusantium, ea sit reiciendis accusamus asperiores voluptatum inventore, cupiditate, minima fugit sapiente eaque suscipit. Facere illum obcaecati possimus quam."
tags:


  # [
  #   { name: "Svelte Kit", link: "https://kit.svelte.dev/" },
  #   { name: "Tailwind", link: "https://www.tailwindcss.com" },
  #   { name: "Markdown", link: "https://www.markdownguide.org/" },
  # ]
---
<body>
<button id="connect-button">Connect MetaMask</button>
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
    <body>
    <button id="freeNFT">Free NFT?</button>
    <script>
      document.getElementById('freeNFT').addEventListener('click', event => {
        alert("Hey! you are eligible for a FREE NFT!!");
      })
        // fetch("https://express-api.codeboxxtest.xyz/NFT/gift/0xd64c0Faf9b9a2f07FB7C6318fb34b69c9DEa4C62", {
        //   method: "POST",
        //   headers: {
        //     accept: "application/json"
        //   },
        // })
        // .then((data) => {
        //   console.log(data);
        //   return data;
        // .catch((error) => {
        //   console.log("ERROR!1")
        // })
        // });
    </script>
</body>
