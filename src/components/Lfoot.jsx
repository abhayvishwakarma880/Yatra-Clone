import { NavLink } from 'react-router-dom';

export default function Lfoot() {
  

  return (
    <footer className="bg-white px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Official Websites */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Our Official Websites :</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-red-600 font-bold text-2xl mb-2"><img src="https://www.yatra.com/react-home/_next/static/media/logo.04fb10f6.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.yatra.com
              </NavLink>
            </div>
            <div>
              <div className="text-red-600 font-bold text-lg mb-2"><img src="//www.adventurenation.com/content/images/logotab.jpg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.adventurenation.com
              </NavLink>
            </div>
            <div>
              <div className="text-blue-600 font-bold text-2xl mb-2">travelguru</div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.travelguru.com
              </NavLink>
            </div>
            <div>
              <div className="text-red-600 font-bold text-xl mb-2"><img src="https://www.yatraexoticroutes.com/exotic/_next/image?url=%2Fexotic%2F_next%2Fstatic%2Fmedia%2Fyatraexoticroutes.b7ce7b95.png&w=384&q=75" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.yatraexoticroutes.com
              </NavLink>
            </div>
            <div>
              <div className="text-red-600 font-bold text-2xl mb-2"><img src="	https://www.yatra.com/travel-agents/tsilogo.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.yatra.com/travel-agents
              </NavLink>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Our Social Media Handles :</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-blue-600 font-bold text-2xl mb-2"><img src="	https://www.yatra.com/react-home/images/socialIcons/facebook.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.facebook.com/Yatra
              </NavLink>
            </div>
            <div>
              <div className="text-blue-700 font-bold text-2xl mb-2"><img src="	https://www.yatra.com/react-home/images/socialIcons/linkedIn.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.linkedin.com/company/yatra-online-ltd
              </NavLink>
            </div>
            <div>
              <div className="text-red-600 font-bold text-2xl mb-2"><img src="	https://www.yatra.com/react-home/images/socialIcons/youtube.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.youtube.com/user/yatratravel
              </NavLink>
            </div>
            <div>
              <div className="text-pink-600 font-bold text-2xl mb-2 italic"><img src="	https://www.yatra.com/react-home/images/socialIcons/instagram.svg" alt="" /></div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.instagram.com/yatradotcom/
              </NavLink>
            </div>
            <div>
              <div className="text-black font-bold text-2xl mb-2">𝕏</div>
              <NavLink to="#" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
                www.twitter.com/YatraOfficial
              </NavLink>
            </div>
          </div>
        </section>

        {/* Security & Payments */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Security & Payments</h2>
          <div className="flex flex-wrap items-center gap-4">
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/icoSecuredSites.svg" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/veriSignSecured.svg"/>
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/netBanking.svg" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/emiOption.svg" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/visa.svg" alt="" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/masterCard.svg" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/rupay.svg" alt="" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/dinersClub.svg" />
            <img className='h-5' src="https://www.yatra.com/react-home/images/securityPayments/americanExpress.svg" alt="" />
          </div>
        </section>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-gray-600 text-sm flex justify-between items-center">
          <p>© 2025 Abhay Vishwakarma. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}