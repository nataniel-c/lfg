import Button from '@mui/material/Button';
const TeamOrPass = () => {
  return (
    <header className="bg-info mb-2 display-flex align-center">
      <div className="container flex-row justify-center align-center text-center">
        <Button size="large" variant="contained" color="success">
        TeamUp
        </Button>
        <Button size="large" variant="contained" color="error">
        Pass
        </Button>
       
      </div>
    </header>
  );
};

export default TeamOrPass;
