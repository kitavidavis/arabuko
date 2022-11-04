import { List, Paper, Text } from "@mantine/core";

export default function Benefits(){
    return (
        <Paper p="xl" mr={'10%'} ml="10%">
        <Text>
        By participating in forest management, communities benefits from forests by: 
ko-Sokoke forest, KFS has entered an agreement with Gede, Jilore and Sokoke and established forest stations in the respective areas. As part of the Participatory Forest Management Agreements (PFMA), the communities are involved in forest management through:

    </Text>
    <List mt={40} spacing="lg" >
        <List.Item>
        Accessing fuel wood for domestic use
        </List.Item>
        <List.Item>
        Using designated forest stations for beekeeping
        </List.Item>
        <List.Item>
        Using designated locations in the forest for cultural and religious activities.        </List.Item>
    </List>
        </Paper>
    )
}