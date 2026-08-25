"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    // TODO: brancher l'appel à l'API d'authentification ici.
  }

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      <div className="d-none d-md-block col-md-6 p-0">
        <div className={styles.imagePanel} />
      </div>

      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-login text-white">
        <div className={styles.formCard}>
          <h2 className={`${styles.title} text-center mb-4`}>Connexion</h2>

          {errorMessage && (
            <div id="errorMessage" className="text-danger mb-3">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="Adresse courriel"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Rester connectée
              </label>
            </div>

            <button type="submit" className="btn btn-custom-light-primary w-100 mb-2">
              Se connecter
            </button>

            {/* Dashboard pas encore migré -> on renvoie vers l'ancien app pour l'instant */}
            <a
              className="btn btn-custom-light-accent w-100"
              href={`/dashboard`}
            >
              Connexion invité
            </a>

            <p className="mt-4 text-center">
              Pas encore de compte ?{" "}
              <a
                className="link-custom btn btn-custom-primary"
                href={`/account/register`}
              >
                S&apos;inscrire
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}