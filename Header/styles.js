import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#228b22',
    borderBottomWidth: 3,
    paddingBottom: 2,
    paddingTop: 5,
    paddingHorizontal: 16
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headstyle: {
    marginTop: 50,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headtext:
  {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#696969'
  },
  menuButton: {
    marginLeft: 'auto',
    marginLeft: 180
  },
});

export default styles;