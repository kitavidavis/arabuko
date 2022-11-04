import { Carousel } from "@mantine/carousel";
import { useViewportSize } from "@mantine/hooks";
import { Container, createStyles, Image, Paper, Text, Button, Title } from "@mantine/core";
import DiversityImage from "./assets/biodiversity.jpg";

const useStyles = createStyles((theme) => ({
    card: {
      height: 440,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: 32,
      marginTop: theme.spacing.xs,
    },
  
    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));

export default function Biodiversity(){
    const { height, width} = useViewportSize();
    const { classes } = useStyles();

    return (
        <>
    <div style={{ height:  (height-60) * 0.65, display: 'flex' }}>
      <Carousel withControls={false} withIndicators={false} height="100%" sx={{ flex: 1 }}>
        <Carousel.Slide>
        <Paper
      shadow="md"
      p="xl"
      sx={{ backgroundImage: `url(${DiversityImage})`, height: (height-60) * 0.65 }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          Biodiversity
        </Text>
      </div>
      <Button component="a" href="/map" variant="white" color="dark">
        View Map
      </Button>
    </Paper>
        </Carousel.Slide>
      </Carousel>
    </div>

    <Paper p="xl" mr="10%" ml="10%">
        <Text>
        Arabuko-Sokoke forest has been ranked as the second most important forest for bird conservation in mainland Africa. More than 230 bird species have been recorded in the forest including nine globally threatened species. The forest is also rich in rare and endemic wildlife.
<br /> <br />
In terms of flora, more than 600 plant species have been recorded in the forest.

        </Text>
    </Paper>
    </>
    )
}