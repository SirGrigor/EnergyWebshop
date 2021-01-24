package com.ilgrig.production.controller;

import com.ilgrig.production.domain.Product;
import com.ilgrig.production.service.ProductService;
import com.sun.istack.NotNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = {"", "/"})
    public @NotNull
    Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
}
