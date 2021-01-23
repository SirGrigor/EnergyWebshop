package com.ilgrig.production.service;

import com.ilgrig.production.domain.Product;
import com.ilgrig.production.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    public Product getProduct(long productId){
        return productRepository
                .findById(productId)
                .orElseThrow(() -> new ResourceAccessException("product not found"));
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }
}
