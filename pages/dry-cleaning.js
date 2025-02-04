import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content


export default function dry() {



  return (
<main className="flex-grow">

<Head>
  <title>Premium Dry Cleaning Service - Dhode</title>
  <meta 
    name="description" 
    content="Get professional dry cleaning with Dhode. We handle delicate fabrics, formal wear, and special garments with expert care, ensuring they look fresh and pristine." 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta 
    name="keywords" 
    content="dry cleaning service, Dhode dry cleaning, professional garment care, suit cleaning, dress dry cleaning, delicate fabric cleaning, stain removal" 
  />
  <meta name="author" content="Dhode Team" />
  
  {/* Open Graph (OG) for Social Media */}
  <meta property="og:title" content="Premium Dry Cleaning Service - Dhode" />
  <meta 
    property="og:description" 
    content="Trust Dhode’s dry cleaning service for expert garment care. We remove tough stains and restore your clothes to their best condition." 
  />
  <meta property="og:image" content="/images/dhode-drycleaning-og.jpg" />
  <meta property="og:url" content="https://www.dhode.com/drycleaning" />
  <meta property="og:type" content="website" />

  {/* Twitter Card for Social Sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Premium Dry Cleaning Service - Dhode" />
  <meta 
    name="twitter:description" 
    content="Revive your clothes with Dhode’s professional dry cleaning. We clean, press, and restore your garments with expert care." 
  />
  <meta name="twitter:image" content="/images/dhode-drycleaning-twitter.jpg" />

  {/* Other Metadata */}
  <link rel="canonical" href="https://www.dhode.com/drycleaning" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>

<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
    <div className="pt-32 pb-10">
      {/* Dry Cleaning Service Header */}
      <div>
        <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
            Premium Dry Cleaning Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            Keep your clothes looking brand new with Dhode’s expert dry cleaning. We use advanced techniques to clean delicate fabrics, formal wear, and special garments, ensuring they remain fresh, spotless, and well-maintained.
          </p>

          {/* Service Features */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="300">
            <h2 className="h2 text-3xl font-bold mb-6">🧥 Why Choose Our Dry Cleaning Service?</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">✨ Expert Garment Care</h3>
                <p>
                  We specialize in cleaning suits, sarees, lehengas, coats, and delicate fabrics with precision.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🛑 Tough Stain Removal</h3>
                <p>
                  Our professional cleaning removes deep stains, oil, and dirt without damaging the fabric.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📌 Fabric-Specific Cleaning</h3>
                <p>
                  Each garment is treated with customized cleaning methods for optimal care.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">⏳ Fast & Reliable Service</h3>
                <p>
                  Get your clothes cleaned, pressed, and delivered in **48-72 hours**.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🌱 Eco-Friendly Chemicals</h3>
                <p>
                  We use non-toxic, environment-friendly solvents to keep your clothes safe and fresh.
                </p>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
            <h2 className="h2 text-3xl font-bold mb-6">⚡ How It Works</h2>
            <ol className="list-decimal pl-5 max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4"><strong>Schedule Pickup:</strong> Book a pickup from your home or office.</li>
              <li className="mb-4"><strong>Fabric Inspection:</strong> We examine your garments to determine the best cleaning method.</li>
              <li className="mb-4"><strong>Professional Dry Cleaning:</strong> Clothes are treated with advanced cleaning solutions.</li>
              <li className="mb-4"><strong>Finishing & Packaging:</strong> Each item is pressed, folded, and packaged with care.</li>
              <li className="mb-4"><strong>Delivery:</strong> Fresh, clean garments are returned to your doorstep.</li>
            </ol>
          </div>

          {/* Pricing */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
            <h2 className="h2 text-3xl font-bold mb-6">💰 Transparent Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our dry cleaning service starts at **₹149 per item**, with customized pricing for premium garments.
            </p>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="600">
            <h2 className="h2 text-3xl font-bold mb-6">🗣️ What Our Customers Say</h2>
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-400">
              "Dhode saved my favorite dress! Their dry cleaning is top-notch, and the quality is excellent!" – <strong>Neha Gupta</strong>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="700">
            <h2 className="h2 text-3xl font-bold mb-6">📞 Book a Dry Cleaning Pickup Today!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Keep your clothes looking brand new. Schedule a dry cleaning pickup now!
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
