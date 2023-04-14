export default class MissionTest {
  static addedMissions() {
    const response = {
      data: [
        {
          id: 1,
          missionName: 'Falcon 1',
          description: 'Life of man depends on him',
          reserved: false,
        },
        {
          id: 2,
          missionName: 'Falcon 9',
          description: 'Never give up on your dream',
          reserved: false,
        },
        {
          id: 3,
          missionName: 'Falcon Heavy',
          description: 'Amazing rocket!',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
