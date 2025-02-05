// import Carousel from '../src/partials/Carousel';
import FeaturedBlocks from '../../src/partials/FeaturedBlocks';
import HeroHome from '../../src/partials/HeroHome';
import PageIllustrationSvg from '../../src/assets/svg/PageIllustrationSvg';
// import PricingTables from '../src/partials/PricingTables';
import Process from '../../src/partials/Process';
import Stats from '../../src/partials/Stats';
import Tabs from '../../src/partials/Tabs';
// import TestimonialsBlocks from '../src/partials/TestimonialsBlocks';
import Cta from '../../src/partials/Cta';
import Head from 'next/head';
// Page content

export async function getStaticPaths() {
    return {
      paths: [
        {"params": {"slug": "best-laundry-service-in-Sector-12"}},
        {"params": {"slug": "best-laundry-service-in-Sector-11"}},
        {"params": {"slug": "best-laundry-service-in-Sector-1"}},
        {"params": {"slug": "best-laundry-service-in-Sector-12-A"}},
        {"params": {"slug": "best-laundry-service-in-Sector-36"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park-1"}},
        {"params": {"slug": "best-laundry-service-in-Jaypee-Greens"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park-2"}},
        {"params": {"slug": "best-laundry-service-in-Alpha-II"}},
        {"params": {"slug": "best-laundry-service-in-Sector-3"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park-3"}},
        {"params": {"slug": "best-laundry-service-in-Sector-16"}},
        {"params": {"slug": "best-laundry-service-in-Sector-4"}},
        {"params": {"slug": "best-laundry-service-in-Surajpur"}},
        {"params": {"slug": "best-laundry-service-in-PHI-I"}},
        {"params": {"slug": "best-laundry-service-in-ECOTECH-II"}},
        {"params": {"slug": "best-laundry-service-in-AWHO-III"}},
        {"params": {"slug": "best-laundry-service-in-Swaran-Nagari"}},
        {"params": {"slug": "best-laundry-service-in-Noida-Extension"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park-4"}},
        {"params": {"slug": "best-laundry-service-in-PI-I-&-II"}},
        {"params": {"slug": "best-laundry-service-in-Kulesara"}},
        {"params": {"slug": "best-laundry-service-in-ECOTECH-III"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park-5"}},
        {"params": {"slug": "best-laundry-service-in-SIGMA-I"}},
        {"params": {"slug": "best-laundry-service-in-Lakhnawali"}},
        {"params": {"slug": "best-laundry-service-in-SIGMA-III"}},
        {"params": {"slug": "best-laundry-service-in-SIGMA-II"}},
        {"params": {"slug": "best-laundry-service-in-Sector-2"}},
        {"params": {"slug": "best-laundry-service-in-OMICRON-II"}},
        {"params": {"slug": "best-laundry-service-in-Sector-27"}},
        {"params": {"slug": "best-laundry-service-in-SIGMA-IV"}},
        {"params": {"slug": "best-laundry-service-in-Sector-16B"}},
        {"params": {"slug": "best-laundry-service-in-Sector-16C"}},
        {"params": {"slug": "best-laundry-service-in-OMICRON-III"}},
        {"params": {"slug": "best-laundry-service-in-Theta-II"}},
        {"params": {"slug": "best-laundry-service-in-XU-III"}},
        {"params": {"slug": "best-laundry-service-in-RHO-II"}},
        {"params": {"slug": "best-laundry-service-in-RHO-I"}},
        {"params": {"slug": "best-laundry-service-in-Devla"}},
        {"params": {"slug": "best-laundry-service-in-OMICRON-I-A"}},
        {"params": {"slug": "best-laundry-service-in-OMICRON-I"}},
        {"params": {"slug": "best-laundry-service-in-XU-I"}},
        {"params": {"slug": "best-laundry-service-in-MU-I"}},
        {"params": {"slug": "best-laundry-service-in-MU"}},
        {"params": {"slug": "best-laundry-service-in-Sector-10"}},
        {"params": {"slug": "best-laundry-service-in-Tilpata-Karanwas"}},
        {"params": {"slug": "best-laundry-service-in-UPSIDC"}},
        {"params": {"slug": "best-laundry-service-in-Yamuna-Expressway"}},
        {"params": {"slug": "best-laundry-service-in-Tech-Zone-IV"}},
        {"params": {"slug": "best-laundry-service-in-XU-II"}},
        {"params": {"slug": "best-laundry-service-in-ZETA-II"}},
        {"params": {"slug": "best-laundry-service-in-ZETA-I"}},
        {"params": {"slug": "best-laundry-service-in-Shahberi"}},
        {"params": {"slug": "best-laundry-service-in-Suthiyana"}},
        {"params": {"slug": "best-laundry-service-in-Tech-Zone"}},
        {"params": {"slug": "best-laundry-service-in-ETA-II"}},
        {"params": {"slug": "best-laundry-service-in-NH-91"}},
        {"params": {"slug": "best-laundry-service-in-Knowledge-Park"}},
        {"params": {"slug": "best-laundry-service-in-Kasna"}},
        {"params": {"slug": "best-laundry-service-in-NH-91-Dadri"}},
        {"params": {"slug": "best-laundry-service-in-Pari-Chowk"}},
        {"params": {"slug": "best-laundry-service-in-Alpha-I"}},
        {"params": {"slug": "best-laundry-service-in-Patwari"}},
        {"params": {"slug": "best-laundry-service-in-Gulistanpur"}},
        {"params": {"slug": "best-laundry-service-in-Greater-Noida-Extention-West"}},
        {"params": {"slug": "best-laundry-service-in-Chamrawali-Bodaki"}},
        {"params": {"slug": "best-laundry-service-in-Bodaki"}},
        {"params": {"slug": "best-laundry-service-in-Bhanauta"}},
        {"params": {"slug": "best-laundry-service-in-Dadri"}},
        {"params": {"slug": "best-laundry-service-in-Dhoom-Manikpur"}},
        {"params": {"slug": "best-laundry-service-in-Girdharpur"}},
        {"params": {"slug": "best-laundry-service-in-Ecotech-12"}},
        {"params": {"slug": "best-laundry-service-in-BETA-I"}},
        {"params": {"slug": "best-laundry-service-in-BETA-II"}},
        {"params": {"slug": "best-laundry-service-in-MU-II"}},
        {"params": {"slug": "best-laundry-service-in-GAMMA-II"}},
        {"params": {"slug": "best-laundry-service-in-GAMMA-I"}},
        {"params": {"slug": "best-laundry-service-in-OMEGA-I"}},
        {"params": {"slug": "best-laundry-service-in-OMEGA-II"}},
        {"params": {"slug": "best-laundry-service-in-PHI-III"}},
        {"params": {"slug": "best-laundry-service-in-PHI-II"}},
        {"params": {"slug": "best-laundry-service-in-ETA-I"}},
        {"params": {"slug": "best-laundry-service-in-Ecotech-1"}},
        {"params": {"slug": "best-laundry-service-in-CHI-IV"}},
        {"params": {"slug": "best-laundry-service-in-CHI-III"}},
        {"params": {"slug": "best-laundry-service-in-CHI-II"}},
        {"params": {"slug": "best-laundry-service-in-CHI-V"}},
        {"params": {"slug": "best-laundry-service-in-DELTA-I"}},
        {"params": {"slug": "best-laundry-service-in-DELTA-III"}},
        {"params": {"slug": "best-laundry-service-in-DELTA-II"}},
        {"params": {"slug": "best-laundry-service-in-PHI-IV"}},
      ],
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    return {
      props: { slug: params.slug },
    };
  }
  
  export default function LaundryService({ slug }) {


    return (
      <main className="flex-grow">
        
    <Head>
      <title>Dhode - Premium Laundry Services | Fast & Reliable {slug.replace(/-/g," ")} </title>
      <meta 
        name="description" 
        content={"Dhode offers premium laundry services with fast pick-up and delivery."+ slug.replace(/-/g," ") +" Experience eco-friendly, reliable, and affordable washing solutions for your everyday laundry needs. "}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta 
        name="keywords" 
        content={"Dhode, laundry services, premium laundry, fast laundry, eco-friendly washing, laundry pickup and delivery, affordable laundry services,"+slug.replace(/-/g," ")}
      />
      <meta name="author" content="Dhode Team" />
      <meta property="og:title" content={"Dhode - Premium Laundry Services"+slug.replace(/-/g," ")} />
      <meta 
        property="og:description" 
        content={"Looking for reliable laundry services? Dhode offers eco-friendly, fast, and affordable laundry solutions tailored to your needs. Book now!"+slug.replace(/-/g," ")} 
      />
      <meta property="og:image" content="/images/dhode-og-image.jpg" />
      <meta property="og:url" content="https://www.dhode.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dhode - Fast & Reliable Laundry Services" />
      <meta 
        name="twitter:description" 
        content={"Premium laundry services made easy with Dhode. Schedule your laundry pick-up today and enjoy clean clothes, hassle-free! "+ slug.replace(/-/g," ")} 
      />
      <meta name="twitter:image" content="/images/dhode-twitter-image.jpg" />
      <link rel="canonical" href="https://www.dhode.com" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>


      {/* Page Illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustrationSvg />
      </div>

      {/* Page sections */}
      <HeroHome />
      <Stats />
      {/* <Carousel /> */}
      {/* <Tabs /> */}
      <Process />
      {/* <PricingTables /> */}
      {/* <TestimonialsBlocks /> */}
      <FeaturedBlocks />
      <Cta />
    </main>
    );
  }
  