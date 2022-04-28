import { fontSize, fontStyle } from "@mui/system";

const Error = () => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: 'lavender'
  }

  const errorstyle = {
    fontWeight: '600',
    fontSize: '2rem'
  }
  return (
    <div style = {divStyle}>
      <div style = {errorstyle}>ERROR 404</div>
      <div>Oops! You came to an unidentified territory.</div>
      <a href = '/'>Click here to safely go home!!!</a>
    </div>
  );
};

export default Error;