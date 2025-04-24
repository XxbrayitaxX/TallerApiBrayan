import React from 'react';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import MainContainer from './Layouts/MainContainer/MainContainer';
import './App.css'; 

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <MainContainer />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
