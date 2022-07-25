import "../styles/globals.css";
import App from "../components/App";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <App>
        <Component {...pageProps} />
      </App>
    </div>
  );
}

export default MyApp;
