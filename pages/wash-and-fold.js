import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content


export default function washFold() {



  return (
<main className="flex-grow">

<Head>
  <title>Wash & Fold Laundry Service - Dhode</title>
  <meta 
    name="description" 
    content="Experience hassle-free laundry with Dhode&apos;s Wash & Fold service. We pick up, wash, dry, fold, and deliver your clothes fresh and clean, saving you time and effort." 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta 
    name="keywords" 
    content="Wash and fold laundry, Dhode laundry service, clothes cleaning, pickup and delivery laundry, laundry folding, quick laundry service, affordable laundry" 
  />
  <meta name="author" content="Dhode Team" />
  
  {/* Open Graph (OG) for Social Media */}
  <meta property="og:title" content="Wash & Fold Laundry Service - Dhode" />
  <meta 
    property="og:description" 
    content="Get professional laundry care with Dhode&apos;s Wash & Fold service. We clean, dry, and fold your clothes with care and deliver them fresh to your doorstep." 
  />
  <meta property="og:image" content="/images/dhode-wash-fold-og.jpg" />
  <meta property="og:url" content="https://www.dhode.com/wash-fold" />
  <meta property="og:type" content="website" />

  {/* Twitter Card for Social Sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wash & Fold Laundry Service - Dhode" />
  <meta 
    name="twitter:description" 
    content="Say goodbye to laundry day stress! Dhode&apos;s Wash & Fold service ensures clean, neatly folded clothes delivered right to you." 
  />
  <meta name="twitter:image" content="/images/dhode-wash-fold-twitter.jpg" />

  {/* Other Metadata */}
  <link rel="canonical" href="https://www.dhode.com/wash-fold" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>

<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
    <div className="pt-32 pb-10">
      {/* Wash & Fold Service Header */}
      <div>
        <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
            Wash & Fold Laundry Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            Say goodbye to laundry stress! Dhode&apos;s Wash & Fold service ensures your clothes are professionally cleaned, neatly folded, and delivered fresh to your doorstep. Save time and enjoy crisp, clean clothes without the hassle.
          </p>

          {/* Service Features */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="300">
            <h2 className="h2 text-3xl font-bold mb-6">🧺 Why Choose Our Wash & Fold Service?</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📌 Hassle-Free Laundry</h3>
                <p>
                  No more sorting, washing, or drying—just drop off your laundry or schedule a pickup, and we take care of the rest.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🌀 Advanced Cleaning Techniques</h3>
                <p>
                  We use high-quality detergents and fabric-friendly techniques to clean and protect your clothes.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">⏳ Quick Turnaround Time</h3>
                <p>
                  Get your clothes washed, dried, and folded within **24-48 hours**. Perfect for busy professionals and families.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🚚 Convenient Pickup & Delivery</h3>
                <p>
                  Choose your preferred time and location, and we&apos;ll handle the rest. Fresh laundry delivered to your doorstep!
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🌱 Eco-Friendly Cleaning</h3>
                <p>
                  Our environmentally friendly detergents and energy-efficient machines ensure sustainability.
                </p>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
            <h2 className="h2 text-3xl font-bold mb-6">⚡ How It Works</h2>
            <ol className="list-decimal pl-5 max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4"><strong>Schedule Pickup:</strong> Book online or via our mobile app.</li>
              <li className="mb-4"><strong>We Collect:</strong> Our team picks up your laundry from your location.</li>
              <li className="mb-4"><strong>Professional Cleaning:</strong> Clothes are washed, dried, and folded with care.</li>
              <li className="mb-4"><strong>Delivery:</strong> Your laundry is delivered fresh and neatly folded.</li>
            </ol>
          </div>

          {/* Pricing */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
            <h2 className="h2 text-3xl font-bold mb-6">💰 Affordable Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We offer transparent pricing with no hidden fees. Prices are based on weight, starting at **₹99 per kg**.
            </p>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="600">
            <h2 className="h2 text-3xl font-bold mb-6">🗣️ What Our Customers Say</h2>
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-400">
              Dhode&apos;s wash & fold service is a lifesaver! My clothes come back fresh and neatly folded every time. Highly recommend! – <strong>Rohit Sharma</strong>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="700">
            <h2 className="h2 text-3xl font-bold mb-6">📞 Book Your Laundry Pickup Today!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Experience premium laundry care at an affordable price. Schedule your pickup now!
            </p>
            <a className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300" 
               href="https://play.google.com/store/apps/details?id=com.laundry.dhode">
              Download Now
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

</main>

  );
}
