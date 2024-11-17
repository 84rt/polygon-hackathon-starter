import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "448b3953-4346-4082-9147-d8f04c59ba16",
      walletConnectors: [ EthereumWalletConnectors ],
    }}>
    <DynamicWidget />
    {/* Your other components */}
  </DynamicContextProvider>
);

export default App;