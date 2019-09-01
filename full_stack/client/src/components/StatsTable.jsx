import React from 'react'

const StatsTable = (props) => {
  return (
    <div className="content">
      <table className="table">
        <thead>
          <tr>
            <th>Stats</th>
            <th className="is-italic">Base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Attack</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Defense</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Sp. Attack</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Sp. Defense</th>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatsTable;