import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuth2RedirectHandler() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      localStorage.setItem("jwt", token); // match your existing login's storage
      navigate("/home");
    } else {
      navigate("/login?error=oauth_failed");
    }
  }, [params, navigate]);

  return <p>Logging you in...</p>;
}

export default OAuth2RedirectHandler;