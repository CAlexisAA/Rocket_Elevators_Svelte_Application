export async function load({ fetch }) {
  const res = await fetch(`/api/posts.json`);
  const posts = await res.json();

  return {
    posts,
  };
}
//--------------WHITELIST MY WALLET--------------//
const walletAddress = "0xd64c0Faf9b9a2f07FB7C6318fb34b69c9DEa4C62";
const isWhiteListed = fetch('https://express-api.codeboxxtest.xyz/NFT/addToWhitelist/0xd64c0Faf9b9a2f07FB7C6318fb34b69c9DEa4C62', {
  method: "POST",
  headers: {
    accept:"application/json",
    token: "RocketElevatorsToTheMoon"
  },
})
.then((data) => {
  console.log(data);
  return data;
})
.catch((error)=> {
  console.log('There was an error')
});
//**LOGIC**/
if (isWhiteListed) {
  console.log("Eligible for free NFT")
} else {
  console.log("Not Eligible")
  //BONUS//
}
//--------------ELIGIBILITY--------------//
fetch('https://express-api.codeboxxtest.xyz/NFT/gift/0xd64c0Faf9b9a2f07FB7C6318fb34b69c9DEa4C62', {
  method: "GET",
  headers: {
    accept: 'application/json'
  },
}).then(res => {
  return res.json()
})

.catch(error => console.log("ERROR"))

fetch('https://express-api.codeboxxtest.xyz/NFT/gift/0xd64c0Faf9b9a2f07FB7C6318fb34b69c9DEa4C62', {
  method: "POST",
  headers: {
    accept:"application/json",
  },
})
.then((data) => {
  console.log(data);
  return data;
})
.then(data => console.log(data))
.catch((error) => {
  console.log("ERROR")
});




