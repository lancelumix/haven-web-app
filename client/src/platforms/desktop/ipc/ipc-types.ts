import {NodeLocation} from "platforms/desktop/types";

export enum CommunicationChannel {
  HAVEND = "havend",
  WALLET_RPC = "wallet-rpc",
  RPC="rpc",
  STORED_WALLETS = "wallets",
  SWITCH_NET = "switch_net"
}

export interface DAEMON_STATUS {
  isRunning: boolean;
  code?: number;
  signal?: string;
}


export interface AVAILABLE_WALLETS {
  wallets: { name: string; address: string }[];
}

export interface WalletState extends ProcessState  {

  isConnectedToDaemon: boolean;
  isSyncing: boolean;
  syncHeight: number;

}

export interface HavendState extends ProcessState {

  isReachable: boolean;
  location: NodeLocation;
  address: string;

}


export interface ProcessState  {
  isRunning: boolean;
  code?: number;
  signal?: string;
};
