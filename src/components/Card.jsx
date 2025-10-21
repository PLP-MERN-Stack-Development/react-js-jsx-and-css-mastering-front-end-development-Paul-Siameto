import PropTypes from "prop-types";

function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
