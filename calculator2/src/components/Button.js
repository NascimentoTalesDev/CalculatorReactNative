import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native"


const styles = StyleSheet.create({
    Button: {
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#888",
        textAlign: "center",
        padding: 10,
        fontSize: 40,
    },
    DoubleButton: {
        width: (Dimensions.get("window").width / 4) * 2
    },
    TripleButton: {
        width: (Dimensions.get("window").width / 4) * 3
    },
    OperatorButton: {
        backgroundColor: "orange"
    }
})

export default props => {
    const stylesButtons = [styles.Button]
    if (props.double) stylesButtons.push(styles.DoubleButton)
    if (props.triple) stylesButtons.push(styles.TripleButton)
    if (props.operator) stylesButtons.push(styles.OperatorButton)
    return(
        <TouchableHighlight  onPress={() => props.onClick(props.label)}>
            <Text style={stylesButtons}>{props.label}</Text>
        </TouchableHighlight>
    )   
}

