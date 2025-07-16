export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet <span className="text-white">Our Team</span>
            </h1>
            <p className="text-gray-800 text-xl leading-relaxed max-w-2xl">
              The passionate people behind PaperHearts who make our mission possible.
            </p>
          </div>
        </div>
      </div>

      {/* Our Founders Section */}
      <div className="bg-white/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Founder 1 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/eeshasri.jpeg"
                  alt="Eeshasri Alpuri"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Eeshasri Alpuri</h3>
              <p className="text-sm font-medium text-gray-700 mb-4">President</p>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "My role as the President is to lead the team, oversee all operations, and ensure the nonprofit stays
                focused, organized, and true to its mission."
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/amira.jpeg"
                  alt="Amira Vanjaria"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Amira Vanjaria</h3>
              <p className="text-sm font-medium text-gray-700 mb-4">Vice President</p>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "My role as the Vice President is to support the President, help lead the team, step in when needed, and
                make sure our nonprofit runs smoothly and stays true to its mission."
              </p>
            </div>

            {/* Founder 3 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/akhil.jpeg"
                  alt="Akhil Akella"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Akhil Akella</h3>
              <p className="text-sm font-medium text-gray-700 mb-4">Software Manager</p>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "My role as the Software Designer is to build, update, and manage our website and digital tools so
                people can easily access information, donate, and get involved with our mission."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white/60 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/sahasra.jpeg"
                  alt="Sahasra Madhu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Sahasra Madhu</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Secretary</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Secretary is to keep our team organized by taking meeting notes, managing important
                documents, and making sure communication stays clear and consistent."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/yagnasri.jpeg"
                  alt="Yagnasri Korada"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Yagnasri Korada</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Treasurer</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Treasurer is to manage our donations, track spending, create budgets, and ensure our
                nonprofit stays financially healthy and transparent."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/anish.png"
                  alt="SaiAnish Alpuri"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">SaiAnish Alpuri</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">PR Officer</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the PR Officer is to build our public image by sharing impactful stories, connecting with
                media, and helping the world understand and support our mission."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/akshaj.jpeg"
                  alt="Akshaj Nandanavanam"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Akshaj Nandanavanam</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Partnership Officer</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Partnerships Officer is to build and maintain relationships with schools, businesses,
                donors, and sponsors to bring in support and resources for our mission."
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/dhana.png"
                  alt="DhanaSugani Sundar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">DhanaSugani Sundar</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Social Media Manager</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Social Media Manager is to share our story online through posts, photos, and videos that
                inspire people to support, volunteer, and spread kindness with us."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/vyom.jpeg"
                  alt="Vyom Mohan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Vyom Mohan</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Community Outreach</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Community Outreach Officer is to connect with local organizations, shelters, and service
                partners to expand our reach and bring comfort to those who need it most."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/thrina.jpeg"
                  alt="Thrina Maniyendra"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Thrina Maniyendra</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Event Planner</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Event Planner is to organize and run fundraisers, volunteer events, and donation drives
                that bring our community together and support our mission."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                    src="/headshot/rithikha.png"
                  alt="Rithikha Naresh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Rithikha Naresh</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Program Director</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Programs Director is to plan, oversee, and coordinate all our projects and activities to
                make sure they run smoothly and make a real impact."
              </p>
            </div>

            {/* Row 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/yashasri.jpeg"
                  alt="Yashasri Korada"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Yashasri Korada</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Volunteer Coordinator</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Volunteer Coordinator is to recruit, train, and schedule volunteers to help run our
                programs and events smoothly and joyfully."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/rukayat.jpeg"
                  alt="Rukayat Fahad"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Rukayat Fahad</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Marketing and Design Officer</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Marketing & Design Officer is to create beautiful visuals and marketing materials that
                share our mission and attract support for our nonprofit."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/anisha.jpeg"
                  alt="Anisha Pradhan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Anisha Pradhan</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Marketing and Design Officer</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Marketing Officer is to develop and execute strategies that promote our mission, grow
                our audience, and engage supporters through campaigns and outreach."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/headshot/tanvi.jpeg"
                  alt="Tanvi Manche"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Tanvi Manche</h3>
              <p className="text-sm font-medium text-gray-700 mb-3">Basic Needs Coordinator</p>
              <p className="text-xs text-gray-600 italic leading-relaxed">
                "My role as the Basic Needs Coordinator is to organize, sort, and manage all donated items to ensure
                every care package is complete, thoughtful, and ready to bring comfort to those we serve."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
