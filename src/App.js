import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const MAX_DESCRIPTION_LENGTH = 50;

const menuData = {
  Inicio: [],
  Burritas: [
    { name: "Burrita de pierna", description: "", price: "$29" },
    {
      name: "Burrita tradicional",
      description: "Frijoles con pierna",
      price: "$26",
      img: "imagenes/burrita_tradicional.jpg",
    },
    { name: "Burrita de frijoles con queso", description: "", price: "$23" },
    {
      name: "Burro momia",
      description:
        "Jitomate, cebolla, crema, mostaza, catsup, queso blanco, salchicha y tocino",
      price: "$43",
      img: "imagenes/burro_momia.jpg",
    },
    {
      name: "Burra Cris",
      description:
        "Doble tortilla, salchicha, pierna, queso blanco y amarillo, jamón, tocino, lechuga, jitomate, cebolla, crema, catsup y mostaza",
      price: "$78",
      img: "imagenes/burrita_cris.jpg",
    },
    {
      name: "Burraneitor",
      description:
        "Bistec, chorizo, frijoles, cebolla guisada, queso y papas a la francesa",
      price: "$75",
    },
  ],
  Hamburguesas: [
    {
      name: "Hamburguesa",
      description:
        "Carne, queso blanco, queso amarillo, jamón, tocino, jitomate, cebolla, lechuga, crema, catsup, mostaza",
      price: "$62",
      img: "imagenes/hamburguesa.jpg",
    },
    {
      name: "Hamburguesa especial",
      description:
        "Carne, jamón, queso blanco, queso amarillo, tocino, salchicha, jitomate, cebolla, lechuga, crema, catsup, mostaza",
      price: "$71",
      img: "imagenes/hamburguesa_especial.jpg",
    },
    {
      name: "Hamburguesa doble",
      description:
        "Doble carne, doble jamón, doble queso blanco, doble queso amarillo, doble tocino, jitomate, cebolla, lechuga, crema, catsup, mostaza",
      price: "$110",
      img: "imagenes/hamburguesa_doble.jpg",
    },
    {
      name: "Hamburguesa cubana",
      description:
        "Carne, queso blanco, queso amarillo, jamón, salchicha, pierna, chorizo, jitomate, cebolla, lechuga, crema, catsup, mostaza",
      price: "$90",
      img: "imagenes/hamburguesa_cubana.jpg",
    },
    {
      name: "Hamburguesa doble cubana",
      description:
        "Doble carne, doble jamón, doble queso blanco, doble queso amarillo, doble tocino, doble pierna, doble salchicha, doble chorizo, jitomate, cebolla, lechuga, crema, catsup, mostaza",
      price: "$158",
      img: "imagenes/hamburguesa_doble_cubana.jpg",
    },
  ],
  HotDogs: [
    {
      name: "Hot dog",
      description: "",
      price: "$25",
      img: "imagenes/hotdog.jpg",
    },
    {
      name: "Pierna Dogo",
      description: "Dogo normal con pierna extra",
      price: "$40",
      img: "imagenes/hotdog_pierna.jpg",
    },
    {
      name: "Huevo Dogo",
      description: "Dogo normal con huevo encima",
      price: "$36",
      img: "imagenes/hotdog_huevo.jpg",
    },
    {
      name: "Chile Dogo",
      description:
        "Dogo normal con chile güero y doble tocino. El chile lleva dentro una salchicha",
      price: "$40",
      img: "imagenes/hotdog_chile.jpg",
    },
    {
      name: "Chori Dogo",
      description: "Dogo normal con chorizo",
      price: "$31",
      img: "imagenes/choridogos.jpg",
    },
    {
      name: "Dogo especial",
      description: "Dogo normal con jamón y queso gratinado extra",
      price: "$35",
      img: "imagenes/hotdog_especial.jpg",
    },
    {
      name: "Dogo gratinado",
      description: "Dogo normal con queso gratinado extra",
      price: "$34",
      img: "imagenes/hotdog_gratinado.jpg",
    },
    {
      name: "Dogo Pacheco",
      description: "Dogo gigante con queso amarillo, jamón y cebolla guisada",
      price: "$75",
    },
  ],
  Molletes: [
    {
      name: "Molletes dulces",
      description: "Cajeta, fresa, miel lechera",
      price: "$22",
      img: "imagenes/mollete_dulce.jpg",
    },
    {
      name: "Mollete ranchero",
      description: "Frijoles y queso",
      price: "$30",
      img: "imagenes/mollete_ranchero.jpg",
    },
    {
      name: "Mollete ranchero estilo Paúl",
      description: "Frijoles, queso, jamón y tocino",
      price: "$40",
      img: "imagenes/mollete_ranchero_paul.jpg",
    },
    {
      name: "Mollete ranchero estilo García",
      description: "Frijoles, queso, huevo y tocino",
      price: "$40",
      img: "imagenes/mollete_ranchero_garcia.jpg",
    },
  ],
  Platillos: [
    { name: "Platillo de huevos con frijoles", description: "", price: "$73" },
  ],
  Postres: [
    { name: "Arroz con leche", description: "", price: "$17" },
    {
      name: "Panqueque",
      description: "",
      price: "$25",
      img: "imagenes/panqueque.jpg",
    },
    {
      name: "Panqueque con fruta",
      description: "",
      price: "$50",
      img: "imagenes/panqueque_con_fruta.jpg",
    },
    { name: "Pay", description: "", price: "$21" },
    {
      name: "Galletas",
      description: "",
      price: "$25 / $30",
      img: "imagenes/galletas.jpg",
    },
    {
      name: "Concha con fruta",
      description: "",
      price: "$36",
      img: "imagenes/concha_con_fruta.jpg",
    },
    {
      name: "Pan dulce",
      description: "",
      price: "$14",
      img: "imagenes/pan.jpg",
    },
  ],
  Quesadillas: [
    {
      name: "Quesadilla",
      description: "",
      price: "$20",
      img: "imagenes/quesadilla.jpg",
    },
    {
      name: "Quesadilla con chorizo",
      description: "",
      price: "$30",
      img: "imagenes/quesadilla_chorizo.jpg",
    },
    { name: "Quesadilla con jamón", description: "", price: "$23" },
    {
      name: "Quesadilla con bistec",
      description: "",
      price: "$38",
      img: "imagenes/quesadilla_bistec.jpg",
    },
    {
      name: "Sincronizada",
      description:
        "Jamón, queso blanco, queso amarillo, jitomate, cebolla, lechuga, crema, catsup y mostaza",
      price: "$48",
      img: "imagenes/sincronizada.jpg",
    },
  ],
  Tacos: [
    {
      name: "Taco de bisteck",
      description: "",
      price: "$15",
      img: "imagenes/tacos_bistec_chorizo.jpg",
    },
    {
      name: "Taco de chorizo",
      description: "",
      price: "$15",
      img: "imagenes/tacos_bistec_chorizo.jpg",
    },
  ],
  Bebidas: [
    { name: "Café negro chico", description: "", price: "$15" },
    { name: "Café mediano negro", description: "", price: "$17" },
    { name: "Canela chica o té", description: "", price: "$15" },
    { name: "Café con leche chico", description: "", price: "$17" },
    { name: "Café con leche mediano", description: "", price: "$20" },
    {
      name: "Chocolate caliente chico",
      description: "",
      price: "$21",
      img: "imagenes/chocolate_caliente.jpg",
    },
    {
      name: "Chocolate caliente mediano",
      description: "Medio litro",
      price: "$26",
      img: "imagenes/chocolate_caliente.jpg",
    },
    {
      name: "Chocolate caliente grande",
      description: "1 litro",
      price: "52",
      img: "imagenes/chocolate_caliente.jpg",
    },
    { name: "Avena con leche chica", description: "", price: "$17" },
    { name: "Avena con leche mediana", description: "", price: "$20" },
    { name: "Arroz con leche chico", description: "", price: "$17" },
    { name: "Arroz con leche mediano", description: "", price: "$20" },
    {
      name: "Chocomilk",
      description: "Fresa, vainilla o chocolate",
      price: "$25",
      img: "imagenes/chocomilk.jpg",
    },
    { name: "Chocomil de litro", description: "", price: "$46" },
    {
      name: "Licuado",
      description: "Fresa, plátano o combinado",
      price: "$28",
    },
    { name: "Licuado con avena", description: "", price: "$33" },
    {
      name: "Frappuccino",
      description: "",
      price: "$38",
      img: "imagenes/frappuccino.jpg",
    },
    {
      name: "Frappuccino de cajeta",
      description: "",
      price: "$45",
      img: "imagenes/frappuccino_cajeta.jpg",
    },
    { name: "Refresco", description: "", price: "$21" },
    { name: "Jugo Jumex", description: "", price: "$20" },
    { name: "Gatorade", description: "", price: "$28" },
    { name: "Suero", description: "", price: "$28" },
    { name: "Agua natural", description: "", price: "$17" },
    { name: "Vive 100", description: "", price: "$21" },
    { name: "Agua fresca chica", description: "", price: "$18" },
    { name: "Agua fresca de litro", description: "", price: "$23" },
  ],
  Extras: [
    { name: "Salchicha extra", description: "", price: "$13" },
    { name: "Carne de hamburguesa extra", description: "", price: "$33" },
    { name: "Ingrediente extra", description: "", price: "$7" },
    { name: "Extra de bistec", description: "", price: "$18" },
    { name: "Extra de pierna", description: "", price: "$12" },
    { name: "Palomitas", description: "", price: "$15" },
    {
      name: "Papas a la francesa",
      description: "",
      price: "$25",
      img: "imagenes/papas_francesa.jpg",
    },
    { name: "Orden de salchipulpos", description: "", price: "$51" },
    { name: "Huevos cocidos", description: "Precio por unidad", price: "$7" },
    {
      name: "Ensalada",
      description: "Panela, jamón de pavo, lechuga, cebolla, jitomate",
      price: "$48",
      img: "imagenes/ensalada.jpg",
    },
    { name: "Kakes de avena y proteína", description: "", price: "$46" },
    {
      name: "Salchitaco",
      description: "",
      price: "$18",
      img: "imagenes/salchitaco.jpg",
    },
    {
      name: "Chile con queso",
      description: "",
      price: "$30",
      img: "imagenes/chile_con_queso.jpg",
    },
  ],
  Sandwich: [
    {
      name: "De pierna",
      description: "",
      price: "$31",
      img: "imagenes/emparedado_pierna.jpg",
    },
    {
      name: "De jamón",
      description: "",
      price: "$22",
      img: "imagenes/emparedado_jamon.jpg",
    },
    { name: "De panela", description: "", price: "$21" },
    { name: "De frijoles con queso", description: "", price: "$21" },
    { name: "De huevo con jamón", description: "", price: "$21" },
    {
      name: "Cuernito con jamón",
      description: "",
      price: "$35",
      img: "imagenes/cuernito_jamon.jpg",
    },
  ],
  Lonches: [
    {
      name: "Lonche de pierna",
      description: "",
      price: "$56",
      img: "imagenes/lonche_pierna.jpg",
    },
    { name: "Lonche de huevo", description: "", price: "$43" },
    {
      name: "Lonche de huevo con jamón",
      description: "",
      price: "$48",
      img: "imagenes/lonche_huevo_jamon.jpg",
    },
    { name: "Lonche de frijoles con queso", description: "", price: "$43" },
    { name: "Lonche de jamón", description: "", price: "$43" },
    { name: "Lonche de panela", description: "", price: "$43" },
    {
      name: "Lonche de bistec",
      description: "Frijoles, cebolla y bistec",
      price: "$73",
    },
    {
      name: "Lonche Tetas",
      description:
        "Pierna, jamón, panela, queso blanco, queso amarillo, salchicha, tocino, jitomate, cebolla, lechuga, crema, catsup y mostaza",
      price: "$106",
      img: "imagenes/lonche_tetas.jpg",
    },
  ],
};

function App() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [expandedDescription, setExpandedDescription] = useState({});

  // Función para manejar la expansión de la descripción
  const handleExpandDescription = (idx) => {
    setExpandedDescription((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = Object.keys(menuData);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 4 }}>
      {/* Header */}
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src="/imagenes/logo.png"
            alt="Logo del Restaurante"
            style={{
              width: 24, // Tamaño del ancho, similar al tamaño de un ícono
              height: 24, // Tamaño del alto, similar al tamaño de un ícono
              marginRight: 8, // Espacio entre el logo y el texto
            }}
          />
          <Typography variant="h6" component="div">
            Burritas Baja Avión
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Category Tabs */}
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="category tabs"
        sx={{
          backgroundColor: "white",
          marginBottom: 2,
          position: "sticky",
          top: 64,
          zIndex: 1100,
        }}>
        {categories.map((category, index) => (
          <Tab
            key={category}
            label={
              category === "Inicio" ? (
                <HomeIcon /> // Muestra el ícono de Home solo para "Inicio"
              ) : (
                category
              )
            }
          />
        ))}
      </Tabs>

      {/* Category Content */}
      <Box sx={{ padding: 2 }}>
        {categories.map((category, index) => (
          <Box
            key={category}
            role="tabpanel"
            hidden={selectedCategory !== index}
            aria-labelledby={`tab-${index}`}>
            {selectedCategory === index && (
              <>
                {/* Contenido de la Tab de Inicio */}
                {category === "Inicio" ? (
                  <Box textAlign="center">
                    <img
                      src="/imagenes/bajando_avion.png"
                      alt="Logo del Restaurante"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginBottom: 20,
                      }}
                    />

                    {/* Horario de Servicio en un cuadro con esquinas redondeadas */}
                    <Box
                      sx={{
                        padding: 2,
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper, // Fondo acorde al tema
                        boxShadow: 1,
                        display: "inline-block",
                        marginBottom: 2,
                      }}>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                        Horario de Servicio
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                        Lunes a Domingo: 9:00 am - 9:00 pm
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                        Descansamos los Martes
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "1rem" }}>
                        Servicio a Domicilio termina a las 6:00 am
                      </Typography>
                    </Box>

                    <Box sx={{ width: "100%", height: "300px", marginTop: 2 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9347415311368!2d-103.30488902403661!3d20.672233799927096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b17cdf93ab33%3A0xf7d6c4472896c8ff!2sC.%20Industria%202513%2C%20Jardines%20de%20Guadalupe%2C%2044740%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1730310948848!5m2!1ses!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Ubicación en Google Maps"></iframe>
                    </Box>

                    {/* Información de la dirección */}
                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: 2,
                        fontSize: "1rem",
                        color: "text.secondary",
                      }}>
                      Estamos a sus órdenes en el mercado Felipe Ángeles, calle
                      Industria 2513, cruce con Huertas y Guelatao, Guadalajara,
                      Jalisco.
                    </Typography>

                    {/* Botones de Redes Sociales */}
                    <Box
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                      }}>
                      <Button
                        variant="contained"
                        color="primary"
                        href="https://www.facebook.com/RentaDeDiablosVentaDeCafeYBurritaspepe"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          minWidth: "40px",
                          minHeight: "40px",
                          padding: "8px",
                        }}>
                        <FacebookIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        href="https://api.whatsapp.com/send?phone=5213314701601&text=Enlace%3A%0Ahttps%3A%2F%2Ffb.me%2F8dF1KxgLB%0A%0A%C2%A1Hola%21+Podr%C3%ADas+darme+m%C3%A1s+informaci%C3%B3n+de..."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          minWidth: "40px",
                          minHeight: "40px",
                          padding: "8px",
                        }}>
                        <WhatsAppIcon />
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  // Contenido para las demás categorías
                  <Grid container spacing={2}>
                    {menuData[category].map((dish, idx) => {
                      // Verificar si hay descripción
                      const hasDescription = !!dish.description;
                      // Verificar si la descripción es más larga que el límite
                      const isLongDescription =
                        hasDescription &&
                        dish.description.length > MAX_DESCRIPTION_LENGTH;
                      // Mostrar descripción completa o truncada según el estado
                      const descriptionToShow = expandedDescription[idx]
                        ? dish.description
                        : `${dish.description.slice(
                            0,
                            MAX_DESCRIPTION_LENGTH
                          )}${isLongDescription ? "..." : ""}`;

                      return (
                        <Grid item xs={12} key={idx}>
                          <Card sx={{ display: "flex", alignItems: "center" }}>
                            {dish.img ? (
                              <CardMedia
                                component="img"
                                sx={{
                                  width: 100,
                                  height: 100,
                                  objectFit: "cover",
                                  flexShrink: 0,
                                }}
                                image={dish.img}
                                alt={dish.name}
                              />
                            ) : (
                              <Box
                                sx={{
                                  width: 100,
                                  height: 100,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  bgcolor: "grey.300",
                                  flexShrink: 0,
                                }}>
                                <FastfoodIcon
                                  sx={{ fontSize: 40, color: "grey.600" }}
                                />
                              </Box>
                            )}
                            <CardContent sx={{ flex: 1 }}>
                              <Typography variant="h6">{dish.name}</Typography>
                              {hasDescription && (
                                <>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    {descriptionToShow}
                                  </Typography>
                                  {/* Botón "Ver más" si la descripción es larga */}
                                  {isLongDescription && (
                                    <Button
                                      size="small"
                                      onClick={() =>
                                        handleExpandDescription(idx)
                                      }>
                                      {expandedDescription[idx]
                                        ? "Ver menos"
                                        : "Ver más"}
                                    </Button>
                                  )}
                                </>
                              )}
                              <Typography variant="subtitle1" color="primary">
                                {dish.price}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
