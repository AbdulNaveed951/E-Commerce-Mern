const express = require("express");
const {getAllProducts,
    createProduct,
    updateProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    deleteProducts,
    getAdminProducts}= require("../Controllers/productController");
const { isAuthenticatedUser, authorizeRoles, } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),createProduct)
// router
//   .route("/admin/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser,updateProduct)
router.route("/admin/product/:id").delete(isAuthenticatedUser,deleteProducts)
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);






module.exports = router;