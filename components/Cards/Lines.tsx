'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => {
    return <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
}

export default function Lines() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(43, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 76
                },
                {
                    "x": "helicopter",
                    "y": 23
                },
                {
                    "x": "boat",
                    "y": 98
                },
                {
                    "x": "train",
                    "y": 44
                },
                {
                    "x": "subway",
                    "y": 163
                },
                {
                    "x": "bus",
                    "y": 60
                },
                {
                    "x": "car",
                    "y": 223
                },
                {
                    "x": "moto",
                    "y": 89
                },
                {
                    "x": "bicycle",
                    "y": 300
                },
                {
                    "x": "horse",
                    "y": 92
                },
                {
                    "x": "skateboard",
                    "y": 125
                },
                {
                    "x": "others",
                    "y": 24
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(166, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 154
                },
                {
                    "x": "helicopter",
                    "y": 182
                },
                {
                    "x": "boat",
                    "y": 22
                },
                {
                    "x": "train",
                    "y": 296
                },
                {
                    "x": "subway",
                    "y": 195
                },
                {
                    "x": "bus",
                    "y": 85
                },
                {
                    "x": "car",
                    "y": 49
                },
                {
                    "x": "moto",
                    "y": 296
                },
                {
                    "x": "bicycle",
                    "y": 90
                },
                {
                    "x": "horse",
                    "y": 270
                },
                {
                    "x": "skateboard",
                    "y": 291
                },
                {
                    "x": "others",
                    "y": 70
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(357, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 4
                },
                {
                    "x": "helicopter",
                    "y": 215
                },
                {
                    "x": "boat",
                    "y": 33
                },
                {
                    "x": "train",
                    "y": 100
                },
                {
                    "x": "subway",
                    "y": 18
                },
                {
                    "x": "bus",
                    "y": 130
                },
                {
                    "x": "car",
                    "y": 104
                },
                {
                    "x": "moto",
                    "y": 159
                },
                {
                    "x": "bicycle",
                    "y": 147
                },
                {
                    "x": "horse",
                    "y": 233
                },
                {
                    "x": "skateboard",
                    "y": 228
                },
                {
                    "x": "others",
                    "y": 49
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(316, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 276
                },
                {
                    "x": "helicopter",
                    "y": 215
                },
                {
                    "x": "boat",
                    "y": 219
                },
                {
                    "x": "train",
                    "y": 88
                },
                {
                    "x": "subway",
                    "y": 239
                },
                {
                    "x": "bus",
                    "y": 44
                },
                {
                    "x": "car",
                    "y": 88
                },
                {
                    "x": "moto",
                    "y": 272
                },
                {
                    "x": "bicycle",
                    "y": 293
                },
                {
                    "x": "horse",
                    "y": 213
                },
                {
                    "x": "skateboard",
                    "y": 223
                },
                {
                    "x": "others",
                    "y": 44
                }
            ]
        }
    ]

return <Card>
    <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the result of week</CardDescription>
    </CardHeader>
    <CardContent className="h-[250px] flex items center w-full">
        <MyResponsiveLine data={data}/>
    </CardContent>
    </Card>
}