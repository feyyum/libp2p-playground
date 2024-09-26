# Libp2p Example

This code creates a peer-to-peer (P2P) node using libp2p with WebSockets for transport, Noise for encryption, and Yamux for stream multiplexing. It employs the bootstrap module to connect to known peers defined in bootstrapMultiaddrs, allowing the node to join a network. The script listens for peer:discovery and peer:connect events, logging when new peers are discovered or connected, making it suitable for establishing or joining a libp2p-based network.

### Start building with this line:

```bash
    npm run dev
```

or production mode

```bash
    npm run start
```
