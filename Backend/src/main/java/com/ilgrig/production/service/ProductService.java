package com.ilgrig.production.service;

import com.ilgrig.production.domain.Product;
import com.ilgrig.production.dto.OrderProductDto;
import com.ilgrig.production.exception.ResourceNotFoundException;
import com.ilgrig.production.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    public Product getProduct(long productId) {
        return productRepository
                .findById(productId)
                .orElseThrow(() -> new ResourceAccessException("Product not found"));
    }

    public void validateProductsExistence(List<OrderProductDto> orderProducts) {
        List<OrderProductDto> list = orderProducts
                .stream()
                .filter(op -> Objects.isNull(getProduct(op
                        .getProduct()
                        .getProductId())))
                .collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(list)) {
            throw new ResourceNotFoundException("Product not found");
        }
    }
}
