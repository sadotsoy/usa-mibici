import React, { useEffect, useState } from 'react';
import Api from '../../utils/Api';
import StationCard from './StationCard';
import '../../theme/components/StationsList.css';

const StationsList = () => {
  // data state
  const [stationsData, setStationData] = useState();
  const [errorState, setErrorState] = useState();

  // utils
  const { getStationsInformation } = Api;

  useEffect(() => {
    const getStations = async () => {
      try {
        const stationResData = await getStationsInformation();
        if (stationResData.status === 200) setStationData(stationResData.data.data.stations);
      } catch (error) {
        setStationData({ error });
      }
    };

    if (!stationsData) getStations();
  }, [stationsData]);

  const handleStationListRender = () => {
    if (stationsData) {
      console.log('sad: typeof', typeof stationsData);
      if (stationsData.length > 0) {
        return stationsData.map((station, index) => <StationCard key={index} station={station} />);
      }
    }
    return 'CARGANDO';
  };

  return (
    <div className={'stations-list-container'}>
      <div className="stations-list">{handleStationListRender()}</div>
    </div>
  );
};

export default StationsList;
