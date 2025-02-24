import React, { useState, useEffect, useRef } from 'react';

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [isRunning, setIsRunning] = useState(false);
  const [arraySize, setArraySize] = useState(20);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');
  const [raceMode, setRaceMode] = useState(false);
  const [raceOpponent, setRaceOpponent] = useState('');
  const [cosmicMode, setCosmicMode] = useState(false);
  const [progress, setProgress] = useState({});
  const [activeLines, setActiveLines] = useState({});
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
    setProgress({});
    setActiveLines({});
    setWinner(null);
    setSortingStep(null);
    setDiscoMode(false);
    setRaceOpponent('');
    stopRef.current = false;
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Sorting Algorithms
  const bubbleSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    for (let i = 0; i < arr.length && !stopRef.current; i++) {
      setActiveLines(prev => ({ ...prev, bubble: 2 }));
      for (let j = 0; j < arr.length - i - 1 && !stopRef.current; j++) {
        setActiveLines(prev => ({ ...prev, bubble: 3 }));
        if (arr[j] > arr[j + 1]) {
          setActiveLines(prev => ({ ...prev, bubble: 4 }));
          setSortingStep(`Bubble: Swapping ${arr[j]} and ${arr[j + 1]}`);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(speed);
          setSortingStep(null);
        }
      }
      setProgress(prev => ({ ...prev, bubble: ((i + 1) / arr.length) * 100 }));
    }
    setActiveLines(prev => ({ ...prev, bubble: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const selectionSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    for (let i = 0; i < arr.length - 1 && !stopRef.current; i++) {
      setActiveLines(prev => ({ ...prev, selection: 2 }));
      let minIdx = i;
      for (let j = i + 1; j < arr.length && !stopRef.current; j++) {
        setActiveLines(prev => ({ ...prev, selection: 3 }));
        if (arr[j] < arr[minIdx]) {
          setActiveLines(prev => ({ ...prev, selection: 4 }));
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        setActiveLines(prev => ({ ...prev, selection: 5 }));
        setSortingStep(`Selection: Swapping ${arr[minIdx]} and ${arr[i]}`);
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
        setArray([...arr]);
        await sleep(speed);
        setSortingStep(null);
      }
      setProgress(prev => ({ ...prev, selection: ((i + 1) / (arr.length - 1)) * 100 }));
    }
    setActiveLines(prev => ({ ...prev, selection: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const insertionSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    for (let i = 1; i < arr.length && !stopRef.current; i++) {
      setActiveLines(prev => ({ ...prev, insertion: 2 }));
      let key = arr[i];
      let j = i - 1;
      setActiveLines(prev => ({ ...prev, insertion: 3 }));
      while (j >= 0 && arr[j] > key && !stopRef.current) {
        setActiveLines(prev => ({ ...prev, insertion: 4 }));
        setSortingStep(`Insertion: Shifting ${arr[j]}`);
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await sleep(speed);
        setSortingStep(null);
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setProgress(prev => ({ ...prev, insertion: (i / (arr.length - 1)) * 100 }));
    }
    setActiveLines(prev => ({ ...prev, insertion: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const mergeSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    const merge = async (arr, l, m, r) => {
      let n1 = m - l + 1;
      let n2 = r - m;
      let L = arr.slice(l, m + 1);
      let R = arr.slice(m + 1, r + 1);
      let i = 0, j = 0, k = l;
      setActiveLines(prev => ({ ...prev, merge: 7 }));
      while (i < n1 && j < n2 && !stopRef.current) {
        setActiveLines(prev => ({ ...prev, merge: 8 }));
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          setSortingStep(`Merge: Merging ${R[j]}`);
          arr[k] = R[j];
          j++;
        }
        setArray([...arr]);
        await sleep(speed);
        setSortingStep(null);
        k++;
      }
      while (i < n1 && !stopRef.current) {
        arr[k] = L[i];
        setArray([...arr]);
        await sleep(speed);
        i++;
        k++;
      }
      while (j < n2 && !stopRef.current) {
        arr[k] = R[j];
        setArray([...arr]);
        await sleep(speed);
        j++;
        k++;
      }
    };
    const mergeSortHelper = async (arr, l, r) => {
      if (l < r && !stopRef.current) {
        setActiveLines(prev => ({ ...prev, merge: 2 }));
        let m = Math.floor((l + r) / 2);
        await mergeSortHelper(arr, l, m);
        await mergeSortHelper(arr, m + 1, r);
        await merge(arr, l, m, r);
        setProgress(prev => ({ ...prev, merge: ((r - l + 1) / arr.length) * 100 }));
      }
    };
    await mergeSortHelper(arr, 0, arr.length - 1);
    setActiveLines(prev => ({ ...prev, merge: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const quickSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    const partition = async (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;
      setActiveLines(prev => ({ ...prev, quick: 4 }));
      for (let j = low; j < high && !stopRef.current; j++) {
        setActiveLines(prev => ({ ...prev, quick: 5 }));
        if (arr[j] < pivot) {
          i++;
          setSortingStep(`Quick: Swapping ${arr[i]} and ${arr[j]}`);
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await sleep(speed);
          setSortingStep(null);
        }
      }
      setSortingStep(`Quick: Placing pivot ${pivot}`);
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      await sleep(speed);
      setSortingStep(null);
      return i + 1;
    };
    const quickSortHelper = async (arr, low, high) => {
      if (low < high && !stopRef.current) {
        setActiveLines(prev => ({ ...prev, quick: 2 }));
        let pi = await partition(arr, low, high);
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
        setProgress(prev => ({ ...prev, quick: ((high - low + 1) / arr.length) * 100 }));
      }
    };
    await quickSortHelper(arr, 0, arr.length - 1);
    setActiveLines(prev => ({ ...prev, quick: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const heapSort = async (arrToSort) => {
    let arr = [...arrToSort];
    const startTime = performance.now();
    const heapify = async (arr, n, i) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      setActiveLines(prev => ({ ...prev, heap: 4 }));
      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;
      if (largest !== i && !stopRef.current) {
        setActiveLines(prev => ({ ...prev, heap: 7 }));
        setSortingStep(`Heap: Swapping ${arr[i]} and ${arr[largest]}`);
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]);
        await sleep(speed);
        setSortingStep(null);
        await heapify(arr, n, largest);
      }
    };
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0 && !stopRef.current; i--) {
      await heapify(arr, arr.length, i);
    }
    for (let i = arr.length - 1; i > 0 && !stopRef.current; i--) {
      setActiveLines(prev => ({ ...prev, heap: 11 }));
      setSortingStep(`Heap: Moving ${arr[0]} to end`);
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      await sleep(speed);
      setSortingStep(null);
      await heapify(arr, i, 0);
      setProgress(prev => ({ ...prev, heap: ((arr.length - i) / arr.length) * 100 }));
    }
    setActiveLines(prev => ({ ...prev, heap: null }));
    const endTime = performance.now();
    return { arr, time: endTime - startTime };
  };

  const algorithmMap = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quickSort,
    heap: heapSort,
  };

  const startSorting = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setWinner(null);
    stopRef.current = false;
    setProgress({}); // Reset progress for a fresh start

    if (raceMode && raceOpponent && raceOpponent !== selectedAlgorithm) {
      const selectedPromise = algorithmMap[selectedAlgorithm]([...array]);
      const opponentPromise = algorithmMap[raceOpponent]([...array]);
      const [selectedResult, opponentResult] = await Promise.all([selectedPromise, opponentPromise]);
      if (!stopRef.current) {
        setWinner(selectedResult.time < opponentResult.time ? `${selectedAlgorithm} Sort` : `${raceOpponent} Sort`);
      }
    } else {
      await algorithmMap[selectedAlgorithm]([...array]);
    }

    if (!stopRef.current) setIsRunning(false);
  };

  const stopSorting = () => {
    stopRef.current = true;
    setIsRunning(false);
    setProgress({});
    setActiveLines({});
    setWinner(null);
    setSortingStep(null);
    setDiscoMode(false);
    setRaceOpponent('');
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

  const handleRaceOpponentChange = (e) => {
    const newOpponent = e.target.value;
    setRaceOpponent(newOpponent);
    // Removed startSorting call here; race starts only on button press
  };

  const mapSpeedToMs = (value) => {
    return ((value - 1) / 4) * 950 + 50;
  };

  const algorithmCodes = {
    bubble: `function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}`,
    selection: `function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
}`,
    insertion: `function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
    merge: `function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  function merge(left, right) {
    let result = [], l = 0, r = 0;
    while(l < left.length && r < right.length) {
      if(left[l] <= right[r]) result.push(left[l++]);
      else result.push(right[r++]);
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }
}`,
    quick: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if(low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j < high; j++) {
      if(arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}`,
    heap: `function heapSort(arr) {
  let n = arr.length;
  for(let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);
  for(let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if(left < n && arr[left] > arr[largest]) largest = left;
    if(right < n && arr[right] > arr[largest]) largest = right;
    if(largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
}`,
  };

  return (
    <section id="visualizer" className="py-20 bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__tada">Cosmic Algorithm Visualizer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch algorithms race through the galaxy!
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
                disabled={isRunning}
                className="w-full bg-neutral-800 text-white rounded-lg p-3 mb-4 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
              >
                <option value="bubble">Bubble Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="heap">Heap Sort</option>
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
                    checked={cosmicMode}
                    onChange={() => setCosmicMode(!cosmicMode)}
                    disabled={isRunning}
                    className="h-5 w-5 accent-purple-500"
                  />
                  <label className="text-purple-400 font-bold animate__animated animate__pulse animate__infinite">Cosmic Mode</label>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="checkbox"
                    checked={raceMode}
                    onChange={() => setRaceMode(!raceMode)}
                    disabled={isRunning}
                    className="h-5 w-5 accent-green-500"
                  />
                  <label className="text-green-400 font-bold">Race Mode</label>
                </div>

                {raceMode && (
                  <div className="space-y-2">
                    <label className="text-gray-400 block mb-2">Select Opponent Algorithm</label>
                    <select
                      value={raceOpponent}
                      onChange={handleRaceOpponentChange}
                      disabled={isRunning}
                      className="w-full bg-neutral-800 text-white rounded-lg p-2 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Choose an opponent</option>
                      {Object.keys(algorithmMap)
                        .filter(algo => algo !== selectedAlgorithm)
                        .map(algo => (
                          <option key={algo} value={algo}>{algo.charAt(0).toUpperCase() + algo.slice(1)} Sort</option>
                        ))}
                    </select>
                  </div>
                )}

                <div className="flex space-x-2">
                  <button
                    onClick={startSorting}
                    disabled={isRunning || (raceMode && !raceOpponent)}
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

              {raceMode && raceOpponent && raceOpponent !== selectedAlgorithm && (
                <div className="mb-6 animate__animated animate__fadeIn">
                  <div className="mb-4">
                    <label className="text-gray-400 block mb-2">{selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort Progress</label>
                    <div className="w-full bg-neutral-700 rounded-full h-4 overflow-hidden animate-glitch">
                      <div
                        className={`h-4 transition-all duration-300 ease-in-out ${
                          selectedAlgorithm === 'bubble' ? 'bg-blue-500' :
                          selectedAlgorithm === 'selection' ? 'bg-green-500' :
                          selectedAlgorithm === 'insertion' ? 'bg-yellow-500' :
                          selectedAlgorithm === 'merge' ? 'bg-purple-500' :
                          selectedAlgorithm === 'quick' ? 'bg-red-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${progress[selectedAlgorithm] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-400 block mb-2">{raceOpponent.charAt(0).toUpperCase() + raceOpponent.slice(1)} Sort Progress</label>
                    <div className="w-full bg-neutral-700 rounded-full h-4 overflow-hidden animate-glitch">
                      <div
                        className={`h-4 transition-all duration-300 ease-in-out ${
                          raceOpponent === 'bubble' ? 'bg-blue-500' :
                          raceOpponent === 'selection' ? 'bg-green-500' :
                          raceOpponent === 'insertion' ? 'bg-yellow-500' :
                          raceOpponent === 'merge' ? 'bg-purple-500' :
                          raceOpponent === 'quick' ? 'bg-red-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${progress[raceOpponent] || 0}%` }}
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
                  {raceMode && raceOpponent && raceOpponent !== selectedAlgorithm ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-gray-400 mb-2">{selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort</h3>
                        {algorithmCodes[selectedAlgorithm].split('\n').map((line, idx) => (
                          <div
                            key={idx}
                            className={`${activeLines[selectedAlgorithm] === idx ? `animate-pulse text-yellow-300 ${selectedAlgorithm === 'bubble' ? 'bg-blue-600' : selectedAlgorithm === 'selection' ? 'bg-green-600' : selectedAlgorithm === 'insertion' ? 'bg-yellow-600' : selectedAlgorithm === 'merge' ? 'bg-purple-600' : selectedAlgorithm === 'quick' ? 'bg-red-600' : 'bg-orange-600'}` : ''} p-1 transition-all duration-200`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-gray-400 mb-2">{raceOpponent.charAt(0).toUpperCase() + raceOpponent.slice(1)} Sort</h3>
                        {algorithmCodes[raceOpponent].split('\n').map((line, idx) => (
                          <div
                            key={idx}
                            className={`${activeLines[raceOpponent] === idx ? `animate-pulse text-yellow-300 ${raceOpponent === 'bubble' ? 'bg-blue-600' : raceOpponent === 'selection' ? 'bg-green-600' : raceOpponent === 'insertion' ? 'bg-yellow-600' : raceOpponent === 'merge' ? 'bg-purple-600' : raceOpponent === 'quick' ? 'bg-red-600' : 'bg-orange-600'}` : ''} p-1 transition-all duration-200`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    algorithmCodes[selectedAlgorithm].split('\n').map((line, idx) => (
                      <div
                        key={idx}
                        className={`${activeLines[selectedAlgorithm] === idx ? 'bg-blue-600 animate-pulse text-yellow-300' : ''} p-1 transition-all duration-200`}
                      >
                        {line}
                      </div>
                    ))
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