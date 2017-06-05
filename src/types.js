import PropTypes from 'prop-types';

export const QuestionType = PropTypes.shape({
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;

export default QuestionType;
