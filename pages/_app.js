import Layout from "../components/layout";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="layout">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
