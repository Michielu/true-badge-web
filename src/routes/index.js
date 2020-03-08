//module is a plain JavaScript object with an exports property. 
// exports is a plain JavaScript variable that happens to be set to module.exports
import BadgeRoutes from './badgeRoutes';
import ImageRoutes from './imageRoutes';

export default (app, db) => {
    BadgeRoutes.post(app, db),
        BadgeRoutes.get(app, db),
        ImageRoutes.post(app, db),
        ImageRoutes.get(app, db)
}