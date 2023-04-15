import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MissionItems from './MissionItems';
import Missions from './Missions';
import MissionTest from './missionsReducer';
import store from '../redux/store';

const mission = {
  id: '2',
  name: 'Commercial Resupply Services',
  description: 'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo.',
  reserved: false,
};

jest.mock('axios');
describe('Mission must pass the test', () => {
  test('added mission must return data', () => {
    expect(MissionTest.addedMissions()).toBeDefined();
  });
  test('added Mission return value length must be 4', () => {
    expect(MissionTest.addedMissions()).toHaveLength(3);
  });
  test('added Mission must return name t', () => {
    expect(MissionTest.addedMissions()[2].description).toBe('Amazing rocket!');
  });
});

describe('Mission component', () => {
  it('renders Mission component', () => {
    const rendering = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(rendering).toMatchSnapshot();
  });
  it('renders Mission component', () => {
    const itemMock = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MissionItems
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(itemMock).toMatchSnapshot();
  });
});
