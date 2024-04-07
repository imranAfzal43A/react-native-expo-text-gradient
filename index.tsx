import * as React from 'react'
import { Platform, StyleProp, Text, TextProps, TextStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient as LinearGradientWeb } from 'react-text-gradients'
interface Props extends TextProps {
    children: string;
    style: StyleProp<TextStyle>,
    color1: string,
    color2: string
}
function TextLinearGradient({ children, style, color1 = '#6359F8', color2 = '#B63CF6' }: Props) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                Platform.OS === 'web' ?
                    <h1>
                        <LinearGradientWeb gradient={['to left', `${color1},${color2}`]}>
                            {children}
                        </LinearGradientWeb>
                    </h1>
                    :
                    <MaskedView maskElement={<Text />}>
                        <LinearGradient
                            locations={[0, 1]}
                            colors={[color1, color2]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <Text style={[style, { opacity: 0 }]}>{children}</Text>
                        </LinearGradient>
                    </MaskedView>
            }

        </View>
    );
}
export default TextLinearGradient 