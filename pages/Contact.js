import FeaturedBlocks from '../src/partials/FeaturedBlocks';
import HeroAbout from '../src/partials/HeroAbout';
import PageIllustrationSvg from '../src/assets/svg/PageIllustrationSvg';
import Process from '../src/partials/Process';
import Stats from '../src/partials/Stats';
import Tabs from '../src/partials/Tabs';
import Cta from '../src/partials/Cta';
import Head from 'next/head';
// Page content


export default function Contact() {



  return (

    <main className="flex-grow">

<Head>
  <title>Contact Dhode - Get in Touch with Us</title>
  <meta 
    name="description" 
    content="Need assistance with Dhode’s laundry services? Contact us via phone, email, or visit our office. Our team is ready to help you with any inquiries or support requests." 
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta 
    name="keywords" 
    content="Dhode contact, laundry service support, Dhode customer care, laundry assistance, Dhode phone number, laundry help, Dhode email, get in touch with Dhode" 
  />
  <meta name="author" content="Dhode Team" />
  
  {/* Open Graph (OG) for Social Media */}
  <meta property="og:title" content="Contact Dhode - Get in Touch with Us" />
  <meta 
    property="og:description" 
    content="Reach out to Dhode for any inquiries or support regarding our laundry services. Call, email, or visit us for assistance." 
  />
  <meta property="og:image" content="/images/dhode-contact-og.jpg" />
  <meta property="og:url" content="https://www.dhode.com/contact" />
  <meta property="og:type" content="website" />

  {/* Twitter Card for Social Sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Dhode - Get in Touch with Us" />
  <meta 
    name="twitter:description" 
    content="Looking for support? Contact Dhode via phone, email, or visit us. Our customer support team is here to assist you." 
  />
  <meta name="twitter:image" content="/images/dhode-contact-twitter.jpg" />

  {/* Other Metadata */}
  <link rel="canonical" href="https://www.dhode.com/contact" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>



<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
    <div className="pt-32 pb-10">
      {/* Contact Us Header */}
      <div>
        <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
            Have a question or need support? Reach out to us via email, phone, or visit us at our office. We're here to help you with 
            all your laundry needs!
          </p>

          {/* Contact Information */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="300">
            <h2 className="h2 text-3xl font-bold mb-6">📞 Get in Touch</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📍 Office Address</h3>
                <p>
                  Xu 1, Dhode Laundry Services <br />
                  Open: Monday - Saturday (9 AM - 7 PM)
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📧 Email Us</h3>
                <p>
                  <a href="mailto:info@dhode.com" className="text-blue-600 hover:underline">
                    info@dhode.com
                  </a>
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📞 Call Us</h3>
                <p>
                  <a href="tel:+918709476349" className="text-blue-600 hover:underline">
                    +91 8709476349
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* Inquiry Form */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="400">
            <h2 className="h2 text-3xl font-bold mb-6">📩 Send Us a Message</h2>
            <form className="max-w-lg mx-auto md:max-w-none">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">Your Name</label>
                <input type="text" placeholder="Enter your name" className="form-input w-full border p-3 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">Your Email</label>
                <input type="email" placeholder="Enter your email" className="form-input w-full border p-3 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">Your Message</label>
                <textarea rows="4" placeholder="Write your message here..." className="form-input w-full border p-3 rounded-lg" required></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 w-full">
                Submit
              </button>
            </form>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-12" data-aos="fade-down" data-aos-delay="500">
            <h2 className="h2 text-3xl font-bold mb-6">❓ Frequently Asked Questions</h2>
            <ul className="max-w-2xl mx-auto md:max-w-none text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How can I track my laundry order?</h3>
                <p>
                  You can track your laundry status in real-time through our Dhode mobile app. Simply log in and check your order status.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What should I do if my clothes are damaged?</h3>
                <p>
                  If you find any damage to your clothes, contact our support team immediately via phone or email. We will investigate the 
                  issue and provide a resolution.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">How do I reschedule or cancel my pickup?</h3>
                <p>
                  You can easily reschedule or cancel a pickup from your Dhode app or call us at <a href="tel:+918709476349" className="text-blue-600 hover:underline">
                  +91 8709476349</a> at least 2 hours before your scheduled time.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold mb-2">What areas does Dhode service?</h3>
                <p>
                  We currently operate in multiple cities. Enter your ZIP code in the app to see if we service your location.
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="600">
            <h2 className="h2 text-3xl font-bold mb-6">📲 Connect With Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Follow us on social media for updates, offers, and laundry tips!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center" data-aos="fade-down" data-aos-delay="700">
            <h2 className="h2 text-3xl font-bold mb-6">Need More Help?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Our customer support team is available to assist you. Call us or send an email, and we'll get back to you as soon as possible.
            </p>
            <a className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300" 
               href="mailto:info@dhode.com">
              Email Us Now
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
