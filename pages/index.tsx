import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/footer/Footer";
import TopRotatingBanner from "@/components/topRotatingBanner/TopRotatingBanner";
import Header from "@/components/header/Header"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { GetServerSideProps } from "next";
import ProductGallery from "@/components/products/Products";

export const simplonNorm = localFont({
  src: [
    {
      path: 'fonts/SimplonNorm-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/SimplonNorm-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-simplon-norm',
});


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface HomeProps {
  products: Product[];
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return { props: { products } };
};  


const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Appscript</title>
        <meta name="description" content="Appscript test shopping page created with next js and css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={simplonNorm.variable} >
        <main className={styles.main}>
          <TopRotatingBanner/>
          <Header/>
          <Breadcrumbs/>
          <div className={styles.pageHeader}>
            <h2>DISCOVER OUR PRODUCTS</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
                <ProductGallery products={products} />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
