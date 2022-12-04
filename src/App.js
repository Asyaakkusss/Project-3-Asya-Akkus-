import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import CardHeader from '@mui/material/CardHeader';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const App = () => {
  const [array, setArray] = useState([]);
  const [xname, getXName] = useState('');
  let [xnowins, getXNoWins] = useState(0);
  let [onowins, getONoWins] = useState(0);
  const [winner, setWinner] = useState('');
  const [oname, getOName] = useState('');
  const [turn, setTurn] = useState('X');
  let [openWinnerDialog, setOpenWinnerDialog] = React.useState(false);
  let [openNameDialog, setOpenNameDialog] = React.useState(false);

  function clearWithCancel() {
    getXName('');
    getOName('');
  }

  console.log(array);
  let changeX = (value) => {
    getXName(value);
  };

  let changeO = (value) => {
    getOName(value);
  };

  function letsOpenNameDialog() {
    setOpenNameDialog(true);
  }

  function letsCloseNameDialog() {
    setOpenNameDialog(false);
  }

  function letsOpenWinnerDialog() {
    setOpenWinnerDialog(true);
  }

  function letsCloserWinnerDialog() {
    setOpenWinnerDialog(false);
  }

  function setChipsDown(index) {
    if (array[index] == 'X' || array[index] == 'O') {
      toastr.error(`You have already put a chip on this square!`, ``, {
        positionClass: 'toast-bottom-right',
      });
      return;
    }
    if (turn === 'X') {
      array[index] = 'X';
      setTurn('O');
    } else {
      array[index] = 'O';
      setTurn('X');
    }
    whoWins(array);
    whoTies(array);
    setArray(array);
  }

  function whoWins(array) {
    //diagonal wins for x and o
    if (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[2] === 'X' && array[4] === 'X' && array[6] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    if (array[2] === 'O' && array[4] === 'O' && array[6] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    //horizontal wins for x and o
    if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[0] === 'O' && array[1] === 'O' && array[2] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    if (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    if (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    //vertical wins for x and o
    if (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') {
      setWinner(xname);
      letsOpenWinnerDialog();
    }

    if (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    if (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }

    if (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') {
      setWinner(oname);
      letsOpenWinnerDialog();
    }
  }

  function whoTies(array) {
    if (
      array[0] !== undefined &&
      array[1] !== undefined &&
      array[2] !== undefined &&
      array[3] !== undefined &&
      array[4] !== undefined &&
      array[5] !== undefined &&
      array[6] !== undefined &&
      array[7] !== undefined &&
      array[8] !== undefined
    ) {
      setWinner('No one ');
      letsOpenWinnerDialog();
    } else whoWins(array);
  }
  const refresh = () => {
    setWinner('');
    setArray([]);
  };

  return (
    <>
      <Dialog open={openNameDialog}>
        <DialogTitle sx={{ bgcolor: 'pink', color: 'purple' }}>
          <strong>Name Picker</strong>
        </DialogTitle>
        <DialogContent>
          <br />
          <br />
          <TextField
            sx={{ width: 1 }}
            id="XsName"
            value={xname}
            label="X's Name"
            placeholder="Type X's Name..."
            onChange={(e) => changeX(e.target.value)}
          />
          <br />
          <br />
          <TextField
            sx={{ width: 1 }}
            id="OsName"
            value={oname}
            label="O's Name"
            placeholder="Type O's Name..."
            onChange={(e) => changeO(e.target.value)}
          />
        </DialogContent>
        <Button
          style={{
            color: 'white',
            backgroundColor: 'red',
            padding: '14px 50px',
          }}
          variant="contained"
          sx={{ mt: 1 }}
          onClick={() => {
            clearWithCancel();
            letsCloseNameDialog();
          }}
        >
          <strong>Clear</strong>
        </Button>
        <Button
          style={{
            color: 'purple',
            backgroundColor: 'pink',
            padding: '14px 50px',
          }}
          variant="contained"
          sx={{ mt: 1 }}
          onClick={() => letsCloseNameDialog()}
        >
          <strong>Set Names</strong>
        </Button>
      </Dialog>
      <br />

      <Card>
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Player 1 (X): {xname}</Typography>
          <Typography fontWeight={700}>Player 2 (O): {oname}</Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        ></Stack>
      </Card>
      <br />
      <br />
      <Box textAlign="center">
        <Button
          style={{
            color: 'purple',
            backgroundColor: 'pink',
            padding: '14px 25px',
            marginLeft: '400px',
          }}
          variant="contained"
          onClick={() => letsOpenNameDialog()}
        >
          <strong>Pick Name</strong>
        </Button>
      </Box>
      <br />
      <br />
      <div className="App">
        <div className="gameTable">
          <table>
            <tbody>
              <tr>
                <td onClick={() => setChipsDown(0)}>{array[0]}</td>
                <td onClick={() => setChipsDown(1)}>{array[1]}</td>
                <td onClick={() => setChipsDown(2)}>{array[2]}</td>
              </tr>
              <tr>
                <td onClick={() => setChipsDown(3)}>{array[3]}</td>
                <td onClick={() => setChipsDown(4)}>{array[4]}</td>
                <td onClick={() => setChipsDown(5)}>{array[5]}</td>
              </tr>
              <tr>
                <td onClick={() => setChipsDown(6)}>{array[6]}</td>
                <td onClick={() => setChipsDown(7)}>{array[7]}</td>
                <td onClick={() => setChipsDown(8)}>{array[8]}</td>
              </tr>
            </tbody>
          </table>
          <>
            <br />
            <Box textAlign="right">
              <Button
                style={{
                  color: 'purple',
                  backgroundColor: 'pink',
                  padding: '14px 25px',
                }}
                variant="contained"
                onClick={() => refresh()}
              >
                <strong>Refresh</strong>
              </Button>
            </Box>
            <Dialog open={openWinnerDialog}>
              <DialogContent>
                <DialogTitle>{winner} Wins!</DialogTitle>
                <br />
                <br />
                <Box textAlign="center">
                  <Button
                    style={{ color: 'purple', backgroundColor: 'pink' }}
                    variant="contained"
                    onClick={() => {
                      refresh();
                      letsCloserWinnerDialog();
                    }}
                  >
                    Re-Match!
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </>
        </div>
      </div>
    </>
  );
};

export default App;
