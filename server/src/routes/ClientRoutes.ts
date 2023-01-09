import ClientController from "../controllers/ClientController";
import router from "../utils/routerConfig";

router.route("/")
    .get(ClientController.getAll)
    .post(ClientController.add)

router.route("/:id")
    .get(ClientController.getById)
    .put(ClientController.update)
    .delete(ClientController.delete)

export default router