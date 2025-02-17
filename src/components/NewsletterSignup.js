import { useFetcher } from "react-router-dom";

import { useEffect } from "react";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("Signup successful!");
    }
  }, [data, state]);

  return (
    //use action without navigation out from the current route
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" name="email" />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
