import React from 'react'

export default function InfoRow({ label, value, highlight = false }) {
    return (
      <div className="infoRow">
        <div className="infoRow__label">{label}</div>
        <div className={`infoRow__value ${highlight ? 'infoRow__value--highlight' : ''}`}>
          {value}
        </div>
      </div>
    );
  }
