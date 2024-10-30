import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4500", // Naranja vibrante
    },
    secondary: {
      main: "#8B0000", // Rojo oscuro
    },
    background: {
      default: "#1A1A1A", // Fondo oscuro para toda la app
      paper: "#2E2E2E", // Fondo para tarjetas y otros elementos
    },
    text: {
      primary: "#FFFFFF", // Texto principal en blanco
      secondary: "#D3D3D3", // Texto secundario en gris claro
    },
    accent: {
      main: "#FFD700", // Amarillo dorado para acentos
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    body1: {
      color: "#D3D3D3",
    },
    button: {
      color: "#FFFFFF",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF4500", // Naranja en la barra de AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#FF4500",
          "&:hover": {
            backgroundColor: "#E63900", // Un tono más oscuro en hover
          },
        },
        containedSecondary: {
          backgroundColor: "#8B0000",
          "&:hover": {
            backgroundColor: "#6B0000", // Un tono más oscuro en hover
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#D3D3D3", // Texto gris claro para tabs no seleccionadas
          backgroundColor: "#2E2E2E", // Fondo oscuro para mayor contraste
          "&.Mui-selected": {
            color: "#FFFFFF", // Texto blanco para la tab seleccionada
            backgroundColor: "#FF4500", // Naranja de fondo para la tab seleccionada
          },
        },
        indicator: {
          backgroundColor: "#FFD700", // Amarillo dorado para el indicador debajo de la tab seleccionada
        },
      },
    },
  },
});

export default theme;
