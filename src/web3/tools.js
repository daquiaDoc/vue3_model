import supportedChains from './chains';

export function getChainData(chainId) {
  const chainData = supportedChains.filter((chain) => chain.chain_id === chainId)[0];
  console.log(chainId);
  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }
  const API_KEY = import.meta.env.VITE_APP_INFURA_ID;
  // const API_KEY = '2323';
  if (
    chainData.rpc_url.includes('infura.io')
      && chainData.rpc_url.includes('%API_KEY%')
      && API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);
    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return chainData;
}
