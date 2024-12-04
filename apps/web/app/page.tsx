"use client";
import styles from "./page.module.css";
import VaultImpl from "@meteora-ag/vault-sdk";
import AmmImpl from "@meteora-ag/dynamic-amm-sdk";
import { PoolFarmImpl } from "@meteora-ag/farm-sdk";
import { useCallback } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { NATIVE_MINT } from "@solana/spl-token";

const connection = new Connection(
  "https://jupiter-backend.rpcpool.com/cae668aa-97ba-4144-8ba8-e51c5f17f31c"
);

export default function Home() {
  const onVault = useCallback(() => {
    VaultImpl.create(connection, NATIVE_MINT)
      .then((vault) => {
        console.log(vault);
      })
      .catch(console.log);
  }, []);

  const onAmm = useCallback(() => {
    AmmImpl.create(
      connection,
      new PublicKey("5yuefgbJJpmFNK2iiYbLSpv1aZXq7F9AUKkZKErTYCvs")
    )
      .then((amm) => {
        console.log(amm);
      })
      .catch(console.log);
  }, []);

  const onFarm = useCallback(() => {
    PoolFarmImpl.create(
      connection,
      new PublicKey("4mNHArimvdk3FRQtKuycYQTnjZSyNvJFh9LCUmb2GEpz")
    )
      .then((farm) => {
        console.log(farm);
      })
      .catch(console.log);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={onVault}>Vault</button>
        <button onClick={onAmm}>Amm</button>
        <button onClick={onFarm}>Farm</button>
      </main>
    </div>
  );
}
