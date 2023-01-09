import UserController from "../controllers/UserController"
import router from "../utils/routerConfig"


router.route("/login")
    .post(UserController.login)

export default router 