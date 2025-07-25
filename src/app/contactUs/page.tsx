import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="bg-white py-12 px-6 md:px-16 min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
          <p className="text-gray-600">
            We’re here to help! Whether you have a question, need assistance with your order,
            or just want to get in touch — the Zutta team is always ready to assist you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p>Dhobisar Postkot, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Phone Number</h4>
                <p>+977-9867882341, 9845632142</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Email Address</h4>
                <p>zuttapod2035@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Working Hours</h4>
                <p>
                  Monday to Friday: 09:00 - 17:30 <br />
                  Saturday & Sunday: 10:00 - 15:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.030967225317!2d85.32087457518889!3d27.71492942404959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913cfc8b317%3A0x76330fe1dc7f7f5a!2sDhobichaur%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1655968181597!5m2!1sen!2snp"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
