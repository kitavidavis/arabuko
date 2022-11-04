import { List, Paper, Text } from "@mantine/core";

export default function Governance(){
    return (
        <Paper p="xl" mr={'10%'} ml="10%">
        <Text>
        Forest Act 2016 allows Kenya Forest Service (KFS) to enter into management agreements with local communities to promote participatory management of public forests.
<br /> <br />
In Arabuko-Sokoke forest, KFS has entered an agreement with Gede, Jilore and Sokoke and established forest stations in the respective areas. As part of the Participatory Forest Management Agreements (PFMA), the communities are involved in forest management through:

    </Text>
    <List mt={40} spacing="lg" >
        <List.Item>
        Carrying out forest patrols to curb illegal logging and poaching activities.

        </List.Item>
        <List.Item>
        Monitoring of forest degradation events which may include human activities, forest fires and insect infestation.
        </List.Item>
        <List.Item>
        Contributing to forest regeneration through planting seedling  in the degraded forest locations
        </List.Item>
    </List>
        </Paper>
    )
}