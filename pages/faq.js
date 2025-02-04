import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content
export default function FAQ() {



  return (

    <main className="flex-grow">
   <Head>
  <title>FAQ Dhode - Your Questions Answered</title>
  <meta 
    name="description" 
    content="Got questions about Dhode's laundry services? Find answers to common queries related to our processes, eco-friendly practices, pricing, and more. Learn how we make laundry hassle-free for you." 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta 
    name="keywords" 
    content="Dhode FAQ, laundry service questions, eco-friendly laundry, Dhode services, laundry pricing, customer service FAQ, laundry solutions" 
  />
  <meta name="author" content="Dhode Team" />
  <meta property="og:title" content="FAQ Dhode - Your Questions Answered" />
  <meta 
    property="og:description" 
    content="Explore Dhode's FAQ section to find detailed answers about our laundry services, eco-friendly practices, and everything you need to know about our offerings." 
  />
  <meta property="og:image" content="/images/dhode-faq-og.jpg" />
  <meta property="og:url" content="https://www.dhode.com/faq" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="FAQ Dhode - Your Questions Answered" />
  <meta 
    name="twitter:description" 
    content="Find answers to your questions about Dhode’s laundry services. Get details on our pricing, eco-friendly processes, and how we ensure top-quality results." 
  />
  <meta name="twitter:image" content="/images/dhode-faq-twitter.jpg" />
  <link rel="canonical" href="https://www.dhode.com/faq" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>


<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
    <div className="pt-32 pb-10">
      {/* Hero content */}
      <div>
        {/* Content */}
        <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
            Dhode - Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            Have questions about Dhode? Here’s everything you need to know about our convenient and professional laundry 
            services, including how it works, pricing, scheduling, and more.
          </p>

          {/* FAQ Section */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="300">
            <h2 className="h2 text-3xl font-bold mb-6">1. About Dhode</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What is Dhode?</h3>
                <p>
                  Dhode is an on-demand laundry and dry-cleaning service that offers pickup, washing, ironing, dry cleaning, 
                  and delivery straight to your doorstep. Our goal is to make laundry hassle-free.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Where is Dhode available?</h3>
                <p>
                  Dhode operates in multiple cities. To check if we are available in your area, enter your zip code in our app or 
                  website.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What services does Dhode provide?</h3>
                <p>
                  We offer washing, drying, ironing, stain removal, dry cleaning, and specialized fabric care. Our services are tailored to 
                  ensure your clothes are cleaned with the best techniques.
                </p>
              </li>
            </ul>
          </div>

          {/* 2. Scheduling & Pickup */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
            <h2 className="h2 text-3xl font-bold mb-6">2. Scheduling & Pickup</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How do I schedule a pickup?</h3>
                <p>
                  Scheduling a pickup is simple! Open the Dhode app, choose your preferred date and time, and confirm your 
                  order. A driver will be assigned to collect your laundry.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Can I reschedule my laundry pickup?</h3>
                <p>
                  Yes, you can reschedule or cancel your pickup through the app before the driver arrives.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How long does it take to get my laundry back?</h3>
                <p>
                  Standard service takes 24-48 hours. For express service, we deliver within 12 hours.
                </p>
              </li>
            </ul>
          </div>

          {/* 3. Pricing & Payment */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
            <h2 className="h2 text-3xl font-bold mb-6">3. Pricing & Payment</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How much does Dhode cost?</h3>
                <p>
                  Pricing varies based on the weight of your laundry, service type (wash & fold, dry cleaning), and any 
                  additional requests.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p>
                  We accept credit/debit cards, PayPal, UPI, and digital wallets. Cash payments are not accepted.
                </p>
              </li>
            </ul>
          </div>

          {/* 4. Laundry Care & Quality */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="600">
            <h2 className="h2 text-3xl font-bold mb-6">4. Laundry Care & Quality</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Do you separate colors?</h3>
                <p>
                  Yes, we sort your laundry into whites, lights, and darks before washing.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What detergents do you use?</h3>
                <p>
                  We use eco-friendly detergents that are gentle on fabrics and safe for sensitive skin.
                </p>
              </li>
            </ul>
          </div>

          {/* 5. Account & Support */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="700">
            <h2 className="h2 text-3xl font-bold mb-6">5. Account & Support</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How do I contact customer support?</h3>
                <p>
                  You can reach out to our 24/7 support team via the app chat, email, or phone.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How do I reset my password?</h3>
                <p>
                  Click "Forgot Password" on the login screen and follow the instructions to reset it.
                </p>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="900">
            <h2 className="h2 text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-11">
              Contact our support team, or download the app to experience seamless laundry services!
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
