import PropTypes from 'prop-types';

export const QuestionType = PropTypes.shape({
  userStory: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
}).isRequired;

export default QuestionType;
