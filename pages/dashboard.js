import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getSession, signIn } from "next-auth/react";
function dashboard() {
  const [loaging, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  if (loaging) {
    <div>Loading....</div>;
  }
  return <div className={styles.main}>dashboard</div>;
}

export default dashboard;
