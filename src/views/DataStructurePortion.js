import React from 'react';

function DataStructurePortion() {
    return (
        <section id="datastructures" className="py-20 bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">Data Structures</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore and understand complex data structures through interactive visualizations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
                        <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
                            <pre className="text-blue-400 font-mono text-sm">
                                [1, 2, 3, 4, 5]
                                <code>{"1, 2, 3, 4, 5"}</code>
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Arrays</h3>
                        <p className="text-gray-400 mb-4">
                            Linear data structure for storing elements at contiguous locations
                        </p>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>O(1) Access Time</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Fixed Size</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
                        <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
                            <pre className="text-blue-400 font-mono text-sm">
                                <code>1 {"->"} 2 {"->"} 3</code>
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Linked Lists</h3>
                        <p className="text-gray-400 mb-4">Sequential collection of elements with dynamic size</p>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Dynamic Size</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>O(n) Access Time</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
    <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
        <pre className="text-blue-400 font-mono text-sm">
{`     5
   /   \
  3     7
 / \\   / \\`}
        </pre>
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">Trees</h3>
    <p className="text-gray-400 mb-4">Hierarchical data structure with root and child nodes</p>
    {/* Rest of your content */}
</div>

                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
                        <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
                            <pre className="text-blue-400 font-mono text-sm">
{`(A)---(B)
 |     |
(C)---(D)`}
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Graphs</h3>
                        <p className="text-gray-400 mb-4">Non-linear data structure for representing networks</p>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Complex Relationships</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Versatile Applications</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
                        <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
                            <pre className="text-blue-400 font-mono text-sm">
{`| 3 |
| 2 |
| 1 |
-----`}
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Stacks</h3>
                        <p className="text-gray-400 mb-4">LIFO data structure for temporary storage</p>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>LIFO Structure</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>O(1) Operations</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300">
                        <div className="bg-blue-600/10 rounded-lg p-4 mb-6">
                            <pre className="text-blue-400 font-mono text-sm">
                                <code>1 {"->"} 2 {"->"} 3</code>
{`
Front    Rear`}
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Queues</h3>
                        <p className="text-gray-400 mb-4">FIFO data structure for sequential processing</p>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>FIFO Structure</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Linear Processing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DataStructurePortion;