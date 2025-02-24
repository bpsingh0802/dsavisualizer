
function AvailableAlgorithms(){
    return(
        <div id="root">
            
    <section id="algorithms" className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white mb-4">Available Algorithms</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Explore our collection of algorithms with detailed visualizations and comparisons</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-blue-500 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Sorting Algorithms</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Bubble Sort</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Quick Sort</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Merge Sort</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Heap Sort</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-blue-500 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Searching Algorithms</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Linear Search</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Binary Search</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Jump Search</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Interpolation Search</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-blue-500 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
            </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Graph Algorithms</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>BFS Traversal</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>DFS Traversal</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Dijkstra's Algorithm</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Kruskal's Algorithm</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 bg-neutral-900 rounded-xl p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold text-white mb-6">Algorithm Complexity Comparison</h3>
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="text-left border-b border-neutral-700">
                            <th className="pb-4 text-blue-500">Algorithm</th>
                            <th className="pb-4 text-blue-500">Best Case</th>
                            <th className="pb-4 text-blue-500">Average Case</th>
                            <th className="pb-4 text-blue-500">Worst Case</th>
                            <th className="pb-4 text-blue-500">Space</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-400">
                        <tr className="border-b border-neutral-800">
                            <td className="py-3">Quick Sort</td>
                            <td className="py-3">Ω(n log(n))</td>
                            <td className="py-3">Θ(n log(n))</td>
                            <td className="py-3">O(n²)</td>
                            <td className="py-3">O(log(n))</td>
                        </tr>
                        <tr className="border-b border-neutral-800">
                            <td className="py-3">Merge Sort</td>
                            <td className="py-3">Ω(n log(n))</td>
                            <td className="py-3">Θ(n log(n))</td>
                            <td className="py-3">O(n log(n))</td>
                            <td className="py-3">O(n)</td>
                        </tr>
                        <tr>
                            <td className="py-3">Bubble Sort</td>
                            <td className="py-3">Ω(n)</td>
                            <td className="py-3">Θ(n²)</td>
                            <td className="py-3">O(n²)</td>
                            <td className="py-3">O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>
    )
}

export default AvailableAlgorithms;