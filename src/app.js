import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './views/nav';
import Visual from './views/visual';
import Features from './views/features';
import AlgorithmVisualizer from './views/AlgorithmVisualizer';
import AvailableAlgorithms from './views/AvailableAlgorithms';
import DataStructurePortion from './views/DataStructurePortion';
import Documentation from './views/Documentation';
import JoinOurCommunity from './views/JoinOurCommunity';
import Footer from './views/footer';
import BubbleSortVisualizer from './views/BubbleSortVisualizer';

function App() {
  return (
    <div>
      <Nav />
      <div id="visual" className="section">
        <Visual />
      </div>
      <div id="bubble-sort" className="section pt-20">
        <BubbleSortVisualizer />
      </div>
      <div id="features" className="section">
        <Features />
      </div>
      <div id="algorithm-visualizer" className="section">
        <AlgorithmVisualizer />
      </div>
      <div id="available-algorithms" className="section">
        <AvailableAlgorithms />
      </div>
      <div id="data-structures" className="section">
        <DataStructurePortion />
      </div>
      <div id="documentation" className="section">
        <Documentation />
      </div>
      <div id="community" className="section">
        <JoinOurCommunity />
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);