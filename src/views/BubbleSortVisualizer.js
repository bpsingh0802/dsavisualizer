import React, { useState, useEffect, useRef } from 'react';

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [isRunning, setIsRunning] = useState(false);
  const [arraySize, setArraySize] = useState(20);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');
  const [raceMode, setRaceMode] = useState(false);
  const [cosmicMode, setCosmicMode] = useState(false); // New Cosmic Mode
  const [bubbleProgress, setBubbleProgress] = useState(0);
  const [selectionProgress, setSelectionProgress] = useState(0);
  const [activeLineBubble, setActiveLineBubble] = useState(null);
  const [activeLineSelection, setActiveLineSelection] = useState(null);
  const [winner, setWinner] = useState(null);
  const [sortingStep, setSortingStep] = useState(null);
  const [discoMode, setDiscoMode] = useState(false);
  const stopRef = useRef(false);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
    setBubbleProgress(0);
    setSelectionProgress(0);
    setActiveLineBubble(null);
    setActiveLineSelection(null);
    setWinner(null);
    setSortingStep(null);
    setDiscoMode(false);
    stopRef.current = false;
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    for (let i = 0; i < arr.length && !stopRef.current; i++) {
      setActiveLineBubble(2);
      for (let j = 0; j < arr.length - i - 1 && !stopRef.current; j++) {
        setActiveLineBubble(3);
        if (arr[j] > arr[j + 1]) {
          setActiveLineBubble(4);
          setSortingStep(`Orbiting ${arr[j]} and ${arr[j + 1]}`);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(speed);
          setSortingStep(null);
        }
      }
      setBubbleProgress(((i + 1) / arr.length) * 100);
    }
    setActiveLineBubble(null);
    const endTime = performance.now();
    if (!stopRef.current) setDiscoMode(true);
    return { arr, time: endTime - startTime };
  };

  const selectionSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    for (let i = 0; i < arr.length - 1 && !stopRef.current; i++) {
      setActiveLineSelection(2);
      let minIdx = i;
      for (let j = i + 1; j < arr.length && !stopRef.current; j++) {
        setActiveLineSelection(3);
        if (arr[j] < arr[minIdx]) {
          setActiveLineSelection(4);
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        setActiveLineSelection(5);
        setSortingStep(`Orbiting ${arr[minIdx]} and ${arr[i]}`);
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
        setArray([...arr]);
        await sleep(speed);
        setSortingStep(null);
      }
      setSelectionProgress(((i + 1) / (arr.length - 1)) * 100);
    }
    setActiveLineSelection(null);
    const endTime = performance.now();
    if (!stopRef.current) setDiscoMode(true);
    return { arr, time: endTime - startTime };
  };

  const startSorting = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setWinner(null);
    stopRef.current = false;

    if (raceMode) {
      const bubblePromise = bubbleSort([...array]);
      const selectionPromise = selectionSort([...array]);
      const [bubbleResult, selectionResult] = await Promise.all([bubblePromise, selectionPromise]);
      if (!stopRef.current) {
        setWinner(bubbleResult.time < selectionResult.time ? 'Bubble Sort' : 'Selection Sort');
      }
    } else if (selectedAlgorithm === 'bubble') {
      await bubbleSort([...array]);
    }

    if (!stopRef.current) setIsRunning(false);
  };

  const stopSorting = () => {
    stopRef.current = true;
    setIsRunning(false);
    setBubbleProgress(0);
    setSelectionProgress(0);
    setActiveLineBubble(null);
    setActiveLineSelection(null);
    setWinner(null);
    setSortingStep(null);
    setDiscoMode(false);
  };

  const handleBarClick = (index) => {
    if (!isRunning) {
      setSortingStep(`Bar ${array[index]} blasted into space!`);
      const newArray = [...array];
      newArray[index] = Math.floor(Math.random() * 100) + 1;
      setArray(newArray);
      setTimeout(() => setSortingStep(null), 500);
    }
  };

  const mapSpeedToMs = (value) => {
    return ((value - 1) / 4) * 950 + 50;
  };

  const bubbleSortCode = `function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}`;

  const selectionSortCode = `function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
}`;

  return (
    <section id="visualizer" className="py-20 bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__tada">Cosmic Algorithm Visualizer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Embark on a galactic sorting adventure!
          </p>
        </div>

        <div className={`bg-neutral-800 rounded-xl p-6 shadow-xl relative ${cosmicMode ? 'bg-starry' : ''}`}>
          {discoMode && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-500 rounded-full animate__animated animate__zoomIn animate-supernova"></div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="bg-neutral-900 rounded-lg p-4">
              <h3 className="text-xl text-white font-semibold mb-4">Algorithm Control Center</h3>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                disabled={isRunning || raceMode}
                className="w-full bg-neutral-800 text-white rounded-lg p-3 mb-4 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
              >
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="insertion">Insertion Sort</option>
              </select>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 block mb-2">Array Size</label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={arraySize}
                    onChange={(e) => setArraySize(Number(e.target.value))}
                    disabled={isRunning}
                    className="w-full accent-blue-500"
                  />
                  <span className="text-gray-400">{arraySize}</span>
                </div>

                <div>
                  <label className="text-gray-400 block mb-2">Animation Speed</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={Math.round((speed - 50) / 237.5) + 1}
                    onChange={(e) => setSpeed(mapSpeedToMs(Number(e.target.value)))}
                    disabled={isRunning}
                    className="w-full accent-blue-500"
                  />
                  <span className="text-gray-400">{speed} ms</span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="checkbox"
                    checked={raceMode}
                    onChange={() => setRaceMode(!raceMode)}
                    disabled={isRunning}
                    className="h-5 w-5 accent-blue-500"
                  />
                  <label className="text-gray-400">Race Mode</label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="checkbox"
                    checked={cosmicMode}
                    onChange={() => setCosmicMode(!cosmicMode)}
                    disabled={isRunning}
                    className="h-5 w-5 accent-purple-500"
                  />
                  <label className="text-purple-400 font-bold animate__animated animate__pulse animate__infinite">Cosmic Mode</label>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={startSorting}
                    disabled={isRunning}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 disabled:bg-gray-500 disabled:scale-100"
                  >
                    <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </button>
                  <button
                    onClick={stopSorting}
                    disabled={!isRunning}
                    className="flex-1 bg-neutral-700 text-white py-2 rounded-lg transition-all hover:scale-110 hover:bg-red-600 disabled:bg-gray-500 disabled:scale-100"
                  >
                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={resetArray}
                    disabled={isRunning}
                    className="flex-1 bg-neutral-700 text-white py-2 rounded-lg transition-all hover:scale-110 hover:bg-yellow-500 disabled:bg-gray-500 disabled:scale-100"
                  >
                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Visualization */}
            <div className="lg:col-span-2 bg-neutral-900 rounded-lg p-4 relative">
              <div className={`h-64 flex items-end justify-around space-x-1 mb-6 relative ${discoMode ? 'animate-rainbow' : ''}`}>
                {array.map((value, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleBarClick(idx)}
                    className={`w-4 rounded-t-lg transition-all duration-500 ease-in-out cursor-pointer ${
                      isRunning && sortingStep && sortingStep.includes(value)
                        ? 'bg-yellow-500 animate__animated animate__jackInTheBox'
                        : discoMode
                        ? 'bg-gradient-to-t from-red-500 via-purple-500 to-blue-500'
                        : cosmicMode
                        ? 'bg-purple-500 animate-orbit'
                        : 'bg-blue-500'
                    } hover:scale-110`}
                    style={{ height: `${(value / 100) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-0 w-full text-center text-white text-xs opacity-0 hover:opacity-100 transition-opacity">
                      {value}
                    </div>
                  </div>
                ))}
                {sortingStep && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white p-2 rounded animate__animated animate__zoomIn animate__faster">
                    {sortingStep}
                  </div>
                )}
                {cosmicMode && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {raceMode && (
                <div className="mb-6 animate__animated animate__fadeIn">
                  <div className="mb-4">
                    <label className="text-gray-400 block mb-2">Bubble Sort Progress</label>
                    <div className="w-full bg-neutral-700 rounded-full h-4 overflow-hidden animate-glitch">
                      <div
                        className="bg-blue-500 h-4 transition-all duration-300 ease-in-out"
                        style={{ width: `${bubbleProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 block mb-2">Selection Sort Progress</label>
                    <div className="w-full bg-neutral-700 rounded-full h-4 overflow-hidden animate-glitch">
                      <div
                        className="bg-green-500 h-4 transition-all duration-300 ease-in-out"
                        style={{ width: `${selectionProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  {winner && (
                    <div className="text-white mt-2 animate__animated animate__bounceIn text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                        WINNER: {winner}!
                      </p>
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute bg-yellow-500 w-2 h-2 rounded-full animate-confetti"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random()}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-neutral-800 rounded-lg p-4">
                <pre className="text-sm font-mono text-blue-400 overflow-x-auto">
                  {selectedAlgorithm === 'bubble' && !raceMode && (
                    bubbleSortCode.split('\n').map((line, idx) => (
                      <div
                        key={idx}
                        className={`${activeLineBubble === idx ? 'bg-blue-600 animate-pulse text-yellow-300' : ''} p-1 transition-all duration-200`}
                      >
                        {line}
                      </div>
                    ))
                  )}
                  {raceMode && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-gray-400 mb-2">Bubble Sort</h3>
                        {bubbleSortCode.split('\n').map((line, idx) => (
                          <div
                            key={idx}
                            className={`${activeLineBubble === idx ? 'bg-blue-600 animate-pulse text-yellow-300' : ''} p-1 transition-all duration-200`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-gray-400 mb-2">Selection Sort</h3>
                        {selectionSortCode.split('\n').map((line, idx) => (
                          <div
                            key={idx}
                            className={`${activeLineSelection === idx ? 'bg-green-600 animate-pulse text-yellow-300' : ''} p-1 transition-all duration-200`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </pre>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-900 p-4 rounded-lg transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500">
              <h4 className="text-gray-400 mb-2">Time Complexity</h4>
              <p className="text-white font-mono">O(n²)</p>
            </div>
            <div className="bg-neutral-900 p-4 rounded-lg transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500">
              <h4 className="text-gray-400 mb-2">Space Complexity</h4>
              <p className="text-white font-mono">O(1)</p>
            </div>
            <div className="bg-neutral-900 p-4 rounded-lg transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500">
              <h4 className="text-gray-400 mb-2">Comparisons</h4>
              <p className="text-white font-mono">0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmVisualizer;