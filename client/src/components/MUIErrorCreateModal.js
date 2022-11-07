import { useContext } from 'react'
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AuthContext from '../auth';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import AuthContext from '../auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorCreateModal() {
    const { auth } = useContext(AuthContext);
    // const [open, setOpen] = React.useState(auth.errorMessage!==null);
    // const handleClose = () => auth.clearError();
    function handleClose(event) {
        auth.clearError();
    }
    // if (auth.errorMessage!==null) {
    //     setOpen(true);
    // }
    return (
        <div>
            <Modal
                open={auth.errorMessage!==null}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Alert 
                    severity='error'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={style}
                >
                    <AlertTitle>Error!</AlertTitle>
                    {auth.errorMessage}
                </Alert>
            </Modal>
        </div>
    );
}

