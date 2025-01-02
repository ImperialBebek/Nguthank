import React from 'react';
import { Pressable, Animated } from 'react-native';

const PrimaryButton = ({ onPress, children, style }) => {
    const animatedScale = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(animatedScale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
            <Pressable
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={[
                    {
                        backgroundColor: '#30231A',
                        padding: 16,
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    style,
                ]}
            >
                {children}
            </Pressable>
        </Animated.View>
    );
};

export default PrimaryButton;