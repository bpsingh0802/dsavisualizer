
import React from "react";

function Documentation(){

    return(

    <section id="documentation" className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white mb-4">Documentation</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive guides and documentation to help you make the most of DSA Visualizer</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* <!-- Side Navigation --> */}
                <div className="lg:col-span-1">
                    <div className="bg-neutral-900 rounded-xl p-6 sticky top-24">
                        <h3 className="text-xl font-semibold text-white mb-6">Quick Navigation</h3>
                        <nav className="space-y-4">
                            <a href="#getting-started" className="block text-blue-500 hover:text-blue-400 transition-colors">Getting Started</a>
                            <a href="#installation" className="block text-gray-400 hover:text-blue-400 transition-colors">Installation</a>
                            <a href="#basic-usage" className="block text-gray-400 hover:text-blue-400 transition-colors">Basic Usage</a>
                            <a href="#api-reference" className="block text-gray-400 hover:text-blue-400 transition-colors">API Reference</a>
                            <a href="#examples" className="block text-gray-400 hover:text-blue-400 transition-colors">Examples</a>
                        </nav>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="lg:col-span-3 space-y-8">
                    <div id="getting-started" className="bg-neutral-900 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Getting Started</h3>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400">DSA Visualizer is a powerful tool for understanding data structures and algorithms through interactive visualizations. Follow this guide to get started with the platform.</p>

                            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
                                <h4 className="text-blue-400 font-semibold mb-2">Prerequisites</h4>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Modern web browser</li>
                                    <li>Basic understanding of programming concepts</li>
                                    <li>Internet connection for real-time updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="installation" className="bg-neutral-900 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Installation</h3>
                        <div className="prose prose-invert max-w-none">
                            <div className="bg-neutral-800 rounded-lg p-4 font-mono text-sm text-blue-400">
                                <p className="mb-2"># Clone the repository</p>
                                <p className="mb-4">git clone https://github.com/dsavisualizer/main.git</p>
                                <p className="mb-2"># Install dependencies</p>
                                <p>npm install</p>
                            </div>
                        </div>
                    </div>

                    <div id="basic-usage" className="bg-neutral-900 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Basic Usage</h3>
                        <div className="prose prose-invert max-w-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-neutral-800 p-6 rounded-lg">
                                    <h4 className="text-blue-400 font-semibold mb-4">Step 1: Select Algorithm</h4>
                                    <p className="text-gray-400">Choose from the available algorithms in the dropdown menu.</p>
                                </div>
                                <div className="bg-neutral-800 p-6 rounded-lg">
                                    <h4 className="text-blue-400 font-semibold mb-4">Step 2: Input Data</h4>
                                    <p className="text-gray-400">Enter your test data or use the provided sample datasets.</p>
                                </div>
                                <div className="bg-neutral-800 p-6 rounded-lg">
                                    <h4 className="text-blue-400 font-semibold mb-4">Step 3: Visualization</h4>
                                    <p className="text-gray-400">Use the control panel to start, pause, or step through the visualization.</p>
                                </div>
                                <div className="bg-neutral-800 p-6 rounded-lg">
                                    <h4 className="text-blue-400 font-semibold mb-4">Step 4: Analysis</h4>
                                    <p className="text-gray-400">Review the performance metrics and complexity analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="api-reference" className="bg-neutral-900 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">API Reference</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-neutral-700">
                                        <th className="pb-4 text-blue-400">Method</th>
                                        <th className="pb-4 text-blue-400">Description</th>
                                        <th className="pb-4 text-blue-400">Parameters</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-neutral-800">
                                        <td className="py-4">initialize()</td>
                                        <td>Initialize the visualizer</td>
                                        <td>None</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800">
                                        <td className="py-4">setData(array)</td>
                                        <td>Set input data</td>
                                        <td>Array</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">startVisualization()</td>
                                        <td>Start the visualization</td>
                                        <td>None</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="examples" className="bg-neutral-900 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Examples</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-neutral-800 rounded-lg p-6">
                                <h4 className="text-blue-400 font-semibold mb-4">Basic Sorting Example</h4>
                                <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto">
<code className="text-blue-400">
const visualizer = new DSAVisualizer();
visualizer.initialize();
visualizer.setData([5, 2, 8, 1, 9]);
visualizer.startVisualization();
</code>
                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





    )

}

export default Documentation;