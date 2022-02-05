import React from "react"
import { View } from "react-native"

type SpaceProps = {
    height: number
}

export const Space: React.FC<SpaceProps> = (props) => <View style={{ height: props.height }}></View>