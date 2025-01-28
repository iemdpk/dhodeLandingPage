import Carousel from '../src/partials/Carousel';
import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroHome from '../src/partials/HeroHome';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import PricingTables from '../src/partials/PricingTables';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import TestimonialsBlocks from '../src/partials/TestimonialsBlocks';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content
export default function Home() {



  return (

    <main className="flex-grow">

    <Head>
      <title>Dhode - Premium Laundry Services | Fast & Reliable</title>
      <meta 
        name="description" 
        content="Dhode offers premium laundry services with fast pick-up and delivery. Experience eco-friendly, reliable, and affordable washing solutions for your everyday laundry needs." 
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta 
        name="keywords" 
        content="Dhode, laundry services, premium laundry, fast laundry, eco-friendly washing, laundry pickup and delivery, affordable laundry services, best laundry service in [Your City]" 
      />
      <meta name="author" content="Dhode Team" />
      <meta property="og:title" content="Dhode - Premium Laundry Services" />
      <meta 
        property="og:description" 
        content="Looking for reliable laundry services? Dhode offers eco-friendly, fast, and affordable laundry solutions tailored to your needs. Book now!" 
      />
      <meta property="og:image" content="/images/dhode-og-image.jpg" />
      <meta property="og:url" content="https://www.dhode.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dhode - Fast & Reliable Laundry Services" />
      <meta 
        name="twitter:description" 
        content="Premium laundry services made easy with Dhode. Schedule your laundry pick-up today and enjoy clean clothes, hassle-free!" 
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
