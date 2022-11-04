import { Carousel } from "@mantine/carousel";
import { useViewportSize } from "@mantine/hooks";
import { Container, createStyles, Button, Image, Paper, Text, Title } from "@mantine/core";
import AboutImage from "./assets/about.jpg";

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

export default function About(){
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
      sx={{ backgroundImage: `url(${AboutImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: (height-60) * 0.65 }}
      className={classes.card}
    >

<div>
        <Text className={classes.category} size="xs">
          About
        </Text>
      </div>
      <Button component="a" href="/map" variant="white" color="dark">
        View Map
      </Button>

    </Paper>
        </Carousel.Slide>
      </Carousel>
    </div>

        <Paper p="xl" mr={'10%'} ml="10%">
        <Text>
    Arabuko-Sokoke Forest is the largest protected fragment of East African coastal forests. The forest is located in Kilifi County of Kenya and is approximately 420 square kilometers in area. 
        <br /> <br />
The forest is a key ecosystem, providing key ecosystem services to the country while also supporting the livelihoods of communities that live around it.

    </Text>
        </Paper>
    </>
    )
}