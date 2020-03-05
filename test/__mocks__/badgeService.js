export const mockPlaySoundFile = jest.fn();
const mockBadgeService = jest.fn().mockImplementation(() => {
    return {
        getUniqueNum: () => {
            return 1340;
        }
    };
});

export default mockBadgeService;