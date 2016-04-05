import React, {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
  H3,
  Content,
  Button,
} from 'carbon-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default function ButtonsDemo() {
  return (
    <Content>
      <View style={cs.padding}>
        <View style={cs.p}><Button color="stable" text="Stable" /></View>
        <View style={cs.p}><Button color="primary" text="Primary" /></View>
        <View style={cs.p}><Button color="secondary" text="Secondary" /></View>
        <View style={cs.p}><Button color="danger" text="Danger" /></View>
        <View style={cs.p}><Button color="dark" text="Dark" /></View>
      </View>

      <H3 style={styles.sectionHeader}>Outline</H3>
      <View style={cs.padding}>
        <View style={cs.p}><Button color="stable" text="Stable Outline" outline /></View>
        <View style={cs.p}><Button color="primary" text="Primary Outline" outline /></View>
        <View style={cs.p}><Button color="secondary" text="Secondary Outline" outline /></View>
        <View style={cs.p}><Button color="danger" text="Danger Outline" outline /></View>
        <View style={cs.p}><Button color="dark" text="Dark Outline" outline /></View>
      </View>

      <H3 style={styles.sectionHeader}>Clear</H3>
      <View style={cs.padding}>
        <View style={cs.p}><Button color="stable" text="Stable Clear" clear /></View>
        <View style={cs.p}><Button color="primary" text="Primary Clear" clear /></View>
        <View style={cs.p}><Button color="secondary" text="Secondary Clear" clear /></View>
        <View style={cs.p}><Button color="danger" text="Danger Clear" clear /></View>
        <View style={cs.p}><Button color="dark" text="Dark Clear" clear /></View>
      </View>

      <H3 style={styles.sectionHeader}>Round</H3>
      <View style={cs.padding}>
        <View style={cs.p}><Button color="stable" text="Stable Round" round /></View>
        <View style={cs.p}><Button color="primary" text="Primary Round" round /></View>
        <View style={cs.p}><Button color="secondary" text="Secondary Round" round /></View>
        <View style={cs.p}><Button color="danger" text="Danger Round" round /></View>
        <View style={cs.p}><Button color="dark" text="Dark Round" round /></View>
      </View>

      <H3 style={styles.sectionHeader}>Block</H3>
      <View style={cs.padding}>
        <View style={cs.marginBottom}><Button color="stable" text="Stable" /></View>
        <View style={cs.marginBottom}><Button color="primary" text="Primary" /></View>
        <View style={cs.marginBottom}><Button color="secondary" text="Secondary" /></View>
        <View style={cs.marginBottom}><Button color="danger" text="Danger" /></View>
        <View style={cs.marginBottom}><Button color="dark" text="Dark" /></View>
      </View>

      <H3 style={styles.sectionHeader}>Full</H3>
      <View style={cs.paddingVertical}>
        <View style={cs.marginBottom}><Button color="stable" text="Stable Full" full /></View>
        <View style={cs.marginBottom}><Button color="primary" text="Primary Full" full /></View>
        <View style={cs.marginBottom}><Button color="secondary" text="Secondary Full" full /></View>
        <View style={cs.marginBottom}><Button color="danger" text="Danger Full" full /></View>
        <View style={cs.marginBottom}><Button color="dark" text="Dark Full" full /></View>
      </View>

      <H3 style={styles.sectionHeader}>Sizes</H3>
      <View style={cs.padding}>
        <View style={cs.p}><Button color="stable" text="Stable Small" size="sm" /></View>
        <View style={cs.p}><Button color="primary" text="Primary Small" size="sm" /></View>
        <View style={cs.p}><Button color="secondary" text="Secondary Medium" /></View>
        <View style={cs.p}><Button color="danger" text="Danger Medium" /></View>
        <View style={cs.p}><Button color="dark" text="Dark Large" size="lg" /></View>
      </View>

      <H3 style={styles.sectionHeader}>Icons</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable"><Icon name="space-shuttle" size={22} /> Stable</Button>
        </View>
        <View style={cs.p}>
          <Button color="primary"><Icon name="home" size={22} /> Primary</Button>
        </View>
        <View style={cs.p}>
          <Button color="secondary"><Icon name="users" size={22} /> Secondary</Button>
        </View>
        <View style={cs.p}>
          <Button color="danger"><Icon name="pencil" size={22} /> Danger</Button>
        </View>
        <View style={cs.p}>
          <Button color="dark"><Icon name="trash" size={22} /> Dark</Button>
        </View>
      </View>
    </Content>
  );
}
