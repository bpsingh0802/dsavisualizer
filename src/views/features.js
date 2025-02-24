
const  Features=()=>{
    return(
        <div id="root">
    <section id="features" className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Experience algorithm visualization like never before with our comprehensive suite of features.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Real-time Visualization</h3>
                    <p className="text-gray-400">Watch algorithms execute step-by-step with dynamic animations and visual feedback.</p>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Interactive Controls</h3>
                    <p className="text-gray-400">Control execution speed, pause, resume, and step through algorithms at your own pace.</p>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Custom Input Support</h3>
                    <p className="text-gray-400">Test algorithms with your own data using our intuitive drag-and-drop interface.</p>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Algorithm Race Mode</h3>
                    <p className="text-gray-400">Compare multiple algorithms side by side with real-time performance metrics.</p>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Code Analysis</h3>
                    <p className="text-gray-400">View and understand the code implementation alongside the visualization.</p>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Performance Metrics</h3>
                    <p className="text-gray-400">Track and analyze algorithm performance with detailed metrics and comparisons.</p>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Features;