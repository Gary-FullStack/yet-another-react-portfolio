import PropTypes from 'prop-types';


const Link = ( {href, children} ) => {
  return (
    <a href={href} className="btn">{children}</a>
  )
}

export default Link

// setting the prop types for the Link component to circumvent the prop types error
// set children to be node because it can be a string or a node
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}