import PropTypes from 'prop-types';

const scatsShape = PropTypes.shape({
  location: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sampleName: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { scatsShape };
