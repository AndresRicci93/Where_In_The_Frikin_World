const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <span
        style={{ color: 'red', width: 25, height: 25 }}
        className='iconify'
        data-icon='maki:volcano-11'
        data-inline='false'
      ></span>
    </div>
  );
};

export default LocationMarker;
