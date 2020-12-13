const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <span
        style={{ color: 'white', width: 25, height: 25 }}
        className='iconify'
        data-icon='emojione-monotone:cyclone'
        data-inline='false'
      ></span>
    </div>
  );
};

export default LocationMarker;
