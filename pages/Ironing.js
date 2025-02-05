import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content


export default function Ironing() {



  return (
<main className="flex-grow">

<Head>
  <title>Premium Ironing Service - Dhode</title>
  <meta 
    name="description" 
    content="Get professional ironing services with Dhode. We carefully press and freshen your clothes, ensuring they look sharp, wrinkle-free, and ready to wear." 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta 
    name="keywords" 
    content="ironing service, Dhode ironing, garment pressing, wrinkle-free clothes, professional ironing, shirt ironing, formal wear pressing" 
  />
  <meta name="author" content="Dhode Team" />
  
  {/* Open Graph (OG) for Social Media */}
  <meta property="og:title" content="Premium Ironing Service - Dhode" />
  <meta 
    property="og:description" 
    content="Trust Dhode&apos;s ironing service to keep your clothes sharp and wrinkle-free. We provide expert pressing for formal wear, casual clothes, and more." 
  />
  <meta property="og:image" content="/images/dhode-ironing-og.jpg" />
  <meta property="og:url" content="https://www.dhode.com/ironing" />
  <meta property="og:type" content="website" />

  {/* Twitter Card for Social Sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Premium Ironing Service - Dhode" />
  <meta 
    name="twitter:description" 
    content="Revive your clothes with Dhode&apos;s professional ironing service. We expertly press shirts, trousers, and more, leaving them wrinkle-free and crisp." 
  />
  <meta name="twitter:image" content="/images/dhode-ironing-twitter.jpg" />

  {/* Other Metadata */}
  <link rel="canonical" href="https://www.dhode.com/ironing" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>

<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
    <div className="pt-32 pb-10">
      {/* Ironing Service Header */}
      <div>
        <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
            Premium Ironing Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            Keep your clothes looking sharp and wrinkle-free with Dhode&apos;s expert ironing service. We use advanced techniques to press all types of garments, from formal wear to casual clothes, ensuring they are fresh, neat, and ready to wear.
          </p>

          {/* Service Features */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="300">
            <h2 className="h2 text-3xl font-bold mb-6">🧥 Why Choose Our Ironing Service?</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">✨ Expert Garment Pressing</h3>
                <p>
                  We specialize in pressing shirts, trousers, dresses, and more, ensuring crisp, wrinkle-free clothes.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🧴 Gentle, Fabric-Specific Care</h3>
                <p>
                  Each garment is treated with the appropriate temperature and technique, preserving the fabric while achieving perfect results.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">⏳ Fast & Reliable Service</h3>
                <p>
                  Enjoy quick and efficient ironing with a 24-48 hour turnaround time for standard items.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">🌱 Eco-Friendly Process</h3>
                <p>
                  We use eco-friendly methods that are gentle on your clothes and the environment.
                </p>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
            <h2 className="h2 text-3xl font-bold mb-6">⚡ How It Works</h2>
            <ol className="list-decimal pl-5 max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4"><strong>Schedule Pickup:</strong> Book a pickup for your clothes from home or office.</li>
              <li className="mb-4"><strong>Inspection & Care:</strong> Each garment is inspected for fabric type and condition before pressing.</li>
              <li className="mb-4"><strong>Professional Ironing:</strong> Clothes are pressed using the right techniques for a perfect finish.</li>
              <li className="mb-4"><strong>Finishing & Packaging:</strong> Your garments are neatly pressed, folded, and packaged.</li>
              <li className="mb-4"><strong>Delivery:</strong> Freshly ironed clothes are delivered back to you, wrinkle-free and ready to wear.</li>
            </ol>
          </div>

          {/* Pricing */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
            <h2 className="h2 text-3xl font-bold mb-6">💰 Transparent Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our ironing service starts at **₹99 per item**, with discounts available for bulk orders and premium garments.
            </p>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="600">
            <h2 className="h2 text-3xl font-bold mb-6">🗣️ What Our Customers Say</h2>
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-400">
              Dhode&apos;s ironing service is a game-changer! My shirts are always perfectly pressed, and they come back looking brand new! – <strong>Amit Verma</strong>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="700">
            <h2 className="h2 text-3xl font-bold mb-6">📞 Book an Ironing Pickup Today!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Get your clothes looking sharp and ready to wear. Schedule an ironing pickup now!
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
