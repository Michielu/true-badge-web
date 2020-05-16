//module is a plain JavaScript object with an exports property. 
// exports is a plain JavaScript variable that happens to be set to module.exports
import BadgeRoutes from './badgeRoutes';
import ImageRoutes from './imageRoutes';
import AudioRoutes from './audioRoutes';

const initRoute = (app) => {
    app.get('/', async (_, res) => {
        res.send("Welcome to true badge web");
    });
}

export default (app, db) => {
    initRoute(app),
        BadgeRoutes.post(app, db),
        BadgeRoutes.get(app, db),
        ImageRoutes.post(app, db),
        ImageRoutes.get(app, db),
        AudioRoutes.post(app, db),
        AudioRoutes.get(app, db)
}