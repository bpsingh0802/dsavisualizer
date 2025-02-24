import React from "react";

function Visual() {
   
    return (
        <section id="hero" className="bg-neutral-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Learn DSA Through Interactive Visualization
                        </h1>
                        <p className="text-xl text-gray-300">
                            Master data structures and algorithms with our real-time visualization tool. Watch algorithms come to life as you learn.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 animate__animated animate__pulse animate__infinite">
                                Start Visualizing
                            </button>
                            <button className="px-8 py-4 border border-blue-600 hover:bg-blue-600/20 rounded-lg font-semibold transition-all duration-300">
                                View Algorithms
                            </button>
                        </div>
                        <div className="flex items-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>20+ Algorithms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                                <span>Real-time Execution</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate__animated animate__fadeInRight">
                        <div className="bg-gradient-to-r from-blue-600/20 to-blue-900/20 rounded-2xl p-8">
                            <div className="bg-neutral-800 rounded-xl p-6 shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold">Bubble Sort Visualization</h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </button>
                                        <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end space-x-2 h-40">
                                    <div className="w-8 bg-blue-500 rounded-t-lg animate-pulse" style={{height: '60%'}}></div>
                                    <div className="w-8 bg-blue-400 rounded-t-lg animate-pulse" style={{height: '80%'}}></div>
                                    <div className="w-8 bg-blue-600 rounded-t-lg animate-pulse" style={{height: '40%'}}></div>
                                    <div className="w-8 bg-blue-300 rounded-t-lg animate-pulse" style={{height: '100%'}}></div>
                                    <div className="w-8 bg-blue-700 rounded-t-lg animate-pulse" style={{height: '70%'}}></div>
                                </div>
                                <div className="mt-6 bg-neutral-700/50 rounded-lg p-4">
                                    {/* Uncomment and fix if needed
                                    <code className="text-sm font-mono text-blue-300">
                                        for(i = 0; i < n-1; i++) {
                                            if(arr[i] > arr[i+1])
                                                swap(arr[i], arr[i+1]);
                                        }
                                    </code>
                                    */}
                                </div>
                            </div>
                        </div>

                        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                        <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full filter blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Visual;