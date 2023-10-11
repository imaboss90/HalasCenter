import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const Milestones = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [totalGoal, setTotalGoal] = useState(0);
  const [numNodes, setNumNodes] = useState(0);
  const [milestoneValue, setMilestoneValue] = useState(0);

  const handleSubmit = () => {
    setMilestoneValue(totalGoal / numNodes);
    setFirstTime(false);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {firstTime ? (
        <View>
          <Text>Set Your Milestone Goals</Text>
          <TextInput
            placeholder="Total Goal (e.g., 10 pounds)"
            keyboardType="numeric"
            onChangeText={(text) => setTotalGoal(parseFloat(text))}
          />
          <TextInput
            placeholder="Number of Nodes (e.g., 5)"
            keyboardType="numeric"
            onChangeText={(text) => setNumNodes(parseInt(text, 10))}
          />
          <Button title="Set Milestones" onPress={handleSubmit} />
        </View>
      ) : (
        <ScrollView>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text>Starting Point</Text>
            {Array.from({ length: numNodes }).map((_, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 10, height: 10, backgroundColor: 'gray', borderRadius: 5, margin: 10 }} />
                <Text>{((index + 1) * milestoneValue).toFixed(2)}</Text>
              </View>
            ))}
            <Text>🏁 End Goal: {totalGoal}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Milestones;
