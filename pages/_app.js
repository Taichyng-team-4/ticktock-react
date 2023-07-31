import "@/styles/globals.css";
import Layout from "../components/Layout/RootLayout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
