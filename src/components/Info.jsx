import { Box, Typography, styled } from "@mui/material";

const Info = () => (
  <StyledContainer>
    <Box className="advantages-container">
      <Typography variant="h2" className="title">
        О КОЛЛЕДЖЕ
      </Typography>

      <Typography className="description">
        Бишкекский колледж архитектуры и менеджмента в строительстве
        Министерства Образования и Науки Кыргызской Республики (далее БКАМС)
        образован 15 сентября 1930г. С 1932 года и по настоящее время колледж
        размещается в здании (ул. Льва Толстого-62) которое существует и сегодня
        и является памятником истории архитектуры Кыргызстана. В настоящее время
        БКАМС является одним из старейших средних профессиональных учебных
        заведений республики, имеет богатый опыт в подготовке специалистов
        востребованных в народном хозяйстве Республики. В 1979 году техникум был
        награждён Почётной Грамотой Верховного Совета Кыргызской ССР за большую
        работу по развитию студенческих строительных отрядов. По итогам
        Всесоюзного соревнования техникум в 1982, 1983, 1984, 1985, 1986 занимал
        3 место среди техникумов Советского Союза. Выпуск специалистов постоянно
        растет. Ежегодный выпуск составляет около 200 человек. Коллектив
        преподавателей имеет достаточно высокую подготовку и постоянно
        добивается улучшения качества обучения молодых специалистов. Ежегодно в
        колледже проводятся научно-практические конференции и смотры-конкурсы
        передового педагогического опыта.
      </Typography>
    </Box>
  </StyledContainer>
);

export default Info;

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "1600px",
  padding: "0 80px",
  display: "flex",
  justifyContent: "space-between",
  gap: "6.5rem",

  "& > .advantages-container": {
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      left: "10rem",
    },

    "& > .title": {
      fontSize: "2.5rem",
      fontWeight: "700",
      width: "21.125rem",
      color: theme.palette.primary.dullBlue,
    },

    "& > .description": {
      width: "36rem",
      color: theme.palette.primary.blackGrey,
      fontWeight: "400",
      marginTop: "2.125rem",
      [theme.breakpoints.down("lg")]: {
        width: "15rem",
      },
    },
  },
}));
