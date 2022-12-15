import "../styles/globals.css";
import Layout from "../components/layout";
import Footer from "../components/footer";
import AuthProvider from "../contexts/auth_context";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>

      <Layout>
        {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
        />

        <Component {...pageProps} />
        <Footer />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
