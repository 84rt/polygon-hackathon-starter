## Bouties / things we are using:
Dynamic for the wallet integration
Polygon by default
Maybe vlayer for cross bouty
Kinto or MINA for ZK proof gen lib

## Things to do
- get the mock dataset from hugging face
- implement keyword search with ZK-Snark proof generation
- Imlement the Next.JS SDK that stores the data on Polygon 



## The project setup
- We have 1 next.js server that is talking to 2 clients (DS holder, Auditor)
- Auditor sends a request
- the DS holder 


### the demo outline
0. DS holder generates a hash of the DS
1. DS holder connects wallet
2. DS holder publishes the hash of the DS on Polygon
1. The auditor connects wallet
2. Auditor sends a keyword request
3. The request is sent to the DS holder
4. DS holder approves the request
5. DS holder runs the keyword search
6. DS holder generates a proof
