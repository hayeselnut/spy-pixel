import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import CampaignPage from './pages/campaign';
import Dashboard from './pages/dashboard';

const firebaseConfig = {
  apiKey: "AIzaSyD9PDc_JLEKOSiSTrPG-XAFs0ICpfMCyQM",
  authDomain: "spy-pixel-2e767.firebaseapp.com",
  projectId: "spy-pixel-2e767",
  storageBucket: "spy-pixel-2e767.appspot.com",
  messagingSenderId: "656119548415",
  appId: "1:656119548415:web:ed558859a4ff701c68ffca",
  measurementId: "G-J7YG62XPL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const col = collection(db, "campaigns");
      const snapshot = await getDocs(col);
      const campaignList = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setCampaigns(campaignList);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard campaigns={campaigns}/>} />
        <Route exact path="/campaign/:campaignId" element={<CampaignPage campaigns={campaigns}/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
