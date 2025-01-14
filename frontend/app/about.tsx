import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { aboutStyles } from '../styles/global';

export default function About() {
    return (
        <View style={aboutStyles.container}>
            <Text style={aboutStyles.title}>About Quant Trading Card Game</Text>
            <Text style={aboutStyles.description}>
                Description to be added
            </Text>
        
            {/* Navigate Back to Home */}
            <Link href="/" style={aboutStyles.linkButton}>
                <Text style={aboutStyles.linkText}>Back to Home</Text>
            </Link>
        </View>
    );
}