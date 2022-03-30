import React from 'react'
import { connect } from 'react-redux'

let HistoryList = ({historys}) => {
  const style = {
    flex: 2
  }
  return (
    <div style={style}>
      <div className="card">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {historys.map(history => 
                <tr key={history.id}>
                  <td>{history.name}</td>
                  <td>{history.qty}</td>
                  <td>{history.status}</td>
                  <td>{history.date}</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default connect(state => state, null)(HistoryList)
