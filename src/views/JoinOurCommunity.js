
import React from "react";
function JoinOurCommunity(){
    return(

    <section id="community" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Connect with fellow developers, share insights, and contribute to the growing DSA Visualizer community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* <!-- GitHub Stats --> */}
                <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
                        <div>
                            <h3 className="text-xl font-semibold text-white">GitHub</h3>
                            <p className="text-gray-400">1.2k+ Stars</p>
                        </div>
                    </div>
                    <a href="https://github.com/dsavisualizer" className="block text-center py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-white transition-colors">
            View Repository
          </a>
                </div>

                {/* <!-- Discord Community --> */}
                <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Discord</h3>
                            <p className="text-gray-400">5k+ Members</p>
                        </div>
                    </div>
                    <a href="#" className="block text-center py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-white transition-colors">
            Join Server
          </a>
                </div>

                {/* <!-- Contributors --> */}
                <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Contributors</h3>
                            <p className="text-gray-400">50+ Active Contributors</p>
                        </div>
                    </div>
                    <a href="#" className="block text-center py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-white transition-colors">
            Become a Contributor
          </a>
                </div>
            </div>

            {/* <!-- Community Features --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-neutral-800 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Discussion Forums</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Algorithm Implementation Discussions
                        </li>
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Performance Optimization Tips
                        </li>
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Bug Reports & Feature Requests
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-800 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Community Resources</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Tutorial Videos & Guides
                        </li>
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Code Examples & Snippets
                        </li>
                        <li className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Community-driven Documentation
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Newsletter Signup --> */}
            <div className="bg-neutral-800 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates and community news</p>
                <form className="max-w-md mx-auto flex gap-4">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-neutral-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors">
            Subscribe
          </button>
                </form>
            </div>
        </div>
    </section>







    )
}

export default JoinOurCommunity;