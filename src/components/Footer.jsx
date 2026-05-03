export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="logo"
              className="w-30 h-10 object-cover rounded-full"
            />
          </div>
          <p className="mt-3 text-white">
            Creating spaces that inspire and elevate the human experience.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3">
            Ikeja, Lagos State, Nigeria
          </p>
          <p>info@variotech.ng</p>
        </div>
      </div>
      <p className="text-center text-gray-700 mt-8">
        © {new Date().getFullYear()} Variotech Solutions. <br />All Rights Reserved.
      </p>
    </footer>
  );
}
