import React from "react";

function Footer() {  // Renamed 'Fotter' to 'Footer' (typo fix)
    return (  // Added return statement which was missing
        <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-6">DSA Visualizer</h3>
                        <p className="text-gray-400 mb-6">Making data structures and algorithms learning interactive and engaging.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <nav className="space-y-4">
                            <a href="/" className="block text-gray-400 hover:text-blue-500 transition-colors">Home</a>
                            <a href="/features" className="block text-gray-400 hover:text-blue-500 transition-colors">Features</a>
                            <a href="/visualizer" className="block text-gray-400 hover:text-blue-500 transition-colors">Visualizer</a>
                            <a href="/algorithms" className="block text-gray-400 hover:text-blue-500 transition-colors">Algorithms</a>
                            <a href="/datastructures" className="block text-gray-400 hover:text-blue-500 transition-colors">Data Structures</a>
                            <a href="/documentation" className="block text-gray-400 hover:text-blue-500 transition-colors">Documentation</a>
                            <a href="/community" className="block text-gray-400 hover:text-blue-500 transition-colors">Community</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <nav className="space-y-4">
                            <a href="#" className="block text-gray-400 hover:text-blue-500 transition-colors">Documentation</a>
                            <a href="#" className="block text-gray-400 hover:text-blue-500 transition-colors">API Reference</a>
                            <a href="#" className="block text-gray-400 hover:text-blue-500 transition-colors">Examples</a>
                            <a href="#" className="block text-gray-400 hover:text-blue-500 transition-colors">Blog</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Legal</h4>
                        <nav className="space-y-4">
                            <a href="/about" className="block text-gray-400 hover:text-blue-500 transition-colors">About Us</a>
                            <a href="/contact" className="block text-gray-400 hover:text-blue-500 transition-colors">Contact</a>
                            <a href="/privacy" className="block text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a>
                            <a href="/terms" className="block text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</a>
                            <a href="https://github.com/dsavisualizer" className="block text-gray-400 hover:text-blue-500 transition-colors">GitHub</a>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 DSA Visualizer. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );  // Added closing parenthesis for return statement
}

export default Footer;  // Updated export name to match component name