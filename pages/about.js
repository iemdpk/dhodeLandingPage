import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content
export default function About() {



  return (

    <main className="flex-grow">
    <Head>
      <title>About Dhode - Our Journey in Laundry Services</title>
      <meta 
        name="description" 
        content="Learn more about Dhode, our commitment to premium laundry services, eco-friendly practices, and customer satisfaction. Discover how we make laundry hassle-free for you." 
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta 
        name="keywords" 
        content="About Dhode, Dhode laundry story, laundry service mission, eco-friendly laundry, Dhode team, best laundry service, professional laundry solutions" 
      />
      <meta name="author" content="Dhode Team" />
      <meta property="og:title" content="About Dhode - Our Story & Mission" />
      <meta 
        property="og:description" 
        content="At Dhode, we are dedicated to providing top-quality, eco-friendly laundry services with a focus on customer satisfaction. Learn more about our journey and values." 
      />
      <meta property="og:image" content="/images/dhode-about-og.jpg" />
      <meta property="og:url" content="https://www.dhode.com/about" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Dhode - Our Story & Commitment" />
      <meta 
        name="twitter:description" 
        content="Discover Dhode’s journey, values, and commitment to providing the best laundry services. We focus on quality, eco-friendliness, and customer satisfaction." 
      />
      <meta name="twitter:image" content="/images/dhode-about-twitter.jpg" />
      <link rel="canonical" href="https://www.dhode.com/about" />
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
          Dhode: Revolutionizing Laundry Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
          Tired of spending hours on laundry? Dhode is here to simplify your life! Our app offers professional laundry services with pick-up, wash, and delivery options tailored to your schedule. Whether you're at home, work, or on the go, Dhode ensures your clothes are cleaned, pressed, and delivered with care. Save time, stay fresh, and let us handle the laundry while you focus on what truly matters.
        </p>

        {/* Expanded Introduction */}
        <div className="mt-8" data-aos="fade-down" data-aos-delay="200">
          <h2 className="h2 text-3xl font-bold mb-4">Why Choose Dhode?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            In today's fast-paced world, time is a luxury. Dhode understands the value of your time and aims to provide a seamless laundry experience. Our mission is to make laundry day a thing of the past by offering a service that is not only convenient but also reliable and affordable. With Dhode, you can say goodbye to the endless cycles of washing, drying, and folding, and hello to more free time and fresh, clean clothes.
          </p>
        </div>

        {/* CTA form */}
        <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
          <div className="flex flex-col sm:flex-row max-w-sm mx-auto sm:max-w-md md:mx-0">
            {/* <input
              type="tel"
              placeholder="Phone number"
              aria-label="Phone number"
              className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
            /> */}
          </div>
        </form>

        {/* Key Features Section */}
        <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
          <h2 className="h2 text-3xl font-bold mb-6">Key Features of Dhode</h2>
          <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
            <li className="flex items-center mb-4">
              <span><strong>Ultimate Convenience</strong>: Dhode eliminates the hassle of laundry day. Schedule pick-ups and deliveries at your preferred time and location, making laundry effortless.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Expert Care</strong>: Your clothes are treated with the utmost care by professionals using advanced cleaning techniques and eco-friendly products.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Flexible Scheduling</strong>: Whether it's a last-minute request or a recurring service, Dhode adapts to your busy lifestyle, ensuring your laundry is always on time.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Affordable Pricing</strong>: Enjoy premium laundry services without breaking the bank. Dhode offers competitive rates tailored to your needs.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Eco-Friendly Solutions</strong>: We prioritize sustainability by using environmentally friendly detergents and energy-efficient processes.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Real-Time Tracking</strong>: Stay updated on the status of your laundry with our real-time tracking feature. Know exactly when your clothes are picked up, washed, and delivered.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Customizable Services</strong>: Choose from a variety of services, including dry cleaning, ironing, and stain removal, to meet your specific needs.</span>
            </li>
            <li className="flex items-center mb-4">
              <span><strong>Customer Support</strong>: Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.</span>
            </li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
          <h2 className="h2 text-3xl font-bold mb-6">How Dhode Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Using Dhode is simple and straightforward. Here's a step-by-step guide to getting started:
          </p>
          <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400">
            <li className="mb-4"><strong>Download the App</strong>: Start by downloading the Dhode app from the App Store or Google Play.</li>
            <li className="mb-4"><strong>Create an Account</strong>: Sign up using your email or phone number to create your Dhode account.</li>
            <li className="mb-4"><strong>Schedule a Pickup</strong>: Choose a convenient time and location for your laundry pickup.</li>
            <li className="mb-4"><strong>Select Your Services</strong>: Customize your order by selecting the services you need, such as washing, dry cleaning, or ironing.</li>
            <li className="mb-4"><strong>Track Your Order</strong>: Use the app to track the status of your laundry in real-time.</li>
            <li className="mb-4"><strong>Receive Your Laundry</strong>: Your clean, fresh clothes will be delivered to your doorstep at the scheduled time.</li>
          </ol>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12" data-aos="fade-down" data-aos-delay="600">
          <h2 className="h2 text-3xl font-bold mb-6">What Our Customers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 italic">"Dhode has been a game-changer for me. I no longer have to worry about laundry, and the service is always reliable and affordable."</p>
              <p className="mt-4 font-bold">- Sarah L.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 italic">"I love how easy it is to schedule pickups and deliveries. The app is user-friendly, and the customer support is excellent."</p>
              <p className="mt-4 font-bold">- John D.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 italic">"The quality of service is outstanding. My clothes always come back looking and smelling fresh. Highly recommend Dhode!"</p>
              <p className="mt-4 font-bold">- Emily R.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
     

        {/* FAQ Section */}
        <div className="mt-12" data-aos="fade-down" data-aos-delay="800">
          <h2 className="h2 text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="h3 text-xl font-bold mb-2">How do I schedule a pickup?</h3>
              <p className="text-gray-600 dark:text-gray-400">Scheduling a pickup is easy! Simply open the Dhode app, select your preferred time and location, and confirm your order. Our team will take care of the rest.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="h3 text-xl font-bold mb-2">What types of laundry services do you offer?</h3>
              <p className="text-gray-600 dark:text-gray-400">We offer a wide range of services, including washing, drying, ironing, dry cleaning, and stain removal. You can customize your order to meet your specific needs.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="h3 text-xl font-bold mb-2">Is Dhode available in my area?</h3>
              <p className="text-gray-600 dark:text-gray-400">Dhode is currently available in select cities. To check if we service your area, simply enter your location in the app or on our website.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="h3 text-xl font-bold mb-2">How do I track my order?</h3>
              <p className="text-gray-600 dark:text-gray-400">You can track your order in real-time using the Dhode app. We'll send you updates at every stage of the process, from pickup to delivery.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="900">
          <h2 className="h2 text-3xl font-bold mb-6">Ready to Simplify Your Life?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Join thousands of satisfied customers who have made the switch to Dhode. Download the app today and experience the ultimate convenience in laundry services.</p>
          <a className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300" href="https://play.google.com/store/apps/details?id=com.laundry.dhode">
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
