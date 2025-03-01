export default function Footer() {
    return (
        <footer className="bg-header-blue text-white px-6 lg:px-20 py-12">
            {/* Top Section - Links & Contact Form */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
                
                {/* Company Links */}
                <div className="max-w-xs sm:max-w-sm">
                    <h3 className="text-gray-300 uppercase font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        {["About Us", "Sustainability", "In The Media", "Privacy Policy", "Terms & Conditions", "APCO Annual Report", "Modern Slavery Act Policy"].map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer break-words whitespace-normal">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div className="max-w-xs sm:max-w-sm">
                    <h3 className="text-gray-300 uppercase font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        {["Our Blog", "Decoration Methods", "Testimonials", "Reviews", "Warehousing and Fulfilment"].map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer break-words whitespace-normal">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Help and Support */}
                <div className="max-w-xs sm:max-w-sm">
                    <h3 className="text-gray-300 uppercase font-semibold mb-4">Help and Support</h3>
                    <ul className="space-y-2">
                        {["My Account", "Your Merch Store", "FAQs", "PMS Chart", "Contact"].map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer break-words whitespace-normal">{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-3 md:col-span-1">
                    <h3 className="text-gray-300 uppercase font-semibold mb-4">Contact Us</h3>
                    <form className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="Your name" className="bg-white w-full p-3 rounded-lg text-black" />
                            <input type="email" placeholder="Email address" className="bg-white w-full p-3 rounded-lg text-black" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input type="tel" placeholder="Phone number" className="bg-white w-full p-3 rounded-lg text-black" />
                            <select className="bg-white w-full p-3 rounded-lg text-black">
                                <option>Delivery State*</option>
                            </select>
                        </div>
                        <textarea placeholder="Message" className="bg-white w-full p-3 rounded-lg text-black"></textarea>
                        <button className="border-2 border-white px-6 py-2 rounded-full w-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                            SEND
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="border-t border-blue-400 mt-12 pt-6 flex flex-col items-start sm:flex-row sm:items-center justify-between">
                <div className="flex-col">
                    <img src="logo-white.svg" className="w-40"/>
                    <p className="text-white font-semibold">© 2025 Good Things Australia Pty Ltd</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    {["instagram-white", "linkedin-white", "facebook-white", "tiktok-white", "youtube-white"].map((icon, index) => (
                        <img key={index} src={`/${icon}.svg`} alt={icon} className="w-6 h-6 cursor-pointer" />
                    ))}
                </div>
            </div>
        </footer>
    );
}
