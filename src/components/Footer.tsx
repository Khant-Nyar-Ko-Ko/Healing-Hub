const Footer = () => {
  return (
    <footer className="py-8 text-white bg-primary">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">About Us</h3>
          <p className="text-sm text-white">
            We are committed to providing the best mental health care resources
            to help you live a balanced and healthy life.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
          <li>
              <a href="/auth/therapist-login" className="text-white hover:text-white">
                For Therapist
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/chat" className="text-white hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-white">Email: support@healinghub.com</p>
          <p className="text-sm text-white">Phone: +66 234 567 890</p>
          <p className="text-sm text-white">
            Location: MFU Medical Wellness Center, Mae Fah Luang University
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex flex-col">
            <p className="text-sm">6731503031 Ratthaphum Wanthamat</p>
            <p className="text-sm">6531503148 Khin Kyawt Shinn</p>
            <p className="text-sm">6631503061 Khant Nyar Ko Ko</p>
            <p className="text-sm">6631503038 Wasan Nachai</p>
            <p className="text-sm">6631503115 Phattarapon Kakad</p>
            <p className="text-sm">6531503189 Thet Swe Lin </p>
            <p className="text-sm">6531503058 Pittaya namab</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-center text-white">
        &copy; 2024 Healing Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
