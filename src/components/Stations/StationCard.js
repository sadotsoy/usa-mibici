import React from 'react';
import PropTypes from 'prop-types';
import '../../theme/components/StationCard.css';

const StationCard = (station) => {
  const {
    station: { address, station_id },
  } = station;
  return (
    <div className="station-card-container">
      <div className="station-card-header">
        <div className="station-card-header-data">
          <p>{address}</p>
        </div>
        <div className="station-card-header-data">
          <p>
            <b>ID:</b>
            {station_id}
          </p>
        </div>
      </div>
    </div>
  );
};

StationCard.propTypes = {
  station: PropTypes.object.isRequired,
};

export default StationCard;
