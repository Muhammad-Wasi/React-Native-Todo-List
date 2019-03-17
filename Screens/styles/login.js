import { StyleSheet} from 'react-native';


const loginStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        position:'relative',
        backgroundColor:'#19BBB4',
    },
    left:{
        position:'absolute',
        left:10
    },
    body:{
        position:'absolute',
        left:'50%'
    },
    right:{
        position:'absolute',
        right:10
    }
});
export default loginStyle;