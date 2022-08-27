---
title: Portfolio
description: Previous Purchases
layout: page
---

Previous Purchases
<body>
<img src="https://ipfs.moralis.io:2053/ipfs/QmZFBVuoPfWaQJuUvyobNb22aBwwvgABJmnwwBq6doso8g/RocketElevatorsNFTImage_112.png">
<p>Your Free NFT </p>
</body>

<script>
    fetch("https://express-api.codeboxxtest.xyz/NFT/metadata/112", {
  method: "GET",
  headers: {
    accept: 'application/json'
  },
}).then(res => {
  return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("ERROR"))
</script>

