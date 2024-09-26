import { createLibp2p } from "libp2p";
import { webSockets } from "@libp2p/websockets";
import { noise } from "@chainsafe/libp2p-noise";
import { yamux } from "@chainsafe/libp2p-yamux";
// If you already know the addresses of some other network peers,
//   you should consider using @libp2p/bootstrap as this is the easiest way
//   of getting your peer into the network.
import { bootstrap } from "@libp2p/bootstrap";

// Known peers addresses
const bootstrapMultiaddrs = [
  "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
  "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
];

const node = await createLibp2p({
  // libp2p nodes are started by default, pass false to override this
  // start: false,
  //   addresses: {
  //     listen: ["/ip4/127.0.0.1/tcp/8000/ws"],
  //   },
  transports: [webSockets()],
  connectionEncrypters: [noise()],
  streamMuxers: [yamux()],
  peerDiscovery: [
    bootstrap({
      list: bootstrapMultiaddrs, // provide array of multiaddrs
    }),
  ],
});

// start libp2p
// await node.start();
// console.log("libp2p has started");

// const listenAddrs = node.getMultiaddrs();
// console.log("libp2p is listening on the following addresses: ", listenAddrs);

// stop libp2p
// await node.stop();
// console.log("libp2p has stopped");

node.addEventListener("peer:discovery", (evt) => {
  console.log("Discovered %s", evt.detail.id.toString()); // Log discovered peer
});

node.addEventListener("peer:connect", (evt) => {
  console.log("Connected to %s", evt.detail.toString()); // Log connected peer
});
