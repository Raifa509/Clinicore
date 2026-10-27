"use client";
import { useState } from "react";
import {
  Activity
} from "lucide-react";
import styles from "./components/Shared/Login.module.css";

export default function Home() {
  return (
    <main className={styles.login}>
      <section className={styles.loginHero}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Activity size={19} color="#fff" />
          </div>
          CliniCore
        </div>

        <div className={styles.heroContent}>
          <h1>One calm place to run your clinic.</h1>
          <p>
            Simplify appointments, manage patient queues, access medical histories, and handle consultation billing — all through one secure, easy-to-use clinic management platform.
          </p>
        </div>

        <small className={styles.heroFooter}>

        </small>
      </section>

      <section className={styles.loginForm}>
        <div className={styles.loginBox}>
          <h2>Welcome back</h2>
          <p className={styles.muted}>
           Sign in to your Clinicore account to access your clinic workspace.
          </p>

          <div className={styles.field}>
            <label>Login</label>
            <input
              id="email"
              placeholder="jane@gmail.com"
            />
          </div>

          <div className={styles.field}>
            <label >Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className={styles.btnPri}

          >
            Sign in
          </button>


        </div>
      </section>
    </main>
  );
}
