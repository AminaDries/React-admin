import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Collapse, IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const columns = (handleExpandClick, expandedRow, getStatutStyle) => [
  { field: 'id', headerName: 'ID Conducteur', flex: 1 },
  { field: 'nom', headerName: 'Nom', flex: 1 },
  { field: 'prenom', headerName: 'Prénom', flex: 1, editable: true },
  { field: 'dateNaissance', headerName: 'Date de Naissance', flex: 1, editable: true },
  { field: 'sexe', headerName: 'Sexe', flex: 0.5, editable: true },
  { field: 'statut', headerName: 'Statut', flex: 1, editable: true, renderCell: (params) => (
      <span style={getStatutStyle(params.value)}>{params.value}</span>
  )},
  { field: 'details', headerName: 'Details', flex: 0.5, renderCell: (params) => (
    <IconButton
      aria-label="expand row"
      size="small"
      onClick={() => handleExpandClick(params.id)}
    >
      {expandedRow === params.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
    </IconButton>
  )},
];

const rows = [
  { id: 1, nom: 'Snow', prenom: 'Jon', dateNaissance: '1990-12-25', sexe: 'M', statut: 'Normal', adresse: '123 Rue', commune: 'Commune1', wilaya: 'Wilaya1', numTel: '1234567890' },
  { id: 2, nom: 'Lannister', prenom: 'Cersei', dateNaissance: '1975-05-12', sexe: 'F', statut: 'Bloqué', adresse: '456 Avenue', commune: 'Commune2', wilaya: 'Wilaya2', numTel: '2345678901' },
  { id: 3, nom: 'Lannister', prenom: 'Jaime', dateNaissance: '1978-03-23', sexe: 'M', statut: 'Normal', adresse: '789 Boulevard', commune: 'Commune3', wilaya: 'Wilaya3', numTel: '3456789012' },
  { id: 4, nom: 'Stark', prenom: 'Arya', dateNaissance: '2001-07-01', sexe: 'F', statut: 'Normal', adresse: '101 Rue', commune: 'Commune4', wilaya: 'Wilaya4', numTel: '4567890123' },
  { id: 5, nom: 'Targaryen', prenom: 'Daenerys', dateNaissance: '1985-11-15', sexe: 'F', statut: 'Bloqué', adresse: '202 Avenue', commune: 'Commune5', wilaya: 'Wilaya5', numTel: '5678901234' },
  { id: 6, nom: 'Melisandre', prenom: 'Jeremy', dateNaissance: '1988-09-30', sexe: 'M', statut: 'Normal', adresse: '303 Boulevard', commune: 'Commune6', wilaya: 'Wilaya6', numTel: '6789012345' },
  { id: 7, nom: 'Clifford', prenom: 'Ferrara', dateNaissance: '1972-02-08', sexe: 'M', statut: 'Bloqué', adresse: '404 Rue', commune: 'Commune7', wilaya: 'Wilaya7', numTel: '7890123456' },
  { id: 8, nom: 'Frances', prenom: 'Rossini', dateNaissance: '1993-04-17', sexe: 'F', statut: 'Normal', adresse: '505 Avenue', commune: 'Commune8', wilaya: 'Wilaya8', numTel: '8901234567' },
  { id: 9, nom: 'Roxie', prenom: 'Harvey', dateNaissance: '1989-06-25', sexe: 'F', statut: 'Bloqué', adresse: '606 Boulevard', commune: 'Commune9', wilaya: 'Wilaya9', numTel: '9012345678' },
  { id: 10, nom: 'Smith', prenom: 'John', dateNaissance: '1980-05-20', sexe: 'M', statut: 'Normal', adresse: '707 Street', commune: 'Commune10', wilaya: 'Wilaya10', numTel: '0123456789' },
  { id: 11, nom: 'Johnson', prenom: 'Emily', dateNaissance: '1995-09-15', sexe: 'F', statut: 'Bloqué', adresse: '808 Avenue', commune: 'Commune11', wilaya: 'Wilaya11', numTel: '1234567890' },
  { id: 12, nom: 'Williams', prenom: 'David', dateNaissance: '1977-03-10', sexe: 'M', statut: 'Normal', adresse: '909 Boulevard', commune: 'Commune12', wilaya: 'Wilaya12', numTel: '2345678901' },
  { id: 13, nom: 'Jones', prenom: 'Jessica', dateNaissance: '1988-11-28', sexe: 'F', statut: 'Bloqué', adresse: '1010 Street', commune: 'Commune13', wilaya: 'Wilaya13', numTel: '3456789012' },
  { id: 14, nom: 'Brown', prenom: 'Michael', dateNaissance: '2000-06-05', sexe: 'M', statut: 'Normal', adresse: '1111 Avenue', commune: 'Commune14', wilaya: 'Wilaya14', numTel: '4567890123' },
  { id: 15, nom: 'Davis', prenom: 'Sarah', dateNaissance: '1992-02-18', sexe: 'F', statut: 'Bloqué', adresse: '1212 Boulevard', commune: 'Commune15', wilaya: 'Wilaya15', numTel: '5678901234' },
  { id: 16, nom: 'Miller', prenom: 'Matthew', dateNaissance: '1983-08-12', sexe: 'M', statut: 'Normal', adresse: '1313 Street', commune: 'Commune16', wilaya: 'Wilaya16', numTel: '6789012345' },
  { id: 17, nom: 'Wilson', prenom: 'Olivia', dateNaissance: '1979-12-30', sexe: 'F', statut: 'Bloqué', adresse: '1414 Avenue', commune: 'Commune17', wilaya: 'Wilaya17', numTel: '7890123456' },
  { id: 18, nom: 'Moore', prenom: 'Daniel', dateNaissance: '1998-04-25', sexe: 'M', statut: 'Normal', adresse: '1515 Boulevard', commune: 'Commune18', wilaya: 'Wilaya18', numTel: '8901234567' },
  { id: 19, nom: 'Taylor', prenom: 'Sophia', dateNaissance: '1986-10-08', sexe: 'F', statut: 'Bloqué', adresse: '1616 Street', commune: 'Commune19', wilaya: 'Wilaya19', numTel: '9012345678' },
];

export default function Conducteurs() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [expandedRow, setExpandedRow] = React.useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleExpandClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const getStatutStyle = (statut) => ({
    color: statut === 'Bloqué' ? 'red' : 'green',
    backgroundColor: statut === 'Bloqué' ? '#FFB2B2' : '#ECF6F3',
    borderRadius: '5px',
    padding: '5px'
  });

  return (
    <>
      <h2>Conducteurs</h2>
      <Box sx={{ height: 670, width: '100%', backgroundColor: '#FFFFFF' }} >
        <DataGrid className='dataGrid'
          rows={rows}
          columns={columns(handleExpandClick, expandedRow, getStatutStyle)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            }
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          disableDensitySelector
          disableColumnSelector
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, width: isSmallScreen ? '90%' : 400 }}>
            <h2 id="modal-modal-title">Détails du Conducteur</h2>
            {selectedRow && (
              <div id="modal-modal-description">
                <p>ID: {selectedRow.id}</p>
                <p>Nom: {selectedRow.nom}</p>
                <p>Prénom: {selectedRow.prenom}</p>
                <p>Date de Naissance: {selectedRow.dateNaissance}</p>
                <p>Sexe: {selectedRow.sexe}</p>
                <p>Statut: {selectedRow.statut}</p>
                <p>Adresse: {selectedRow.adresse}</p>
                <p>Commune: {selectedRow.commune}</p>
                <p>Wilaya: {selectedRow.wilaya}</p>
                <p>Numéro de Téléphone: {selectedRow.numTel}</p>
              </div>
            )}
          </Box>
        </Modal>
      </Box>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
