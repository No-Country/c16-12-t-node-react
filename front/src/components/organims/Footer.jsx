import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-primary-300 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Columna 1 */}
        <div className="col-span-1 flex items-center">
          <img src="../src/assets/img/logo.png" alt="Logo" className="h-16" />
        </div>
        {/* Columna 2 */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-6">Nuestros servicios</h3>
          <ul className="space-y-2">
            <li><a href="#">Como funciona</a></li>
            <li><a href="#">Ofrece un viaje</a></li>
            <li><a href="#">Busca un viaje</a></li>
          </ul>
        </div>
        {/* Columna 3 */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-6">Contactanos</h3>
          <p className="mb-4">3343 589 324</p>
          <p className="mb-4">Gmail: viajarcar@gmail.com</p>
        </div>
        {/* Columna 4 */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-6">Siguenos</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com"><FaFacebook className="text-black text-xl" /></a>
            <a href="https://www.instagram.com"><FaInstagram className="text-black text-xl" /></a>
            <a href="https://www.twitter.com"><FaTwitter className="text-black text-xl" /></a>
          </div>
        </div>
        {/* Columna 5 */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-6">Links de interes</h3>
          <ul className="space-y-2">
            <li><a href="#">FAQS</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;