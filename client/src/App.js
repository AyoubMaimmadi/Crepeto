import React from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

import AppHeader  from './components/AppHeader'
import InventoryList from './components/InventoryList'
import HistoryList from './components/HistoryList'
import Invoice from './components/Invoice'
import Page from './components/Page'

import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <AppHeader />

          <Page path="INVENTORY_PAGE">
            <div className="AppContent">
              <InventoryList className="InventoryList" />
            </div>
          </Page>

          <Page path="HISTORY_PAGE">
            <div className="AppContent">
              <HistoryList />
            </div>
          </Page>

          <Page path="INVOICE_PAGE">
            <div className="AppContent">
              <Invoice/>
            </div>
          </Page>

      </div>
    </div>
  );
}

export default App
