import router from "../utils/routerConfig";

router.route("/")
    .get()
    .post()

router.route("/:id")
    .get()
    .put()
    .delete()

export default router