import Head from 'next/Head';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Top Hat Top Glass </title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/3/cyborg/bootstrap.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
