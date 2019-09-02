import React from 'react'

const StatsTable = (props) => {
  const { stats } = props;
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
            <th>Speed</th>
            <td>{stats[0].substring(1)}</td>
          </tr>
          <tr>
            <th>Sp. Defense</th>
            <td>{stats[1]}</td>
          </tr>
          <tr>
            <th>Sp. Attack</th>
            <td>{stats[2]}</td>
          </tr>
          <tr>
            <th>Defense</th>
            <td>{stats[3]}</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>{stats[4]}</td>
          </tr>
          <tr>
            <th>HP</th>
            <td>{stats[5]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatsTable;