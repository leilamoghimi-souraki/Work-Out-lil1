import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigation';
import { PressableText } from '../components/styled/PressableText';

export type PersonalData={
    height:number,
    age:number,
}
type Props = NativeStackScreenProps<RootStackParamList, 'Evaluation'>
export default function PersonalInfo({ navigation }: Props,_PersonalData: any) {
const [result,setResult]=useState<[]>([]);

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Height"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    keyboardType="numeric"
                />

            </View>
            <PressableText
                style={{ marginTop: 10, alignItems: "center" }}
                text='Best Weight '
               /> 

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 50
    },
    rowContainer: {
        flexDirection: "row",

    },
    input: {
        flex: 1,
        margin: 8,
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: "green",
    },

})