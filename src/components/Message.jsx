import PropTypes from 'prop-types'

const Message = ({ data , color}) => {
  return (

    <div className="message-card"
    style={{ color:color}}
    >
    <h1>{data.phrase}</h1>
    <div className="message-info">
        <h2>  {data.author} </h2>
    </div>
    </div>

  );
};

export default Message;

Message.proptypes = {
  data: PropTypes.object
}