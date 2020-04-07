// export const mockPlaySoundFile = jest.fn();
const mockImageService = jest.fn().mockImplementation(() => {
    return {
        configureBadgeData: (req) => {
            console.log("In mock yo")
            return {
                description: req.body.description,
                contentType: req.file.mimetype,
                size: req.file.size,
                img: ["Binary"]
            };
        }
    };
});

export default mockImageService;