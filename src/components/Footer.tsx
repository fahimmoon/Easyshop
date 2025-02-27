import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Truck, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About eBay</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Company Info</a></li>
              <li><a href="#" className="hover:text-white transition">News</a></li>
              <li><a href="#" className="hover:text-white transition">Investors</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Government Relations</a></li>
              <li><a href="#" className="hover:text-white transition">Advertise with Us</a></li>
              <li><a href="#" className="hover:text-white transition">Policies</a></li>
            </ul>
          </div>
          
          {/* Community section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Announcements</a></li>
              <li><a href="#" className="hover:text-white transition">Discussion Boards</a></li>
              <li><a href="#" className="hover:text-white transition">eBay Giving Works</a></li>
              <li><a href="#" className="hover:text-white transition">eBay for Charity</a></li>
              <li><a href="#" className="hover:text-white transition">eBay Community</a></li>
            </ul>
          </div>
          
          {/* Help & Contact section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help & Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Seller Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">eBay Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Center</a></li>
              <li><a href="#" className="hover:text-white transition">Purchase Protection</a></li>
              <li><a href="#" className="hover:text-white transition">Security Center</a></li>
              <li><a href="#" className="hover:text-white transition">Site Map</a></li>
            </ul>
          </div>
          
          {/* Stay Connected section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition">
                <Youtube size={20} />
              </a>
            </div>
            
            <h3 className="text-white text-lg font-semibold mb-4">eBay App</h3>
            <div className="flex space-x-2">
              <a href="#" className="bg-black px-4 py-2 rounded flex items-center hover:bg-gray-900 transition">
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black px-4 py-2 rounded flex items-center hover:bg-gray-900 transition">
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck size={24} className="mb-2 text-blue-400" />
              <h4 className="text-white text-sm font-medium mb-1">Buyer Protection</h4>
              <p className="text-xs text-gray-400">Money back guarantee</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard size={24} className="mb-2 text-blue-400" />
              <h4 className="text-white text-sm font-medium mb-1">Secure Payment</h4>
              <p className="text-xs text-gray-400">Encrypted transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck size={24} className="mb-2 text-blue-400" />
              <h4 className="text-white text-sm font-medium mb-1">Fast Shipping</h4>
              <p className="text-xs text-gray-400">Reliable delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <HelpCircle size={24} className="mb-2 text-blue-400" />
              <h4 className="text-white text-sm font-medium mb-1">24/7 Support</h4>
              <p className="text-xs text-gray-400">Help when you need it</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-xl font-bold text-[#e53238]">e</span>
                <span className="text-xl font-bold text-[#0064d2]">b</span>
                <span className="text-xl font-bold text-[#f5af02]">a</span>
                <span className="text-xl font-bold text-[#86b817]">y</span>
                <span className="text-xl font-bold text-white"> Clone</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">© 2025 eBay Inc. All Rights Reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition">Terms</a>
              <a href="#" className="hover:text-gray-300 transition">Cookies</a>
              <a href="#" className="hover:text-gray-300 transition">Accessibility</a>
              <a href="#" className="hover:text-gray-300 transition">Your Privacy Choices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;