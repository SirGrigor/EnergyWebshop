package com.ilgrig.production;

import com.ilgrig.production.domain.Product;
import com.ilgrig.production.domain.ProductCategory;
import com.ilgrig.production.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProductionApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductionApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.saveProduct(new Product(1L, "Brownie", 0.65,  "http://placehold.it/200x100", true, 48, ProductCategory.DOMAIN));
            productService.saveProduct(new Product(2L, "Muffin", 1.00,  "http://placehold.it/200x100", true, 36, ProductCategory.DOMAIN));
            productService.saveProduct(new Product(3L, "Cake Pop", 1.35,  "http://placehold.it/200x100", true,24, ProductCategory.DOMAIN));
            productService.saveProduct(new Product(4L, "Apple Tart", 1.50,  "http://placehold.it/200x100", true, 60,ProductCategory.DOMAIN));
            productService.saveProduct(new Product(5L, "Water", 1.50,  "http://placehold.it/200x100", true, 30,ProductCategory.DOMAIN));
            productService.saveProduct(new Product(6L, "Shirt", 2.00,  "http://placehold.it/200x100", false, 0,ProductCategory.DONATED));
            productService.saveProduct(new Product(7L, "Pants", 3.00,  "http://placehold.it/200x100", false, 0,ProductCategory.DONATED));
            productService.saveProduct(new Product(8L, "Jacket", 4.00,  "http://placehold.it/200x100", false, 0,ProductCategory.DONATED));
            productService.saveProduct(new Product(9L, "Toy", 1.00,  "http://placehold.it/200x100", false, 0,ProductCategory.DONATED));
        };
    }

}
