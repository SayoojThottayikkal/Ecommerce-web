import Button from "@/components/ui/Button";
import { Mail, Phone } from "lucide-react";
import React from "react";

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex gap-6 flex-wrap lg:flex-nowrap">
      <div className="shadow w-full lg:w-2/6 p-5 bg-white rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Phone
              className="bg-red-700 text-white rounded-full p-2"
              width={40}
              height={40}
            />
            <h2 className="text-black font-bold text-xl">Call To Us</h2>
          </div>
          <div className="text-gray-600 mt-4">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>

        <div className="border border-gray-300 my-5"></div>

        <div>
          <div className="flex items-center gap-2">
            <Mail
              className="bg-red-700 text-white rounded-full p-2"
              width={40}
              height={40}
            />
            <h2 className="text-black font-bold text-xl">Write To US</h2>
          </div>
          <div className="text-gray-600 mt-4">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      <div className="shadow w-full bg-white rounded-lg p-5">
        <form action="" className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded"
            />
          </div>
          <div className="text-right">
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
