"use client";
import styles from "./page.module.css";
import VaultImpl from "@meteora-ag/vault-sdk";
import { useCallback } from "react";
import { Connection } from "@solana/web3.js";
import { NATIVE_MINT } from "@solana/spl-token";

export default function Home() {
  const test = useCallback(() => {
    VaultImpl.create(
      new Connection(
        "https://jupiter-backend.rpcpool.com/cae668aa-97ba-4144-8ba8-e51c5f17f31c"
      ),
      NATIVE_MINT
    ).then((vault) => {
      console.log(vault);
    }).catch(console.log);
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={test}>Test</button>
      </main>
    </div>
  );
}
